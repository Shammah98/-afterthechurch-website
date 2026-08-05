import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function GET(request: NextRequest) {
  const user = await getUserFromRequest(request);
  if (!user || !isAdminEmail(user.email)) return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("story_comments")
    .select("id,story_id,display_name,body,created_at,stories(title)")
    .eq("status", "pending")
    .order("created_at", { ascending: true });
  if (error) return NextResponse.json({ error: "Comment queue could not be loaded." }, { status: 500 });
  return NextResponse.json({ comments: data || [] });
}
