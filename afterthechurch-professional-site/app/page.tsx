import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "AfterTheChurch | Survivor Stories, Healing & Recovery" },
  description: "AfterTheChurch is a survivor-led space to read accounts of religious harm, learn about coercive control and faith-healing experiences, and find recovery resources.",
  alternates: { canonical: SITE_URL + "/" },
  openGraph: {
    title: "AfterTheChurch | Survivor Stories and Recovery",
    description: "Read survivor stories and find practical support after harmful church or religious experiences.",
    url: SITE_URL + "/",
    siteName: "AfterTheChurch",
    type: "website"
  }
};

import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";
import { getApprovedStories } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const dynamic = "force-dynamic";

const pathways = [
  {
    title: "Read survivor stories",
    description: "First-person accounts of control, shunning, harmful leadership, faith-healing experiences and rebuilding life afterwards.",
    href: "/stories",
    action: "Browse survivor stories",
    icon: HeartHandshake
  },
  {
    title: "Find support and safety",
    description: "Practical options for urgent concerns, privacy, safety planning and finding independent professional support.",
    href: "/safety",
    action: "See support options",
    icon: ShieldCheck
  },
  {
    title: "Understand religious harm",
    description: "Evidence-informed guides to coercive control, spiritual abuse, unhealthy leadership and recovery.",
    href: "/resources",
    action: "Explore the resources",
    icon: BookOpen
  },
  {
    title: "Offer support or guidance",
    description: "Health practitioners, pastors, faith leaders and community members can submit moderated resources or offers of support.",
    href: "/share",
    action: "Offer support",
    icon: HeartHandshake
  }
];

const principles = [
  {
    title: "Your story, your choice",
    text: "You decide what to share, how you are identified and what stays private."
  },
  {
    title: "Find support",
    text: "Access practical safety information, peer support and professional help."
  },
  {
    title: "Recognise harm",
    text: "Learn about coercion, shunning, abuse and exploitation so harmful patterns are easier to name."
  },
  {
    title: "Expect accountability",
    text: "No leader or church should be beyond safeguarding, scrutiny or independent oversight."
  }
];

export default async function HomePage() {
  let stories: PublicStory[] = [];
  let storiesUnavailable = false;

  try {
    stories = await getApprovedStories(7);
  } catch (error) {
    console.error("Homepage stories could not be loaded:", error);
    storiesUnavailable = true;
  }

  const featured = stories[0];
  const additionalStories = stories.slice(1, 7);

  return (
    <div className="freshHome">
      <section className="freshHero" aria-labelledby="home-title">
        <div className="freshHeroIntro">
          <p className="eyebrow">Survivor stories, support and recovery after religious harm</p>
          <h1 id="home-title">No one should have to navigate religious harm alone.</h1>
          <p className="freshHeroLead">
            Read lived experiences, recognise harmful patterns, find practical support and decide what
            moving forward looks like for you.
          </p>
          <div className="freshHeroActions">
            <Link className="button primary" href="/stories">
              Read survivor stories <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="freshPlainLink" href="/safety">
              Find support <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="freshHeroNote">Read anonymously. No account is needed to browse published stories.</p>
        </div>

        <div className="freshHeroStory" aria-label="Latest survivor story">
          <div className="freshPanelHeader">
            <span className="freshPanelLabel">LATEST SURVIVOR STORY</span>
            <Link href="/stories">View all <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>

          {featured ? (
            <Link className="freshFeaturedStory" href={"/stories/" + featured.id}>
              <div className="freshFeaturedImage">
                <img
                  src={featured.imageUrl || "/api/story-placeholder"}
                  alt={featured.imageUrl
                    ? "Image selected for this survivor story"
                    : "A person seated in a church pew, used as a general illustration rather than the author's personal photo"}
                />
                <span className="freshImageBadge">{featured.readingMinutes} min read</span>
              </div>
              <div className="freshFeaturedBody">
                <p className="freshStoryMeta">{featured.categories[0] || "Lived experience"} · {featured.contentIntensity} intensity</p>
                <h2>{featured.title}</h2>
                <p className="freshStorySummary">{featured.shortSummary}</p>
                <span className="freshReadLink">Read this story <ArrowRight size={17} aria-hidden="true" /></span>
              </div>
            </Link>
          ) : (
            <div className="freshStoryEmpty">
              <img src="/api/story-placeholder" alt="A person seated in a church pew, used as a general illustration" />
              <div>
                <h2>{storiesUnavailable ? "Stories are temporarily unavailable." : "A place for stories to be heard."}</h2>
                <p>{storiesUnavailable ? "You can still open the story library and try again." : "Published accounts will appear here after consent and privacy review."}</p>
                <Link href="/stories">Open the story library <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="freshMoreStories" aria-labelledby="more-stories-title">
        <div className="freshSectionHeading">
          <div>
            <p className="eyebrow">Stories from the community</p>
            <h2 id="more-stories-title">Real experiences should be easy to find.</h2>
          </div>
          <Link className="freshPlainLink" href="/stories">Browse all stories <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>

        {additionalStories.length > 0 ? (
          <div className="freshStoryGrid">
            {additionalStories.map((story) => (
              <Link className="freshStoryCard" href={"/stories/" + story.id} key={story.id}>
                <div className="freshStoryThumb">
                  <img
                    src={story.imageUrl || "/api/story-placeholder"}
                    alt={story.imageUrl
                      ? "Image accompanying a survivor story"
                      : "A person seated in a church pew, used as a general illustration"}
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="freshStoryMeta">{story.categories[0] || "Lived experience"} · {story.readingMinutes} min</p>
                  <h3>{story.title}</h3>
                  <span>Read story <ArrowRight size={15} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="freshStoryLibraryPrompt">
            <p>{featured ? "More published stories will appear here as they are approved." : "Published stories will appear here after moderation and privacy review."}</p>
            <Link className="button secondary" href="/share">Share your story</Link>
          </div>
        )}
      </section>

      <section className="freshMission" aria-labelledby="mission-title">
        <div className="freshMissionIntro">
          <p className="eyebrow">What we do</p>
          <h2 id="mission-title">Stories, support and practical information after church harm.</h2>
          <p>
            Share experiences, recognise harmful patterns and find support. You choose what to read,
            what to share and whether to stay anonymous.
          </p>
        </div>
        <div className="freshPrincipleGrid">
          {principles.map((principle, index) => (
            <article className="freshPrinciple" key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="freshSupportBand" aria-labelledby="support-band-title">
        <div>
          <p className="eyebrow">Support should be easier to reach</p>
          <h2 id="support-band-title">You can seek help without having to tell your whole story first.</h2>
          <p>
            Start with safety information, contact the site privately, or review how anonymous story
            sharing works before deciding whether you want to submit anything.
          </p>
        </div>
        <div className="freshSupportActions">
          <Link className="button primary" href="/safety">Find support</Link>
          <Link className="button secondary" href="/contact">Contact us privately</Link>
          <Link className="freshPlainLink" href="/share">Share or offer support <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="freshRecover" aria-labelledby="recover-home-title">
        <div className="freshRecoverMark" aria-hidden="true">R<span>.</span></div>
        <div className="freshRecoverCopy">
          <p className="eyebrow">Introducing RECOVER</p>
          <h2 id="recover-home-title">Make sense of what happened. At your own pace.</h2>
          <p>
            RECOVER is a private, optional reflection tool. Notice patterns that may have affected
            your safety, trust and wellbeing, then explore practical next steps tailored to your answers.
          </p>
          <p className="freshRecoverPrivacy">Your answers stay in this browser session. No account, no submission and no diagnosis.</p>
          <Link className="button primary" href="/recover">
            Start RECOVER <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="freshPathways" aria-labelledby="pathway-title">
        <div className="freshSectionHeading">
          <div>
            <p className="eyebrow">Choose what you need</p>
            <h2 id="pathway-title">Stories, support, information and ways to help.</h2>
          </div>
          <p>There is no single right way to respond to a harmful religious experience.</p>
        </div>
        <div className="freshPathwayGrid">
          {pathways.map(({ title, description, href, action, icon: Icon }) => (
            <Link href={href} className="freshPathway" key={title}>
              <Icon aria-hidden="true" size={25} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{description}</p>
              <span>{action} <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <div className="freshSafetyLine">
        <p>AfterTheChurch offers educational information and survivor accounts, not emergency, legal or clinical care.</p>
        <div className="freshHomeContactLinks">
          <Link href="/contact">Contact us privately <ArrowRight size={15} aria-hidden="true" /></Link>
          <Link href="/safety">Safety information <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
    </div>
  );
}
