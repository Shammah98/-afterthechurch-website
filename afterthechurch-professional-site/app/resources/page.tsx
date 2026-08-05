import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources, storyCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Educational Resources" };

const topicDescriptions: Record<(typeof storyCategories)[number], string> = {
  "Leaving a religious community":
    "Support for stepping away, whether the process is gradual, sudden or still uncertain.",
  "Spiritual coercion":
    "Recognise fear, pressure and control when they are presented as spiritual authority.",
  "Faith-healing experiences":
    "Explore the line between personal belief, healing claims and safe medical choice.",
  "Financial pressure":
    "Understand giving, unpaid labour and financial demands that no longer feel voluntary.",
  "Family relationships":
    "Navigate loyalty, conflict and connection when belief affects the people closest to you.",
  "Shunning and exclusion":
    "Make sense of silence, rejection and the loss of a community or social world.",
  "Campus or student ministries":
    "Consider high-pressure recruitment, leadership and belonging in student communities.",
  "Leadership abuse":
    "Identify harmful uses of status, secrecy, discipline and religious influence.",
  "Sexuality and identity":
    "Find stories about identity, autonomy and pressure to hide or change who you are.",
  "Rebuilding belief":
    "Hear from people reshaping faith after harm without being told where they must arrive.",
  "Life after belief":
    "Explore meaning, community and identity after leaving religious belief behind.",
  "Boundaries and recovery":
    "Find practical ways to rebuild choice, trust, safety and everyday independence."
};

export default function ResourcesPage() {
  return (
    <>
      <section className="pageHero splitHero resourcesHero">
        <div>
          <p className="eyebrow">Understanding and support</p>
          <h1>Find the subject that feels closest to what you need.</h1>
          <p className="lead">
            Browse by topic, read survivor experiences or open a research-informed
            guide. Nothing opens automatically, and you decide how much detail to read.
          </p>
        </div>

        <Image
          src="/images/reading.jpg"
          alt="A person reading quietly."
          width={750}
          height={460}
          priority
        />
      </section>

      <section className="topicDirectory editorialSection" aria-labelledby="topics-heading">
        <div className="topicDirectoryIntro">
          <div>
            <p className="eyebrow">Browse by topic</p>
            <h2 id="topics-heading">Begin with the words that fit your experience.</h2>
          </div>
          <p>
            These topics bring together the story subjects already used across the
            site. Choose one to open matching survivor stories, then adjust intensity,
            length, format or other filters when you are ready.
          </p>
        </div>

        <div className="topicDirectoryList">
          {storyCategories.map((topic, index) => (
            <Link
              className="topicDirectoryRow"
              href={`/stories?topic=${encodeURIComponent(topic)}`}
              key={topic}
            >
              <span className="topicDirectoryNumber">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="topicDirectoryCopy">
                <strong>{topic}</strong>
                <small>{topicDescriptions[topic]}</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="resourceArchive editorialSection" aria-labelledby="guides-heading">
        <div className="resourceArchiveIntro">
          <div>
            <p className="eyebrow">In-depth guides</p>
            <h2 id="guides-heading">Understand more, at your own pace.</h2>
          </div>
          <p>
            Each guide starts with a clear overview and labels sensitive material
            before it appears. Use the image or title to open the level of detail
            that feels right for you.
          </p>
        </div>

        <div className="resourceCardGrid">
          {resources.map((resource, index) => (
            <article className="resourceCard" key={resource.slug}>
              <Link
                className="resourceCardImageLink"
                href={`/resources/${resource.slug}`}
                aria-label={`Open ${resource.title}`}
              >
                <div className="resourceCardImage">
                  <Image
                    src={resource.image}
                    alt={resource.imageAlt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
              </Link>

              <div className="resourceCardBody">
                <div className="resourceCardTopline">
                  <span className="resourceCardNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    {resource.category} · {resource.readingTime} min · {resource.intensity} intensity
                  </span>
                </div>

                <h2>
                  <Link href={`/resources/${resource.slug}`}>
                    {resource.title}
                  </Link>
                </h2>

                <p>{resource.deck}</p>

                <Link className="resourceCardAction" href={`/resources/${resource.slug}`}>
                  Choose Detail
                  <ArrowRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
