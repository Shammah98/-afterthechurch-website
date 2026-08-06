import type { Metadata } from "next";
import Link from "next/link";
import StoryExplorer from "@/components/StoryExplorer";
import { storyCategories } from "@/lib/content";
import { getApprovedStories, getStoryLibraryCounts } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const metadata: Metadata = { title: "Survivor Stories" };
export const dynamic = "force-dynamic";

const storyGuide = [
  {
    title: "You control the level of detail",
    text: "Story cards show a summary, reading time, format and intensity before the full account opens."
  },
  {
    title: "Identity is chosen by the author",
    text: "A story may show a chosen name, withhold the organisation, or remain fully anonymous."
  },
  {
    title: "No single story is a template",
    text: "Experiences differ. A published account can offer recognition without deciding what your experience means."
  },
  {
    title: "You can leave at any point",
    text: "Nothing plays automatically. Use the filters, read only a summary, or return to a different part of the site."
  }
];

export default async function StoriesPage() {
  let stories: PublicStory[] = [];
  let awaitingReview = 0;
  let error = "";

  try {
    stories = await getApprovedStories();
  } catch (storyError) {
    console.error("Approved stories could not be loaded:", storyError);
    error = "We could not load the published stories just now.";
  }

  if (!error) {
    try {
      const counts = await getStoryLibraryCounts();
      awaitingReview = counts.awaitingReview;
    } catch (countError) {
      console.error("Story review count could not be loaded:", countError);
    }
  }

  const library = error ? (
    <section className="storyFallback" aria-live="polite">
      <p className="eyebrow">A useful next step is still available</p>
      <h2>{error}</h2>
      <p>
        This is a connection problem, not an instruction to submit a story.
        While the published library is unavailable, you can read a grounded
        guide, review safety information or understand the submission process
        without entering personal information.
      </p>
      <div className="buttonRow">
        <Link className="button primary" href="/resources">
          Read Educational Guides
        </Link>
        <Link className="button secondary" href="/share">
          Review Story Privacy
        </Link>
        <Link className="textLink" href="/safety">
          Open Safety Information
        </Link>
      </div>
    </section>
  ) : stories.length > 0 ? (
    <StoryExplorer stories={stories} categories={storyCategories} />
  ) : (
    <section className="storyFallback" aria-live="polite">
      <p className="eyebrow">Publication status</p>
      <h2>
        {awaitingReview > 0
          ? `${awaitingReview} ${awaitingReview === 1 ? "story is" : "stories are"} awaiting privacy review.`
          : "No survivor stories have been published yet."}
      </h2>
      <p>
        Submitted stories remain private until a moderator checks consent,
        accidental identification, safeguarding concerns and the author’s
        chosen privacy level. A submission is not lost simply because it is
        not yet visible here.
      </p>
      <div className="buttonRow">
        <Link className="button primary" href="/share">
          Share Your Story
        </Link>
        <Link className="button secondary" href="/manage">
          Check Your Submission
        </Link>
        <Link className="textLink" href="/resources">
          Read Educational Guides
        </Link>
      </div>
    </section>
  );

  return (
    <section className="storiesPage">
      <div className="pageIntro narrowIntro">
        <p className="eyebrow">Survivor stories</p>
        <h1>Stories from people who have experienced religious harm.</h1>
        <p className="lead">
          Browse the published accounts first. Use the filters to choose a topic,
          intensity, format or reading length before opening a full story.
        </p>
      </div>

      {library}

      <section className="storyOrientation" aria-labelledby="story-guide-heading">
        <div className="sectionIntro">
          <p className="eyebrow">Read at your own pace</p>
          <h2 id="story-guide-heading">The library is designed around consent, not curiosity.</h2>
          <p>
            Each story remains in the foreground while privacy guidance stays
            available below it. You do not need to compare your experience with
            anyone else or read material that feels too close today.
          </p>
        </div>

        <div className="reviewDetailGrid">
          {storyGuide.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="buttonRow">
          <Link className="button primary" href="/share">
            Share Your Story
          </Link>
          <Link className="button secondary" href="/manage">
            Manage Your Submission
          </Link>
        </div>
      </section>
    </section>
  );
}
