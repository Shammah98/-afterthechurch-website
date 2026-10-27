import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StoryComments from "@/components/StoryComments";
import ViewTracker from "@/components/ViewTracker";
import { getApprovedStory } from "@/lib/stories";
import { SITE_URL, safeJsonLd, seoDescription } from "@/lib/seo";
import type { PublicStory } from "@/lib/types";

export const dynamic = "force-dynamic";

function storyDescription(story: PublicStory) {
  const publishedOrganisation =
    story.churchDisplay === "Church Name Withheld" ? "" : " " + story.churchDisplay + ".";
  return seoDescription(story.shortSummary + publishedOrganisation);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const story = await getApprovedStory(id);

  if (!story) {
    return {
      title: "Story unavailable",
      robots: { index: false, follow: false }
    };
  }

  const description = storyDescription(story);
  const canonical = SITE_URL + "/stories/" + story.id;

  return {
    title: story.title,
    description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "AfterTheChurch",
      title: story.title,
      description,
      publishedTime: story.createdAt,
      // Use a stable, public illustration instead of expiring private media URLs.
      images: [
        { url: SITE_URL + "/api/story-placeholder", alt: "Illustrative photograph for a survivor story on AfterTheChurch" }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description,
      images: [SITE_URL + "/api/story-placeholder"]
    }
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

  const canonical = SITE_URL + "/stories/" + story.id;
  const description = storyDescription(story);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": canonical + "#article",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    headline: story.title,
    description,
    datePublished: story.createdAt,
    inLanguage: "en",
    isAccessibleForFree: true,
    genre: "Personal account",
    articleSection: story.categories[0] || "Survivor experiences",
    publisher: {
      "@type": "Organization",
      name: "AfterTheChurch",
      url: SITE_URL
    },
    url: canonical
  };

  if (story.categories.length) articleSchema.keywords = story.categories.join(", ");
  // Only include identities the storyteller chose to make public.
  if (
    (story.privacyLevel === "public" || story.privacyLevel === "anonymous_church") &&
    story.authorDisplay !== "Anonymous Author"
  ) {
    articleSchema.author = { "@type": "Person", name: story.authorDisplay };
  }

  const readingDisclosures = story.contentWarnings.length
    ? story.contentWarnings.join(", ").toLowerCase()
    : "potentially distressing religious experiences";

  return (
    <article className="storyDetail storyDetail--searchable">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <header>
        <p className="eyebrow">Published survivor account</p>
        <div className="storyDetailMeta">
          <span className={"intensity " + story.contentIntensity}>
            {story.contentIntensity} intensity
          </span>
          <span>{story.readingMinutes} min read</span>
          <span>{story.mediaType}</span>
        </div>
        <h1>{story.title}</h1>
        <p className="storyIdentity">{story.authorDisplay} · {story.churchDisplay}</p>
        {story.categories.length > 0 && (
          <div className="tagList">
            {story.categories.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
        <p className="storySearchSummary">{story.shortSummary}</p>
      </header>

      <section className="storyReadingNotice" aria-label="Before reading the full story">
        <h2>Before you continue</h2>
        <p>This account discusses {readingDisclosures}. You can read the overview above, or choose to open the full account when you feel ready.</p>
        <p>Personal accounts reflect the author's experience. AfterTheChurch reviews stories for privacy and safety; publication does not mean every allegation has been independently established.</p>
      </section>

      <details id={"story-full-" + story.id} className="storyFullDisclosure">
        <summary>Read the full story <span>Open when you are ready</span></summary>
        <div className="storyFullDisclosureBody">
          <ViewTracker storyId={story.id} disclosureId={"story-full-" + story.id} />

          <img
            className="storyImage"
            src={story.imageUrl || "/api/story-placeholder"}
            alt={story.imageUrl
              ? "Image supplied to accompany this survivor story"
              : "An illustrative photograph of a person seated in a church pew"}
          />

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
              </audio>
            </div>
          )}

          <section className="storyLongText" aria-label="Full survivor account">
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

          <StoryComments storyId={story.id} />
        </div>
      </details>

      <footer className="storyDetailFooter">
        <p>Avoid contacting, identifying or investigating an author based on this account. Report an immediate safety or privacy concern to the site team.</p>
        <Link className="button secondary" href="/stories">Read more survivor stories</Link>
      </footer>
    </article>
  );
}
