import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth-server";
import { cleanText } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";

async function ownedStory(id: string, userId: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("stories")
    .select("id,user_id,media_path,image_path,status")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });

    const { id } = await context.params;
    const story = await ownedStory(id, user.id);
    if (!story) return NextResponse.json({ error: "Submission not found." }, { status: 404 });

    const body = await request.json();
    const supabase = createAdminClient();

    if (body.action === "privacy") {
      if (
  ![
    "public",
    "anonymous_church",
    "anonymous_author",
    "fully_anonymous"
  ].includes(body.privacyLevel)
) {
        return NextResponse.json({ error: "Invalid privacy level." }, { status: 400 });
      }

      const { error } = await supabase
        .from("stories")
        .update({ privacy_level: body.privacyLevel })
        .eq("id", id)
        .eq("user_id", user.id);

      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    if (body.action === "unpublish") {
      const { error } = await supabase
        .from("stories")
        .update({
          status: "withdrawn",
          retention_expires_at: new Date(Date.now() + 30 * 86400000).toISOString()
        })
        .eq("id", id)
        .eq("user_id", user.id);

      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    if (body.action === "request_change") {
      const changeRequest = cleanText(body.request, 2000);
      if (changeRequest.length < 10) {
        return NextResponse.json(
          { error: "Explain the requested change in at least 10 characters." },
          { status: 400 }
        );
      }

      const { error } = await supabase
        .from("stories")
        .update({
          author_change_request: changeRequest,
          status: "changes_requested"
        })
        .eq("id", id)
        .eq("user_id", user.id);

      if (error) throw error;
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Unsupported action." }, { status: 400 });
  } catch (error) {
    console.error("Story update failed:", error);
    return NextResponse.json({ error: "The request could not be saved." }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });

    const { id } = await context.params;
    const story = await ownedStory(id, user.id);
    if (!story) return NextResponse.json({ error: "Submission not found." }, { status: 404 });

    const supabase = createAdminClient();

    const storedPaths = [story.media_path, story.image_path].filter(
      (path): path is string => Boolean(path)
    );

    if (storedPaths.length) {
      const { error: storageError } = await supabase.storage
        .from("story-media")
        .remove(storedPaths);

      if (storageError) throw storageError;
    }

    const { error } = await supabase
      .from("stories")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Story deletion failed:", error);
    return NextResponse.json({ error: "The submission could not be deleted." }, { status: 500 });
  }
}
