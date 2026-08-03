import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { createAdminClient } from "@/lib/supabase-admin";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const allowed = await checkRateLimit(request, "story-view", 120, 60 * 60);
    if (!allowed) return new NextResponse(null, { status: 204 });

    const { id } = await context.params;
    const supabase = createAdminClient();
    const { error } = await supabase.rpc("increment_story_view", {
      p_story_id: id
    });

    if (error) throw error;
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Story view tracking failed:", error);
    return new NextResponse(null, { status: 204 });
  }
}
