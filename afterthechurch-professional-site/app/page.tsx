import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources } from "@/lib/content";
import { getApprovedStories } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const dynamic = "force-dynamic";

const needs = [
  {
    title: "I want to understand what happened",
    text: "Read clear explanations of coercion, shunning, financial pressure and unsafe leadership.",
    href: "/resources"
  },
  {
    title: "I want to read carefully selected stories",
    text: "Choose topics, intensity, reading time and whether the author is anonymous.",
    href: "/stories"
  },
  {
    title: "I need practical support",
    text: "Review options for safety, records, healthcare, legal advice and independent support.",
    href: "/safety"
  },
  {
    title: "I am worried about someone else",
    text: "Consider ways to stay connected without demanding an immediate exit or argument.",
    href: "/resources/supporting-someone-still-inside"
  },
  {
    title: "I am considering sharing my experience",
    text: "See the privacy choices and review process before any information is requested.",
    href: "/share"
  },
  {
    title: "I need to leave this page quickly",
    text: "Use the Quick Exit button. It opens a neutral website but does not erase browser history.",
    href: "/safety#quick-exit"
  }
];

export default async function HomePage() {
  let stories: PublicStory[] = [];
  try {
    stories = await getApprovedStories(3);
  } catch {
    stories = [];
  }

  return (
    <>
      <section className="homeHero">
        <Image
          src="/images/group-field.jpg"
          alt="A diverse group walking together along a path through a field."
          fill
          priority
          sizes="100vw"
          className="heroBackground"
        />
        <div className="heroShade" />
        <div className="homeHeroInner">
          <p className="eyebrow lightEyebrow">You are most welcome</p>
          <h1>You do not have to share unless you are ready to...</h1>
          <p>
            If you have been hurt by a religious community, your pacing is
            entirely up to you. This is a quiet, religiously neutral space where
            you can understand what happened without being pressured to believe,
            disbelieve, forgive, reconcile, or prove your experience to anyone.
          </p>
          <div className="buttonRow">
            <Link className="button light" href="/resources">
              Explore Gentle Resources
            </Link>
            <Link className="button outlineLight" href="/stories">
              Read Anonymous Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="groundingSection editorialSection">
        <div className="groundingImage">
          <Image
            src="/images/woman-heart-sunset.jpg"
            alt="A person making a heart shape with their hands in warm evening light."
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
    className="groundingImagePhoto"
  />

  <div className="groundingImageFade" />
</div>
       
        <div className="groundingCopy">
          <p className="eyebrow">Understanding everyday control</p>
          <h2>Harm does not always arrive looking dramatic.</h2>
          <p className="largeCopy">
            It may look like being required to disclose private thoughts,
            receiving repeated warnings about what will happen if you leave,
            losing friendships after asking a question, or being pressured to
            give money you cannot afford.
          </p>
          <p>
            You do not have to decide whether every belief was true or false
            before examining how people treated you. One option is to begin with
            observable behaviour: what was demanded, How did it make you feel, what happened when you
            hesitated, and whether saying no remained possible.
          </p>
          <Link className="textLink" href="/resources/recognising-coercive-control">
            Read a brief explanation <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="needsSection">
        <div className="sectionIntro">
          <p className="eyebrow">Choose what you need today</p>
          <h2>No fixed programme. No required order.</h2>
          <p>
            Open one section, save it for later, or leave. Each route is an
            option rather than a stage you must complete.
          </p>
        </div>

        <div className="needList">
          {needs.map((item, index) => (
            <Link href={item.href} key={item.title} className="needRow">
              <span className="needNumber">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="resourcesPreview editorialSection">
        <div className="sectionIntro">
          <p className="eyebrow">Educational resources</p>
          <h2>Decide how much detail to open.</h2>
          <p>
            Each article offers a brief overview, key points, a full explanation,
            practical options and further reading. Sensitive material is labelled
            before it appears.
          </p>
        </div>

        <div className="resourceEditorialGrid">
          {resources.slice(0, 3).map((resource, index) => (
            <article className={index === 0 ? "resourceFeature" : "resourceSmall"} key={resource.slug}>
              <Image
                src={resource.image}
                alt={resource.imageAlt}
                width={index === 0 ? 960 : 540}
                height={index === 0 ? 640 : 360}
              />
              <div>
                <p className="resourceMeta">
                  {resource.readingTime} min · {resource.intensity} intensity
                </p>
                <h3>{resource.title}</h3>
                <p>{resource.deck}</p>
                <Link className="textLink" href={`/resources/${resource.slug}`}>
                  Choose level of detail <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="storiesHome">
        <div className="storiesHomeImage">
          <Image
            src="/images/friends-sunset.jpg"
            alt="Friends standing with their arms around one another in warm sunset light."
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        <div className="storiesHomeContent">
          <p className="eyebrow">Survivor stories</p>
          <h2>Read without being pushed into the most difficult detail.</h2>
          <p>
            Filter by topic, intensity, reading time, identity display, background
            and media format. Every story opens with a notice and a short-summary
            option.
          </p>

          {stories.length > 0 ? (
            <div className="homeStoryList">
              {stories.map((story) => (
                <Link href={`/stories/${story.id}`} key={story.id}>
                  <span>{story.readingMinutes} min · {story.contentIntensity}</span>
                  <strong>{story.title}</strong>
                  <small>{story.authorDisplay} · {story.churchDisplay}</small>
                </Link>
              ))}
            </div>
          ) : (
            <p className="quietMessage">
              Approved stories will appear here after the moderation process is active.
            </p>
          )}

          <Link className="button secondary" href="/stories">
            Open Story Filters
          </Link>
        </div>
      </section>

      <section className="submissionExplanation editorialSection">
        <div>
          <p className="eyebrow">How story submission works</p>
          <h2>You see the privacy consequences before you submit.</h2>
          <p>
            Choose whether your name, the church name, both, or neither should
            appear. Preview the public identity before uploading anything. Nothing
            is published automatically.
          </p>

          <div className="reviewSteps">
            <article>
              <strong>Private submission</strong>
              <p>Your text and media enter a private review area linked to your account.</p>
            </article>
            <article>
              <strong>Identity and safety check</strong>
              <p>
                A reviewer checks for addresses, contact details,  names,
                medical records and information that could expose another survivor.
              </p>
            </article>
            <article>
              <strong>Your meaning remains yours</strong>
              <p>
                When a proposed change affects meaning, the reviewer records it for
                your approval instead of silently rewriting the story.
              </p>
            </article>
            <article>
              <strong>Manage it later</strong>
              <p>
                Request correction, change the privacy level, unpublish temporarily
                or permanently delete the submission and uploaded media.
              </p>
            </article>
          </div>

          <Link className="button primary" href="/share">
            Review Privacy Choices
          </Link>
        </div>

        <div className="submissionImage">
          <Image
            src="/images/swing-sunset.jpg"
            alt="A person sitting beside an empty swing at sunset."
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className="aboutHome">
        <div>
          <p className="eyebrow">Who is behind AfterTheChurch</p>
          <h2>Built by survivors and advocates, not controlled by a religious ministry.</h2>
        </div>
        <div>
          <p>
            AfterTheChurch was created for people who know how difficult it can
            be to question a trusted religious community. We are developing clear
            information about leadership, funding, safeguarding, editorial
            decisions and conflicts of interest.
          </p>
          <p>
            We will not claim independence, confidentiality or professional
            expertise beyond what can be documented. Where a team member uses a
            pseudonym for safety, their role can be explained without exposing
            private information.
          </p>
          <Link className="textLink" href="/about">
            About the project <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="urgentHome">
        <div>
          <p className="eyebrow lightEyebrow">Support and urgent help</p>
          <h2>This website is not an emergency or clinical service.</h2>
        </div>
        <div>
          <p>
            When there is immediate danger, severe medical risk, violence,
            stalking, abuse of a child, or risk of suicide or self-harm, contact
            appropriate emergency or specialist services in your location.
          </p>
          <Link className="button light" href="/safety">
            Review Safety Information
          </Link>
        </div>
      </section>
    </>
  );
}
