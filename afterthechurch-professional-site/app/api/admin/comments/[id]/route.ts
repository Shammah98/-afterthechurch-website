import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { createAdminClient } from "@/lib/supabase-admin";

const schema = z.object({ decision: z.enum(["approve", "reject"]) });

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const user = await getUserFromRequest(request);
  if (!user || !isAdminEmail(user.email)) return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid moderation decision." }, { status: 400 });
  const { id } = await context.params;
  const status = parsed.data.decision === "approve" ? "approved" : "rejected";
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("story_comments")
    .update({ status, reviewed_at: new Date().toISOString() })
    .eq("id", id);
  if (error) return NextResponse.json({ error: "The comment decision could not be saved." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
