import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources } from "@/lib/content";

export const metadata: Metadata = { title: "Educational Resources" };

export default function ResourcesPage() {
  return (
    <>
      <section className="pageHero splitHero">
        <div>
          <p className="eyebrow">Educational resources</p>
          <h1>Read an overview. Stop there, or choose more detail.</h1>
          <p className="lead">
            These resources explain specific behaviours without requiring you to
            accept a label, leave a community, reject a faith or follow a recovery
            programme.
          </p>
        </div>
        <Image
          src="/images/woman-heart-sunset.jpg"
          alt="A person making a heart shape with their hands at sunset."
          width={750}
          height={460}
        />
      </section>

      <section className="resourceArchive editorialSection">
        {resources.map((resource, index) => (
          <article className="archiveRow" key={resource.slug}>
            <span className="archiveNumber">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="resourceMeta">
                {resource.category} · {resource.readingTime} min · {resource.intensity} intensity
              </p>
              <h2>{resource.title}</h2>
              <p>{resource.deck}</p>
            </div>
            <Link className="archiveLink" href={`/resources/${resource.slug}`}>
              Choose Detail
              <ArrowRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
