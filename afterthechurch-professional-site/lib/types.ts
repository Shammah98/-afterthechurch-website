export type MediaType = "written" | "audio" | "video";
export type PrivacyLevel =
  | "public"
  | "anonymous_church"
  | "anonymous_author"
  | "fully_anonymous";
export type ContentIntensity = "gentle" | "moderate" | "high";
export type StoryStatus = "pending" | "approved" | "rejected" | "withdrawn" | "changes_requested";

export interface PublicStory {
  id: string;
  title: string;
  authorDisplay: string;
  churchDisplay: string;
  privacyLevel: PrivacyLevel;
  categories: string[];
  contentIntensity: ContentIntensity;
  readingMinutes: number;
  mediaType: MediaType;
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
}

export interface AccountStory {
  id: string;
  title: string;
  privacyLevel: PrivacyLevel;
  mediaType: MediaType;
  status: StoryStatus;
  createdAt: string;
  moderatorNotes: string | null;
  authorChangeRequest: string | null;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  deck: string;
  category: string;
  readingTime: number;
  intensity: ContentIntensity;
  warnings: string[];
  image: string;
  imageAlt: string;
  overview: string;
  keyPoints: string[];
  fullSections: { heading: string; paragraphs: string[] }[];
  practicalOptions: string[];
  furtherReading: { label: string; note: string }[];
}
