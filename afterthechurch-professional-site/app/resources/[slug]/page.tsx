import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContentNotice from "@/components/ContentNotice";
import ProgressiveResource from "@/components/ProgressiveResource";
import { getResource, resources } from "@/lib/content";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  return {
    title: resource?.title || "Resource",
    description: resource?.deck
  };
}

export default async function ResourcePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const isCrisisLetter =
    resource.slug === "a-letter-to-you-dealing-with-suicidal-thoughts";

  const content = (
    <>
     <section
  className={`articleHero articleHero--${resource.slug}`}
>
        <div>
          <p className="eyebrow">{resource.category}</p>
          <h1>{resource.title}</h1>
          <p className="lead">{resource.deck}</p>
          <div className="articleMeta">
            <span>{resource.readingTime} minute full read</span>
            <span>{resource.intensity} intensity</span>
          </div>
        </div>
        <Image
  src={resource.image}
  alt={resource.imageAlt}
  width={isCrisisLetter ? 941 : 940}
  height={isCrisisLetter ? 1672 : 704}
  className={`articleHeroImage articleHeroImage--${resource.slug}`}
  priority
/>
      </section>

      {isCrisisLetter && (
        <section className="crisisSupportNotice" aria-labelledby="crisis-support-heading">
          <div>
            <p className="eyebrow">If you may act on these thoughts now</p>
            <h2 id="crisis-support-heading">
              Get beside another person and call for urgent help.
            </h2>
            <p>
              Move away from anything you could use to hurt yourself. If you have
              already harmed yourself, have a plan or cannot stay safe, call your
              local emergency number now and do not remain alone.
            </p>
          </div>
          <div className="crisisSupportLinks" aria-label="Urgent crisis contacts">
            <a href="tel:113">
              <strong>Norway · 113</strong>
              <span>Acute suicide risk or immediate danger</span>
            </a>
            <a href="tel:116117">
              <strong>Norway · 116 117</strong>
              <span>Urgent out-of-hours medical help</span>
            </a>
            <a href="tel:988">
              <strong>US &amp; territories · 988</strong>
              <span>Call or text the Suicide &amp; Crisis Lifeline</span>
            </a>
            <a href="https://findahelpline.com/" target="_blank" rel="noreferrer">
              <strong>Other countries</strong>
              <span>Find a local crisis helpline</span>
            </a>
            <a href="/safety">
              <strong>AfterTheChurch safety page</strong>
              <span>More emergency and survivor-support contacts</span>
            </a>
          </div>
        </section>
      )}

      <section className="articleBody">
        <ProgressiveResource resource={resource} />
        <aside className="editorialNote">
          <strong>Editorial approach</strong>
          <p>
            This material offers options to consider. It is not a diagnosis,
            legal opinion, religious judgement or required recovery plan.
          </p>
        </aside>
      </section>
    </>
  );

  if (resource.warnings.length === 0) return content;

  return (
    <ContentNotice
      storageKey={`resource-${resource.slug}`}
      warnings={resource.warnings}
      summary={resource.overview}
      backHref="/resources"
      showCrisisHelp={isCrisisLetter}
    >
      {content}
    </ContentNotice>
  );
}
