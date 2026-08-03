import type { Metadata } from "next";
import StoryExplorer from "@/components/StoryExplorer";
import { storyCategories } from "@/lib/content";
import { getApprovedStories } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const metadata: Metadata = { title: "Survivor Stories" };
export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  let stories: PublicStory[] = [];
  let error = "";

  try {
    stories = await getApprovedStories();
  } catch {
    error = "The story library is temporarily unavailable.";
  }

  return (
    <section className="storiesPage">
      <div className="pageIntro">
        <p className="eyebrow">Survivor stories</p>
        <h1>Choose the subject, intensity and level of detail.</h1>
        <p className="lead">
          No story opens automatically. Each card contains a short summary, and
          sensitive material is labelled before the full account appears.
        </p>
      </div>

      {error ? (
        <div className="emptyState"><h2>{error}</h2></div>
      ) : (
        <StoryExplorer stories={stories} categories={storyCategories} />
      )}
    </section>
  );
}
