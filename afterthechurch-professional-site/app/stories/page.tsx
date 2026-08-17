import type { Metadata } from "next";
import Link from "next/link";
import StoryExplorer from "@/components/StoryExplorer";
import { storyCategories } from "@/lib/content";
import { getApprovedStories, getStoryLibraryCounts } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const metadata: Metadata = { title: "Survivor Stories" };
export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  let stories: PublicStory[] = [];
  let awaitingReview = 0;
  let error = "";

  try { stories = await getApprovedStories(); }
  catch (storyError) { console.error("Approved stories could not be loaded:", storyError); error = "We could not load the published stories just now."; }

  if (!error) {
    try { const counts = await getStoryLibraryCounts(); awaitingReview = counts.awaitingReview; }
    catch (countError) { console.error("Story review count could not be loaded:", countError); }
  }

  const library = error ? (
    <section className="storyFallback" aria-live="polite">
      <p className="eyebrow">A useful next step is still available</p><h2>{error}</h2>
      <p>This is a connection problem, not an instruction to submit a story. While the published library is unavailable, you can read a grounded guide, review safety information or understand the submission process without entering personal information.</p>
      <div className="buttonRow"><Link className="button primary" href="/resources">Read Educational Guides</Link><Link className="button secondary" href="/share">Review Story Privacy</Link><Link className="textLink" href="/safety">Open Safety Information</Link></div>
    </section>
  ) : stories.length > 0 ? (
    <StoryExplorer stories={stories} categories={storyCategories} />
  ) : (
    <section className="storyFallback" aria-live="polite">
      <p className="eyebrow">Publication status</p>
      <h2>{awaitingReview > 0 ? `${awaitingReview} ${awaitingReview === 1 ? "story is" : "stories are"} awaiting privacy review.` : "No survivor stories have been published yet."}</h2>
      <p>Submitted stories remain private until a moderator checks consent, accidental identification, safeguarding concerns and the author’s chosen privacy level.</p>
      <div className="buttonRow"><Link className="button primary" href="/share">Share Your Story</Link><Link className="button secondary" href="/manage">Check Your Submission</Link></div>
    </section>
  );

  return (
    <section className="storiesPage storiesPage--videoLibrary">
      <header className="storyLibraryHeader">
        <div><p className="eyebrow">Survivor stories</p><h1>Stories</h1><p className="lead">Browse survivor accounts by image and title, then choose what you want to open.</p></div>
        <Link className="button primary" href="/share">Share Your Story</Link>
      </header>
      {library}
    </section>
  );
}
