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
  width={940}
  height={704}
  className={`articleHeroImage articleHeroImage--${resource.slug}`}
  priority
/>
      </section>

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
    >
      {content}
    </ContentNotice>
  );
}
