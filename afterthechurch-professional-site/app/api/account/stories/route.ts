import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth-server";
import { createAdminClient } from "@/lib/supabase-admin";

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Sign in to view submissions." }, { status: 401 });
    }

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("stories")
      .select(
        "id,title,privacy_level,media_type,status,created_at,moderator_notes,author_change_request"
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      stories: (data || []).map((story) => ({
        id: story.id,
        title: story.title,
        privacyLevel: story.privacy_level,
        mediaType: story.media_type,
        status: story.status,
        createdAt: story.created_at,
        moderatorNotes: story.moderator_notes,
        authorChangeRequest: story.author_change_request
      }))
    });
  } catch (error) {
    console.error("Account story load failed:", error);
    return NextResponse.json({ error: "Submissions could not be loaded." }, { status: 500 });
  }
}
