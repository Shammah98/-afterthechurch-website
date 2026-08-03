import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentNotice from "@/components/ContentNotice";
import ViewTracker from "@/components/ViewTracker";
import { getApprovedStory } from "@/lib/stories";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const story = await getApprovedStory(id);
  return {
    title: story?.title || "Survivor Story",
    description: story?.shortSummary
  };
}

export default async function StoryPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const story = await getApprovedStory(id);
  if (!story) notFound();

  const storyContent = (
    <article className="storyDetail">
      <ViewTracker storyId={story.id} />
      <header>
        <div className="storyDetailMeta">
          <span className={`intensity ${story.contentIntensity}`}>
            {story.contentIntensity} intensity
          </span>
          <span>{story.readingMinutes} min</span>
          <span>{story.mediaType}</span>
        </div>
        <h1>{story.title}</h1>
        <p className="storyIdentity">
          {story.authorDisplay} · {story.churchDisplay}
        </p>
        <div className="tagList">
          {story.categories.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </header>

      {story.mediaType === "video" && story.mediaUrl && (
        <video controls preload="metadata" className="storyMedia">
          <source src={story.mediaUrl} />
          Your browser does not support video playback.
        </video>
      )}

      {story.mediaType === "audio" && story.mediaUrl && (
        <div className="audioStory">
          <p>Audio account</p>
          <audio controls preload="metadata">
            <source src={story.mediaUrl} />
            Your browser does not support audio playback.
          </audio>
        </div>
      )}

      <section className="storyLongText">
        <p className="eyebrow">
          {story.mediaType === "written" ? "Full story" : "Transcript or context"}
        </p>
        {story.storyText ? (
          story.storyText.split("\n").map((paragraph, index) =>
            paragraph.trim() ? <p key={index}>{paragraph}</p> : null
          )
        ) : (
          <p>No written transcript was provided.</p>
        )}
      </section>

      <footer className="storyDetailFooter">
        <p>
          Avoid contacting, identifying or investigating an author based on this
          account. Report an immediate safety or privacy concern to the site team.
        </p>
        <Link className="button secondary" href="/stories">Return to Story Filters</Link>
      </footer>
    </article>
  );

  return (
    <ContentNotice
      storageKey={`story-${story.id}`}
      warnings={story.contentWarnings}
      summary={story.shortSummary}
      backHref="/stories"
    >
      {storyContent}
    </ContentNotice>
  );
}
