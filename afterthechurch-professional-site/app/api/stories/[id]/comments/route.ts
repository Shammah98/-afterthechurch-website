import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase-admin";
import { checkRateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";

const schema = z.object({
  displayName: z.unknown(),
  body: z.unknown(),
  website: z.unknown().optional()
});

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("story_comments")
    .select("id,display_name,body,created_at")
    .eq("story_id", id)
    .eq("status", "approved")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: "Comments could not be loaded." }, { status: 500 });
  }

  return NextResponse.json({
    comments: (data || []).map((item) => ({
      id: item.id,
      displayName: item.display_name,
      body: item.body,
      createdAt: item.created_at
    }))
  });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const allowed = await checkRateLimit(request, "story-comment", 8, 24 * 60 * 60);
    if (!allowed) {
      return NextResponse.json({ error: "The daily comment limit has been reached." }, { status: 429 });
    }

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "The comment information is invalid." }, { status: 400 });
    }

    const honeypot = cleanText(parsed.data.website, 100);
    const displayName = cleanText(parsed.data.displayName, 80);
    const body = cleanText(parsed.data.body, 2000);
    if (honeypot || !displayName || body.length < 10) {
      return NextResponse.json({ error: "Complete the name and comment fields." }, { status: 400 });
    }

    const { id } = await context.params;
    const supabase = createAdminClient();
    const { data: story } = await supabase
      .from("stories")
      .select("id")
      .eq("id", id)
      .eq("status", "approved")
      .maybeSingle();

    if (!story) return NextResponse.json({ error: "Story not found." }, { status: 404 });

    const { error } = await supabase.from("story_comments").insert({
      story_id: id,
      display_name: displayName,
      body,
      status: "pending"
    });
    if (error) throw error;

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Comment submission failed:", error);
    return NextResponse.json({ error: "The comment could not be submitted." }, { status: 500 });
  }
}
