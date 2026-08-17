import { SITE_URL } from "./config";
import { getOrCreateAnonymousSession } from "./supabase";
import type { PublicStory, StorySubmission } from "./types";

async function readJson<T>(response: Response): Promise<T> {
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      typeof body?.error === "string" ? body.error : "Something went wrong. Please try again.";
    throw new Error(message);
  }
  return body as T;
}

export async function fetchStories(): Promise<PublicStory[]> {
  const response = await fetch(`${SITE_URL}/api/mobile/stories`, {
    headers: { Accept: "application/json" }
  });
  const data = await readJson<{ stories: PublicStory[] }>(response);
  return data.stories;
}

export async function fetchStory(id: string): Promise<PublicStory> {
  const response = await fetch(
    `${SITE_URL}/api/mobile/stories/${encodeURIComponent(id)}`,
    { headers: { Accept: "application/json" } }
  );
  const data = await readJson<{ story: PublicStory }>(response);
  return data.story;
}

export async function submitWrittenStory(input: StorySubmission) {
  const session = await getOrCreateAnonymousSession();
  const response = await fetch(`${SITE_URL}/api/stories`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`
    },
    body: JSON.stringify({
      title: input.title,
      displayName: input.displayName,
      churchName: input.churchName,
      privacyLevel: input.privacyLevel,
      mediaType: "written",
      shortSummary: input.shortSummary,
      storyText: input.storyText,
      mediaPath: null,
      imagePath: null,
      categories: [],
      contentWarnings: [],
      contentIntensity: input.contentIntensity,
      religiousBackground: "",
      countryRegion: input.countryRegion,
      consent: true,
      rights: true,
      website: "",
      startedAt: Date.now() - 10000
    })
  });

  return readJson<{ ok: true }>(response);
}
