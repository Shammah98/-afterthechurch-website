import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";
const replySchema = z.object({
  threadId: z.string().uuid(),
  message: z.string().min(2).max(3000)
});
const statusSchema = z.object({
  threadId: z.string().uuid(),
  status: z.enum(["open", "closed"])
});

function json(data: object, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "private, no-store, max-age=0" }
  });
}

async function authorised(request: NextRequest) {
  const user = await getUserFromRequest(request);
  return Boolean(user && !user.is_anonymous && isAdminEmail(user.email));
}

export async function GET(request: NextRequest) {
  try {
    if (!(await authorised(request))) return json({ error: "Administrator access denied." }, 403);
    const supabase = createAdminClient();
    const threadId = request.nextUrl.searchParams.get("threadId");

    if (threadId) {
      if (!z.string().uuid().safeParse(threadId).success) return json({ error: "Invalid conversation." }, 400);
      const { data: thread, error } = await supabase
        .from("contact_threads")
        .select("id,display_name,status,created_at,last_message_at")
        .eq("id", threadId)
        .maybeSingle();
      if (error) throw error;
      if (!thread) return json({ error: "Conversation not found." }, 404);

      const { data: messages, error: messageError } = await supabase
        .from("contact_messages")
        .select("id,sender,body,created_at")
        .eq("thread_id", threadId)
        .order("created_at", { ascending: true })
        .limit(200);
      if (messageError) throw messageError;
      return json({ thread, messages: messages || [] });
    }

    const { data: threads, error } = await supabase
      .from("contact_threads")
      .select("id,display_name,status,created_at,last_message_at")
      .order("last_message_at", { ascending: false })
      .limit(100);
    if (error) throw error;
    return json({ threads: threads || [] });
  } catch (error) {
    console.error("Private contact admin retrieval failed:", error);
    return json({ error: "The private inbox could not be loaded." }, 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!(await authorised(request))) return json({ error: "Administrator access denied." }, 403);
    const parsed = replySchema.safeParse(await request.json());
    if (!parsed.success) return json({ error: "Enter a valid reply." }, 400);
    const message = cleanText(parsed.data.message, 3000);
    if (message.length < 2) return json({ error: "Enter a reply before sending." }, 400);
    const supabase = createAdminClient();
    const { data: thread, error } = await supabase
      .from("contact_threads")
      .select("id,status")
      .eq("id", parsed.data.threadId)
      .maybeSingle();
    if (error) throw error;
    if (!thread) return json({ error: "Conversation not found." }, 404);
    if (thread.status !== "open") return json({ error: "Reopen the conversation before replying." }, 409);

    const { error: insertError } = await supabase.from("contact_messages").insert({
      thread_id: thread.id,
      sender: "team",
      body: message
    });
    if (insertError) throw insertError;
    const { error: updateError } = await supabase.from("contact_threads")
      .update({ last_message_at: new Date().toISOString() })
      .eq("id", thread.id);
    if (updateError) console.error("Private contact admin timestamp update failed:", updateError);

    return json({ ok: true });
  } catch (error) {
    console.error("Private contact admin reply failed:", error);
    return json({ error: "Your reply could not be saved." }, 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    if (!(await authorised(request))) return json({ error: "Administrator access denied." }, 403);
    const parsed = statusSchema.safeParse(await request.json());
    if (!parsed.success) return json({ error: "Invalid conversation update." }, 400);
    const { error } = await createAdminClient().from("contact_threads")
      .update({ status: parsed.data.status })
      .eq("id", parsed.data.threadId);
    if (error) throw error;
    return json({ ok: true });
  } catch (error) {
    console.error("Private contact admin update failed:", error);
    return json({ error: "Conversation status could not be updated." }, 500);
  }
}
