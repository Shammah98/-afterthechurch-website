import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContentNotice from "@/components/ContentNotice";
import ProgressiveResource from "@/components/ProgressiveResource";
import { reviewedResources } from "@/lib/reviewed-resources";
import { faithHealingResource } from "@/lib/faith-healing-resource";
import { coerciveControlResource } from "@/lib/coercive-control-resource";
import { reportingGraphicDataUri } from "@/lib/reporting-graphic";
import { lgbtqChurchResource } from "@/lib/lgbtq-church-resource";
import { gossipChurchResource } from "@/lib/gossip-church-resource-live";
import { sexEducationChurchResource } from "@/lib/sex-education-church-resource";

const reportingSlug = "preparing-to-report-harm-in-a-church-charity";
const gossipSlug = "gossip-in-church-leadership";
const faithHealingSlug = "faith-healing-and-medical-decisions";
const coerciveControlSlug = "recognising-coercive-control";
const allResources = [
  sexEducationChurchResource,
  gossipChurchResource,
  lgbtqChurchResource,
  ...reviewedResources.map((resource) => {
    if (resource.slug === faithHealingSlug) return faithHealingResource;
    if (resource.slug === coerciveControlSlug) return coerciveControlResource;
    return resource;
  })
];

function getAnyResource(slug: string) {
  return allResources.find((resource) => resource.slug === slug) || null;
}

export function generateStaticParams() {
  return allResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getAnyResource(slug);
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
  const resource = getAnyResource(slug);
  if (!resource) notFound();

  const isReportingGuide = resource.slug === reportingSlug;
  const isGossipGuide = resource.slug === gossipSlug;

  const content = (
    <>
      <section className={`articleHero articleHero--${resource.slug}`}>
        <div>
          <p className="eyebrow">{resource.category}</p>
          <h1>{resource.title}</h1>
          <p className="lead">{resource.deck}</p>
          <div className="articleMeta">
            <span>By Ian Shammah</span>
            <span>{resource.readingTime} minute full read</span>
            <span>{resource.intensity} intensity</span>
            <span>Peer-reviewed evidence synthesis · August 2026</span>
          </div>
        </div>

        {isReportingGuide ? (
          <img
            src={reportingGraphicDataUri}
            alt="Illustrated harm-reduction graphic about reporting, support, consequences and community safety."
            className={`articleHeroImage articleHeroImage--${resource.slug}`}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        ) : isGossipGuide ? (
          <img
            src={resource.image}
            alt={resource.imageAlt}
            className={`articleHeroImage articleHeroImage--${resource.slug}`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              filter: "contrast(1.04) saturate(1.03)"
            }}
          />
        ) : (
          <Image
            src={resource.image}
            alt={resource.imageAlt}
            width={940}
            height={704}
            className={`articleHeroImage articleHeroImage--${resource.slug}`}
            priority
          />
        )}
      </section>

      <section className="articleBody">
        <ProgressiveResource resource={resource} />
        <aside className="editorialNote">
          <strong>Peer-reviewed evidence synthesis</strong>
          <p>
            This article was written by Ian Shammah and synthesises findings from
            peer-reviewed research and, where relevant, primary regulatory or clinical
            guidance. The AfterTheChurch article itself has not undergone independent
            academic peer review.
          </p>
          <p>
            Statistics are presented with their study context and limitations. This
            material is educational. It is not legal, medical or clinical advice, a
            diagnosis, or a judgement about any particular religious organisation.
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
    >
      {content}
    </ContentNotice>
  );
}
