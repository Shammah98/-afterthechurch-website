import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import ContentNotice from "@/components/ContentNotice";
import ProgressiveResource from "@/components/ProgressiveResource";
import { reviewedResources } from "@/lib/reviewed-resources";

const resource = reviewedResources.find(
  (item) => item.slug === "supporting-someone-still-inside"
)!;

export const metadata: Metadata = {
  title: "Supporting someone who is still involved",
  description: resource.deck
};

export default async function SupportingSomeoneRoute({
  searchParams
}: {
  searchParams: Promise<{ guide?: string }>;
}) {
  const query = await searchParams;

  // The Safety page already links to this historical URL. Keep that link
  // working while changing its purpose to the private support-request form.
  if (query.guide !== "1") {
    redirect("/help-someone");
  }

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
        <Image
          src={resource.image}
          alt={resource.imageAlt}
          width={940}
          height={704}
          className={`articleHeroImage articleHeroImage--${resource.slug}`}
          priority
        />
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
