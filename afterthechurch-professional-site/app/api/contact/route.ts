import { createHash, randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";
import { sendPrivateContactNotification } from "@/lib/email-notifications";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const cookieName = "atc_private_contact";
const cookieLifetime = 30 * 24 * 60 * 60;
const schema = z.object({
  message: z.string().min(2).max(3000),
  displayName: z.string().max(70).optional(),
  website: z.string().max(100).optional(),
  startedAt: z.number().optional()
});

function digest(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function currentSession(request: NextRequest) {
  const token = request.cookies.get(cookieName)?.value || "";
  return /^[a-f0-9]{64}$/.test(token) ? digest(token) : null;
}

function addSessionCookie(response: NextResponse, token: string) {
  response.cookies.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: cookieLifetime,
    path: "/api/contact"
  });
}

function clearSessionCookie(response: NextResponse) {
  response.cookies.set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/api/contact"
  });
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const site = request.headers.get("sec-fetch-site");
  return site !== "cross-site" && (!origin || origin === request.nextUrl.origin);
}

function noStore(data: object, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "private, no-store, max-age=0" }
  });
}

export async function GET(request: NextRequest) {
  try {
    const tokenHash = currentSession(request);
    if (!tokenHash) return noStore({ active: false, messages: [] });

    const supabase = createAdminClient();
    const { data: thread, error } = await supabase
      .from("contact_threads")
      .select("id,status,display_name")
      .eq("token_hash", tokenHash)
      .maybeSingle();
    if (error) throw error;
    if (!thread) return noStore({ active: false, messages: [] });

    const { data: messages, error: messageError } = await supabase
      .from("contact_messages")
      .select("id,sender,body,created_at")
      .eq("thread_id", thread.id)
      .order("created_at", { ascending: true })
      .limit(200);
    if (messageError) throw messageError;

    return noStore({
      active: true,
      status: thread.status,
      displayName: thread.display_name || "",
      messages: messages || []
    });
  } catch (error) {
    console.error("Private contact retrieval failed:", error);
    return noStore({ error: "Your private conversation could not be loaded right now." }, 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!sameOrigin(request)) return noStore({ error: "This request was not accepted." }, 403);

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return noStore({ error: "Write a message of 2 to 3,000 characters." }, 400);

    const message = cleanText(parsed.data.message, 3000);
    if (message.length < 2) return noStore({ error: "Write a message before sending." }, 400);

    const allowed = await checkRateLimit(request, "private-contact-message", 25, 60 * 60);
    if (!allowed) return noStore({ error: "The message limit has been reached. Please try again later." }, 429);

    const supabase = createAdminClient();
    const tokenHash = currentSession(request);
    let threadId: string | null = null;
    let status = "open";
    if (tokenHash) {
      const { data: existing, error } = await supabase
        .from("contact_threads")
        .select("id,status")
        .eq("token_hash", tokenHash)
        .maybeSingle();
      if (error) throw error;
      threadId = existing?.id || null;
      status = existing?.status || "open";
    }

    if (threadId && status !== "open") {
      return noStore({ error: "This conversation is closed. Delete it to start a new one if you need to contact us again." }, 409);
    }

    let newToken: string | null = null;
    let isNew = false;
    if (!threadId) {
      const honeypot = cleanText(parsed.data.website, 100);
      if (honeypot || typeof parsed.data.startedAt !== "number" ||
          Date.now() - parsed.data.startedAt < 2500 ||
          Date.now() - parsed.data.startedAt > 24 * 60 * 60 * 1000) {
        return noStore({ error: "Your conversation could not be started. Please refresh and try again." }, 400);
      }

      const canStart = await checkRateLimit(request, "private-contact-new-chat", 3, 24 * 60 * 60);
      if (!canStart) return noStore({ error: "The daily limit for new conversations has been reached." }, 429);

      newToken = randomBytes(32).toString("hex");
      const { data: thread, error } = await supabase
        .from("contact_threads")
        .insert({ token_hash: digest(newToken), display_name: cleanText(parsed.data.displayName, 70) || null })
        .select("id")
        .single();
      if (error) throw error;
      threadId = thread.id;
      isNew = true;
    }

    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert({ thread_id: threadId, sender: "visitor", body: message });
    if (insertError) {
      if (isNew) await supabase.from("contact_threads").delete().eq("id", threadId);
      throw insertError;
    }

    const { error: touchError } = await supabase
      .from("contact_threads")
      .update({ last_message_at: new Date().toISOString() })
      .eq("id", threadId);
    if (touchError) console.error("Contact chat timestamp could not be updated:", touchError);

    const response = noStore({ ok: true, active: true }, isNew ? 201 : 200);
    if (newToken) {
      addSessionCookie(response, newToken);
      try {
        await sendPrivateContactNotification();
      } catch (notificationError) {
        console.error("Private contact notification unavailable:", notificationError);
      }
    }
    return response;
  } catch (error) {
    console.error("Private contact send failed:", error);
    return noStore({ error: "Your message could not be sent. Please try again." }, 500);
  }
}

/* Permanently delete this visitor's entire chat, including staff replies. */
export async function DELETE(request: NextRequest) {
  try {
    if (!sameOrigin(request)) return noStore({ error: "This request was not accepted." }, 403);
    const tokenHash = currentSession(request);
    if (tokenHash) {
      const supabase = createAdminClient();
      const { error } = await supabase.from("contact_threads").delete().eq("token_hash", tokenHash);
      if (error) throw error;
    }
    const response = noStore({ ok: true });
    clearSessionCookie(response);
    return response;
  } catch (error) {
    console.error("Private contact deletion failed:", error);
    return noStore({ error: "Your conversation could not be deleted right now." }, 500);
  }
}
