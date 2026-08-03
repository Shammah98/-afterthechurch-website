import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUserFromRequest } from "@/lib/auth-server";
import { storyCategories, contentWarningOptions } from "@/lib/content";
import { checkRateLimit } from "@/lib/rate-limit";
import { cleanStringArray, cleanText, readingMinutes } from "@/lib/sanitize";
import { createAdminClient } from "@/lib/supabase-admin";

const schema = z.object({
  title: z.unknown(),
  displayName: z.unknown(),
  churchName: z.unknown(),
  privacyLevel: z.enum(["public", "anonymous_church", "fully_anonymous"]),
  mediaType: z.enum(["written", "audio", "video"]),
  shortSummary: z.unknown(),
  storyText: z.unknown(),
  mediaPath: z.unknown().nullable(),
  categories: z.unknown(),
  contentWarnings: z.unknown(),
  contentIntensity: z.enum(["gentle", "moderate", "high"]),
  religiousBackground: z.unknown(),
  countryRegion: z.unknown(),
  consent: z.boolean(),
  rights: z.boolean(),
  website: z.unknown(),
  startedAt: z.number()
});

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromRequest(request);
    if (!user) {
      return NextResponse.json({ error: "Sign in before submitting a story." }, { status: 401 });
    }

    const allowed = await checkRateLimit(request, "story-submit", 4, 24 * 60 * 60);
    if (!allowed) {
      return NextResponse.json(
        { error: "The daily submission limit has been reached." },
        { status: 429 }
      );
    }

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Some required information is invalid." }, { status: 400 });
    }

    const input = parsed.data;
    const honeypot = cleanText(input.website, 100);

    if (honeypot || Date.now() - input.startedAt < 4000) {
      return NextResponse.json({ error: "The submission could not be accepted." }, { status: 400 });
    }

    if (!input.consent || !input.rights) {
      return NextResponse.json({ error: "Both consent confirmations are required." }, { status: 400 });
    }

    const title = cleanText(input.title, 120);
    const displayName = cleanText(input.displayName, 80);
    const churchName = cleanText(input.churchName, 160);
    const shortSummary = cleanText(input.shortSummary, 650);
    const storyText = cleanText(input.storyText, 40000);
    const religiousBackground = cleanText(input.religiousBackground, 100);
    const countryRegion = cleanText(input.countryRegion, 100);
    const mediaPath = input.mediaPath ? cleanText(input.mediaPath, 500) : null;
    const categories = cleanStringArray(input.categories, storyCategories, 6);
    const contentWarnings = cleanStringArray(
      input.contentWarnings,
      contentWarningOptions,
      10
    );

    if (!title || !displayName || !churchName || !shortSummary) {
      return NextResponse.json({ error: "Complete all required text fields." }, { status: 400 });
    }

    if (input.mediaType === "written" && storyText.length < 150) {
      return NextResponse.json(
        { error: "Written stories require at least 150 characters." },
        { status: 400 }
      );
    }

    if (input.mediaType !== "written") {
      if (!mediaPath || !mediaPath.startsWith(`pending/${user.id}/`)) {
        return NextResponse.json({ error: "The uploaded media path is invalid." }, { status: 400 });
      }
    }

    const supabase = createAdminClient();
    const { error } = await supabase.from("stories").insert({
      user_id: user.id,
      title,
      display_name: displayName,
      church_name: churchName,
      privacy_level: input.privacyLevel,
      media_type: input.mediaType,
      media_path: mediaPath,
      short_summary: shortSummary,
      story_text: storyText || null,
      categories,
      content_warnings: contentWarnings,
      content_intensity: input.contentIntensity,
      reading_minutes: readingMinutes(storyText || shortSummary),
      religious_background: religiousBackground || null,
      country_region: countryRegion || null,
      consent_confirmed: true,
      rights_confirmed: true,
      status: "pending"
    });

    if (error) throw error;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Story submission failed:", error);
    return NextResponse.json(
      { error: "The submission could not be saved. Please try again." },
      { status: 500 }
    );
  }
}
