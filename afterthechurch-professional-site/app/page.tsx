import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck } from "lucide-react";
import { getApprovedStories } from "@/lib/stories";
import type { PublicStory } from "@/lib/types";

export const dynamic = "force-dynamic";

const pathways = [
  {
    title: "Understand religious harm",
    description: "Clear guides to coercion, shunning, unhealthy leadership and rebuilding trust in yourself.",
    href: "/resources",
    action: "Explore the resources",
    icon: BookOpen
  },
  {
    title: "Find practical support",
    description: "Safety planning, independent help and steps you can take without having to explain everything.",
    href: "/safety",
    action: "See support options",
    icon: ShieldCheck
  },
  {
    title: "Share when you are ready",
    description: "Tell your story with privacy choices, review before publication and control over what remains online.",
    href: "/share",
    action: "Learn how sharing works",
    icon: HeartHandshake
  }
];

export default async function HomePage() {
  let stories: PublicStory[] = [];
  let storiesUnavailable = false;

  try {
    stories = await getApprovedStories(4);
  } catch (error) {
    console.error("Homepage stories could not be loaded:", error);
    storiesUnavailable = true;
  }

  const featured = stories[0];
  const additionalStories = stories.slice(1);

  return (
    <div className="freshHome">
      <section className="freshHero" aria-labelledby="home-title">
        <div className="freshHeroIntro">
          <p className="eyebrow">A space for people affected by religious harm</p>
          <h1 id="home-title">Your story matters. So does what comes next.</h1>
          <p className="freshHeroLead">
            Read people&apos;s experiences, recognise patterns of harm and find your own way forward.
            You do not have to have all the answers to begin.
          </p>
          <div className="freshHeroActions">
            <Link className="button primary" href="/stories">
              Read survivor stories <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="freshPlainLink" href="/recover">
              Explore RECOVER <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <p className="freshHeroNote">Read anonymously. No account needed to browse stories.</p>
        </div>

        <div className="freshHeroStory" aria-label="Latest survivor story">
          <div className="freshPanelHeader">
            <span className="freshPanelLabel">SURVIVOR STORIES</span>
            <Link href="/stories">View all <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>

          {featured ? (
            <Link className="freshFeaturedStory" href={"/stories/" + featured.id}>
              <div className="freshFeaturedImage">
                <img
                  src={featured.imageUrl || "/api/story-placeholder"}
                  alt={featured.imageUrl ? "Image selected for this survivor story" : "An empty church with natural light, used as a general illustration"}
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
              <img src="/api/story-placeholder" alt="An empty church illuminated by natural light" />
              <div>
                <h2>{storiesUnavailable ? "Stories are temporarily unavailable." : "A place for stories to be heard."}</h2>
                <p>{storiesUnavailable ? "You can still open the story library and try again." : "Published accounts will appear here after consent and privacy review."}</p>
                <Link href="/stories">Open the story library <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {additionalStories.length > 0 && (
        <section className="freshMoreStories" aria-labelledby="more-stories-title">
          <div className="freshSectionHeading">
            <div>
              <p className="eyebrow">More survivor voices</p>
              <h2 id="more-stories-title">Every experience deserves to be heard.</h2>
            </div>
            <Link className="freshPlainLink" href="/stories">Browse all stories <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="freshStoryGrid">
            {additionalStories.map((story) => (
              <Link className="freshStoryCard" href={"/stories/" + story.id} key={story.id}>
                <div className="freshStoryThumb">
                  <img src={story.imageUrl || "/api/story-placeholder"} alt="Image accompanying a survivor story" loading="lazy" />
                </div>
                <div>
                  <p className="freshStoryMeta">{story.categories[0] || "Lived experience"} · {story.readingMinutes} min</p>
                  <h3>{story.title}</h3>
                  <span>Read story <ArrowRight size={15} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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
            <p className="eyebrow">Find what helps</p>
            <h2 id="pathway-title">Three ways to move forward.</h2>
          </div>
          <p>There is no single right way to respond to a harmful religious experience.</p>
        </div>
        <div className="freshPathwayGrid">
          {pathways.map(({ title, description, href, action, icon: Icon }) => (
            <Link href={href} className="freshPathway" key={href}>
              <Icon aria-hidden="true" size={25} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{description}</p>
              <span>{action} <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
      <div className="freshSafetyLine">
        <p>AfterTheChurch offers educational information and survivor accounts, not emergency or clinical care.</p>
        <Link href="/safety">Safety information <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
