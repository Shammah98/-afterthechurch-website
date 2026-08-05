import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user || !isAdminEmail(user.email)) {
      return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const notes = cleanText(body.moderatorNotes, 3000);
    const supabase = createAdminClient();

    const { data: story, error: fetchError } = await supabase
      .from("stories")
      .select("id,media_path,image_path")
      .eq("id", id)
      .maybeSingle();

    if (fetchError) throw fetchError;
    if (!story) return NextResponse.json({ error: "Submission not found." }, { status: 404 });

    if (body.decision === "approve") {
      let mediaPath = story.media_path;
      let imagePath = story.image_path;

      async function publishPath(path: string | null) {
        if (!path?.startsWith("pending/")) return path;

        const publishedPath = path.replace(/^pending\//, "published/");
        const { error: moveError } = await supabase.storage
          .from("story-media")
          .move(path, publishedPath);

        if (moveError) throw moveError;
        return publishedPath;
      }

      mediaPath = await publishPath(mediaPath);
      imagePath = await publishPath(imagePath);

      const { error } = await supabase
        .from("stories")
        .update({
          status: "approved",
          media_path: mediaPath,
          image_path: imagePath,
          moderator_notes: notes || null,
          author_change_request: null,
          reviewed_at: new Date().toISOString(),
          retention_expires_at: null
        })
        .eq("id", id);

      if (error) throw error;
      return NextResponse.json({
        ok: true,
        storyId: id,
        publicPath: `/stories/${id}`
      });
    }

    if (body.decision === "reject") {
      const { error } = await supabase
        .from("stories")
        .update({
          status: "rejected",
          moderator_notes: notes || null,
          reviewed_at: new Date().toISOString(),
          retention_expires_at: new Date(Date.now() + 30 * 86400000).toISOString()
        })
        .eq("id", id);

      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Invalid moderation decision." }, { status: 400 });
  } catch (error) {
    console.error("Moderation update failed:", error);
    return NextResponse.json({ error: "The moderation decision could not be saved." }, { status: 500 });
  }
}
