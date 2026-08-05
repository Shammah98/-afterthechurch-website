import { createAdminClient } from "./supabase-admin";
import type { PublicStory, PrivacyLevel } from "./types";

function publicIdentity(
  privacyLevel: PrivacyLevel,
  displayName: string,
  churchName: string
) {
  if (privacyLevel === "fully_anonymous") {
    return {
      authorDisplay: "Anonymous Author",
      churchDisplay: "Church Name Withheld"
    };
  }

  if (privacyLevel === "anonymous_church") {
    return {
      authorDisplay: displayName,
      churchDisplay: "Church Name Withheld"
    };
  }

if (privacyLevel === "anonymous_author") {
  return {
    authorDisplay: "Anonymous Author",
    churchDisplay: churchName
  };
}

  
  return {
    authorDisplay: displayName,
    churchDisplay: churchName
  };
}

async function mapStory(row: Record<string, any>): Promise<PublicStory> {
  const supabase = createAdminClient();
  let mediaUrl: string | null = null;
  let imageUrl: string | null = null;

  if (row.media_path) {
    const { data } = await supabase.storage
      .from("story-media")
      .createSignedUrl(row.media_path, 60 * 60);

    mediaUrl = data?.signedUrl || null;
  }

  if (row.image_path) {
    const { data } = await supabase.storage
      .from("story-media")
      .createSignedUrl(row.image_path, 60 * 60);

    imageUrl = data?.signedUrl || null;
  }

  const identity = publicIdentity(
    row.privacy_level,
    row.display_name,
    row.church_name
  );

  return {
    id: row.id,
    title: row.title,
    ...identity,
    privacyLevel: row.privacy_level,
    categories: row.categories || [],
    contentIntensity: row.content_intensity,
    readingMinutes: row.reading_minutes,
    mediaType: row.media_type,
    mediaUrl,
    imageUrl,
    shortSummary: row.short_summary,
    storyText: row.story_text,
    contentWarnings: row.content_warnings || [],
    religiousBackground: row.religious_background,
    countryRegion: row.country_region,
    createdAt: row.created_at,
    viewCount: row.view_count || 0,
    hasShortSummary: Boolean(row.short_summary)
  };
}

const publicSelect = [
  "id",
  "title",
  "display_name",
  "church_name",
  "privacy_level",
  "categories",
  "content_intensity",
  "reading_minutes",
  "media_type",
  "media_path",
  "image_path",
  "short_summary",
  "story_text",
  "content_warnings",
  "religious_background",
  "country_region",
  "created_at",
  "view_count"
].join(",");

export async function getStoryLibraryCounts() {
  const supabase = createAdminClient();

  const [approvedResult, reviewResult] = await Promise.all([
    supabase
      .from("stories")
      .select("id", { count: "exact", head: true })
      .eq("status", "approved"),
    supabase
      .from("stories")
      .select("id", { count: "exact", head: true })
      .in("status", ["pending", "changes_requested"])
  ]);

  if (approvedResult.error) throw new Error(approvedResult.error.message);
  if (reviewResult.error) throw new Error(reviewResult.error.message);

  return {
    approved: approvedResult.count || 0,
    awaitingReview: reviewResult.count || 0
  };
}

export async function getApprovedStories(limit?: number) {
  const supabase = createAdminClient();
  let query = supabase
    .from("stories")
    .select(publicSelect)
    .eq("status", "approved")
    .order("created_at", { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  if (error) throw new Error(error.message);

  return Promise.all((data || []).map((row) => mapStory(row)));
}

export async function getApprovedStory(id: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("stories")
    .select(publicSelect)
    .eq("status", "approved")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return null;

  return mapStory(data);
}
