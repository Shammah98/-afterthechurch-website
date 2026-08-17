import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { reviewedResources } from "@/lib/reviewed-resources";
import { getApprovedStories } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const dynamic = "force-dynamic";

const needs = [
  {
    title: "I am trying to understand what happened",
    text: "Learn how control, fear, bullying and spiritual pressure can slowly become normal to you.",
    includes: ["Coercive control", "Faith healing", "Financial pressure", "Research guides"],
    action: "Open the guides",
    href: "/resources"
  },
  {
    title: "I want to hear from people who understand",
    text: "Read survivor stories at your own pace, without being forced into the most difficult details.",
    includes: ["Topic filters", "Content warnings", "Short summaries", "Privacy choices"],
    action: "Browse survivor stories",
    href: "/stories"
  },
  {
    title: "I need to think about my safety",
    text: "Consider practical steps concerning records, healthcare, finances, housing and independent advice.",
    includes: ["Immediate risk", "Personal safety plan", "Digital privacy", "Independent support"],
    action: "Review safety steps",
    href: "/safety"
  },
  {
    title: "Someone I care about is still inside",
    text: "Explore ways to remain present without turning every conversation into an argument about leaving.",
    includes: ["Conversation scripts", "Safety planning", "Digital risk", "Academic research"],
    action: "Read the practical guide",
    href: "/resources/supporting-someone-still-inside"
  },
  {
    title: "I may want to tell my story",
    text: "Understand the privacy choices before deciding whether you want to share anything.",
    includes: ["Prepare privately", "Choose your identity", "Add optional media", "Withdraw or delete"],
    action: "Review the submission process",
    href: "/share"
  },
  {
    title: "I need to leave this page quickly",
    text: "Understand what Quick Exit can and cannot hide before relying on it.",
    includes: ["What opens", "History limits", "Safer devices", "Monitoring risks"],
    action: "Understand Quick Exit",
    href: "/safety#quick-exit"
  }
];

const stoicReflections = [
  {
    title: "The pace at which you heal is still in your hands",
    text: "You cannot control how other people explain the past. You can decide how close you stand to that past today."
  },
  {
    title: "Your judgement belongs to you",
    text: "A title, a pulpit or a congregation does not remove your right to observe what happened and name it honestly."
  },
  {
    title: "Begin with the next action",
    text: "Healing does not mean never feeling anger or fear. It can begin with refusing to let one passing emotion choose every action for you."
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
    alt="A group walking together along a quiet path."
    fill
    priority
    sizes="100vw"
    className="heroBackground"
  />

  <div className="heroShade" />

  <div className="homeHeroInner">
    <p className="eyebrow lightEyebrow">A quiet place to begin</p>

    <h1>
      You do not have to explain everything before you are allowed to heal.
    </h1>

    <p>
      Religious harm can leave you questioning your memory, your judgement and
      even your right to feel hurt. You have been probably told that you are not the first one to experience what you went through, 
      but that doesnt mean you should ignore it.
      You are not required to settle every question
      today. You do not have to forgive, reconcile, defend your beliefs or abandon
      them before you are ready. Begin with what you know: something affected you,
      and you deserve the space to understand it.
    </p>

    <div className="buttonRow">
      <Link className="button light" href="/resources">
        Begin with the Resources
      </Link>

      <Link className="button outlineLight" href="/stories">
        Read Survivor Stories
      </Link>
    </div>
  </div>
</section>

     <section className="groundingSection editorialSection">
  <div className="groundingImage">
    <Image
      src="/images/Traumatic-Brain-Injury-X-Ray.webp"
      alt="An illustration representing the brain and nervous system."
      fill
      sizes="(max-width: 900px) 100vw, 55vw"
      className="groundingImagePhoto"
    />

    <div className="groundingImageFade" />
  </div>

  <div className="groundingCopy">
    <p className="eyebrow">Understanding harmful control</p>

    <h2>
      What happened does not have to look dramatic to have changed you.
    </h2>

    <p className="largeCopy">
      Sometimes harm hides inside beautiful religious words: love, loyalty,
      honour, sacrifice, family, unity, submission or faith. The words may sound harmless or even good while
      the reality beneath them slowly takes away your ability to say no.
    </p>

    <p>
      You may have been expected to disclose private information, give money you
      could not afford, ignore your health, remain silent about misconduct or fear
      what would happen if you left. You do not have to solve every theological
      question before examining that behaviour. Begin with what you observed:
      what was demanded, how refusal was treated and whether your choices were
      truly allowed to remain your own.
    </p>

    <Link
      className="textLink"
      href="/resources/recognising-coercive-control"
    >
      Understand coercive control
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  </div>
</section>

      <section className="needsSection">
        <div className="sectionIntro">
  <p className="eyebrow">Choose what you need today</p>

  <h2>There is no correct order in which to recover.</h2>

  <p>
    Some days you may want answers. On another day, you may only want to know
    that somebody else understands. Open what helps, leave what does not and
    return when you have more space. Nothing here is a test of whether you are
    healing properly.
  </p>
</div>

        <div className="needList">
          {needs.map((item, index) => (
            <Link href={item.href} key={item.title} className="needRow">
              <span className="needNumber">{String(index + 1).padStart(2, "0")}</span>
              <div className="needContent">
                <strong>{item.title}</strong>
                <small>{item.text}</small>
                <ul className="needHighlights" aria-label="What you will find">
                  {item.includes.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <span className="needAction">{item.action}</span>
              </div>
              <ArrowRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="reflectionsSection resourcesPreview editorialSection">
  <div className="sectionIntro">
    <p className="eyebrow">Quiet thoughts for difficult days</p>

    <h2>Not everything is within your control, but that does not make you powerless.</h2>

    <p>
      It does not help to pretend that pain does not exist. It can be more
      useful to ask: now that this has happened, what still belongs to me?
      These reflections are invitations to consider, not rules you must accept.
    </p>
  </div>

  <div className="reviewSteps">
    {stoicReflections.map((reflection) => (
      <article key={reflection.title}>
        <strong>{reflection.title}</strong>
        <p>{reflection.text}</p>
      </article>
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
          {reviewedResources.slice(0, 3).map((resource, index) => (
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
              <p>Your text and media enter a private review area without requiring an account.</p>
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
                or permanently delete the submission and uploaded media from the
                same device.
              </p>
            </article>
          </div>

          <Link className="button primary" href="/share">
            Review Privacy Choices
          </Link>
        </div>

        <div className="submissionImage">
          <Image
            src="/images/submitt.jpg"
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
            AfterTheChurch was created for people who know how difficult it sis to survive in and question a 
            religious community. We are developing clear
            information about leadership, funding, safeguarding, editorial
            decisions and conflicts of interest.
          </p>
          <p>
            We do not claim independence, confidentiality or professional
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
