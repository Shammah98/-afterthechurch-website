import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { reviewedResources } from "@/lib/reviewed-resources";
import { faithHealingResource } from "@/lib/faith-healing-resource";
import { reportingGraphicDataUri } from "@/lib/reporting-graphic";
import { lgbtqChurchResource } from "@/lib/lgbtq-church-resource";
import { gossipChurchResource } from "@/lib/gossip-church-resource-live";
import { sexEducationChurchResource } from "@/lib/sex-education-church-resource";

export const metadata: Metadata = { title: "Educational Resources" };

const reportingSlug = "preparing-to-report-harm-in-a-church-charity";
const supportGuideSlug = "supporting-someone-still-inside";
const gossipSlug = "gossip-in-church-leadership";
const faithHealingSlug = "faith-healing-and-medical-decisions";
const allResources = [
  sexEducationChurchResource,
  gossipChurchResource,
  lgbtqChurchResource,
  ...reviewedResources.map((resource) =>
    resource.slug === faithHealingSlug ? faithHealingResource : resource
  )
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pageHero splitHero">
        <div>
          <p className="eyebrow">Educational resources</p>

          <h1>Understand more, at your own pace.</h1>

          <p className="lead">
            Evidence-informed articles using peer-reviewed research, statistics and
            primary guidance. Start with a brief overview and continue into more detail
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
            const isGossipGuide = resource.slug === gossipSlug;
            const resourceHref =
              resource.slug === supportGuideSlug
                ? `/resources/${resource.slug}?guide=1`
                : `/resources/${resource.slug}`;

            return (
              <article className="resourceCard" key={resource.slug}>
                <Link
                  className="resourceCardImageLink"
                  href={resourceHref}
                  aria-label={`Open ${resource.title}`}
                >
                  <div className="resourceCardImage">
                    {isReportingGuide ? (
                      <img
                        src={reportingGraphicDataUri}
                        alt="Illustrated harm-reduction graphic about reporting, support, consequences and community safety."
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : isGossipGuide ? (
                      <img
                        src={resource.image}
                        alt={resource.imageAlt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "contrast(1.04) saturate(1.03)"
                        }}
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
                    <Link href={resourceHref}>
                      {resource.title}
                    </Link>
                  </h2>

                  <p>{resource.deck}</p>
                  <p className="resourceMeta">By Ian Shammah · Peer-reviewed evidence synthesis</p>

                  <Link className="resourceCardAction" href={resourceHref}>
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
