import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { resources } from "@/lib/content";
import { reportingGraphicDataUri } from "@/lib/reporting-graphic";
import { lgbtqChurchResource } from "@/lib/lgbtq-church-resource";

export const metadata: Metadata = { title: "Educational Resources" };

const reportingSlug = "preparing-to-report-harm-in-a-church-charity";
const reportingTitle = "How to prepare to report harm in a church in the UK";
const allResources = [lgbtqChurchResource, ...resources];

export default function ResourcesPage() {
  return (
    <>
      <section className="pageHero splitHero">
        <div>
          <p className="eyebrow">Educational resources</p>

          <h1>Understand more, at your own pace.</h1>

          <p className="lead">
            These resources explain harmful religious behaviours in a clear and
            grounded way. Start with a brief overview, and continue into more detail
            when you feel ready.
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

      <section className="resourceArchive editorialSection">
        <div className="resourceCardGrid">
          {allResources.map((resource, index) => {
            const isReportingGuide = resource.slug === reportingSlug;
            const displayTitle = isReportingGuide ? reportingTitle : resource.title;

            return (
              <article className="resourceCard" key={resource.slug}>
                <Link
                  className="resourceCardImageLink"
                  href={`/resources/${resource.slug}`}
                  aria-label={`Open ${displayTitle}`}
                >
                  <div className="resourceCardImage">
                    {isReportingGuide ? (
                      <img
                        src={reportingGraphicDataUri}
                        alt="Illustrated harm-reduction graphic about reporting, support, consequences and community safety."
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <Image
                        src={resource.image}
                        alt={resource.imageAlt}
                        fill
                        sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      />
                    )}
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
                      {displayTitle}
                    </Link>
                  </h2>

                  <p>{resource.deck}</p>

                  <Link className="resourceCardAction" href={`/resources/${resource.slug}`}>
                    Choose Detail
                    <ArrowRight size={19} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
