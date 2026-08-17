export type PrivacyLevel =
  | "public"
  | "anonymous_church"
  | "anonymous_author"
  | "fully_anonymous";

export type PublicStory = {
  id: string;
  title: string;
  authorDisplay: string;
  churchDisplay: string;
  privacyLevel: PrivacyLevel;
  categories: string[];
  contentIntensity: "gentle" | "moderate" | "high";
  readingMinutes: number;
  mediaType: "written" | "audio" | "video";
  mediaUrl: string | null;
  imageUrl: string | null;
  shortSummary: string;
  storyText: string | null;
  contentWarnings: string[];
  religiousBackground: string | null;
  countryRegion: string | null;
  createdAt: string;
  viewCount: number;
  hasShortSummary: boolean;
};

export type StorySubmission = {
  title: string;
  displayName: string;
  churchName: string;
  privacyLevel: PrivacyLevel;
  shortSummary: string;
  storyText: string;
  contentIntensity: "gentle" | "moderate" | "high";
  countryRegion: string;
};
