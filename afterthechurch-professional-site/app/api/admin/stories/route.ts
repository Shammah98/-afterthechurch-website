import { NextRequest, NextResponse } from "next/server";
import { getUserFromRequest, isAdminEmail } from "@/lib/auth-server";
import { createAdminClient } from "@/lib/supabase-admin";

const fullSelect =
  "id,title,display_name,church_name,privacy_level,media_type,media_path,image_path,story_text,short_summary,categories,content_warnings,content_intensity,created_at,author_change_request";

const legacySelect =
  "id,title,display_name,church_name,privacy_level,media_type,media_path,story_text,short_summary,categories,content_warnings,content_intensity,created_at,author_change_request";

type ModerationStoryRow = {
  id: string;
  title: string;
  display_name: string;
  church_name: string;
  privacy_level: string;
  media_type: string;
  media_path: string | null;
  image_path?: string | null;
  story_text: string | null;
  short_summary: string;
  categories: string[] | null;
  content_warnings: string[] | null;
  content_intensity: string;
  created_at: string;
  author_change_request: string | null;
};

type ManagedStoryRow = {
  id: string;
  title: string;
  display_name: string;
  church_name: string;
  created_at: string;
  status: string;
};

export async function GET(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user || !isAdminEmail(user.email)) {
      return NextResponse.json({ error: "Administrator access denied." }, { status: 403 });
    }

    const supabase = createAdminClient();

    const fullResult = await supabase
      .from("stories")
      .select(fullSelect)
      .in("status", ["pending", "changes_requested"])
      .order("created_at", { ascending: true });

    let data = fullResult.data as ModerationStoryRow[] | null;
    let error = fullResult.error;

    // Existing Supabase projects may not yet have the newer image_path column.
    // Keep moderation working until setup.sql is run again to add it.
    if (error && /image_path/i.test(error.message || "")) {
      const legacyResult = await supabase
        .from("stories")
        .select(legacySelect)
        .in("status", ["pending", "changes_requested"])
        .order("created_at", { ascending: true });

      data = legacyResult.data as ModerationStoryRow[] | null;
      error = legacyResult.error;
    }

    if (error) throw error;

    const stories = await Promise.all(
      (data || []).map(async (story) => {
        let mediaUrl: string | null = null;
        let imageUrl: string | null = null;

        if (story.media_path) {
          const { data: signed } = await supabase.storage
            .from("story-media")
            .createSignedUrl(story.media_path, 30 * 60);
          mediaUrl = signed?.signedUrl || null;
        }

        if (story.image_path) {
          const { data: signed } = await supabase.storage
            .from("story-media")
            .createSignedUrl(story.image_path, 30 * 60);
          imageUrl = signed?.signedUrl || null;
        }

        return {
          id: story.id,
          title: story.title,
          displayName: story.display_name,
          churchName: story.church_name,
          privacyLevel: story.privacy_level,
          mediaType: story.media_type,
          mediaUrl,
          imageUrl,
          storyText: story.story_text,
          shortSummary: story.short_summary,
          categories: story.categories || [],
          contentWarnings: story.content_warnings || [],
          contentIntensity: story.content_intensity,
          createdAt: story.created_at,
          authorChangeRequest: story.author_change_request
        };
      })
    );

    const { data: managedData, error: managedError } = await supabase
      .from("stories")
      .select("id,title,display_name,church_name,created_at,status")
      .in("status", ["approved", "withdrawn"])
      .order("created_at", { ascending: false });

    if (managedError) throw managedError;

    const managedStories = (managedData || []) as ManagedStoryRow[];
    const mapManaged = (story: ManagedStoryRow) => ({
      id: story.id,
      title: story.title,
      displayName: story.display_name,
      churchName: story.church_name,
      createdAt: story.created_at
    });

    return NextResponse.json({
      stories,
      publishedStories: managedStories.filter((story) => story.status === "approved").map(mapManaged),
      hiddenStories: managedStories.filter((story) => story.status === "withdrawn").map(mapManaged)
    });
  } catch (error) {
    console.error("Admin queue failed:", error);
    return NextResponse.json(
      {
        error:
          "The moderation queue could not be loaded. Refresh once; if this continues, run the latest supabase/setup.sql in Supabase."
      },
      { status: 500 }
    );
  }
}
