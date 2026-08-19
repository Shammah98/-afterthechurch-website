import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { reviewedResources } from "@/lib/reviewed-resources";
import { reportingGraphicDataUri } from "@/lib/reporting-graphic";
import { lgbtqChurchResource } from "@/lib/lgbtq-church-resource";
import { gossipChurchResource } from "@/lib/gossip-church-resource-live";
import { sexEducationChurchResource } from "@/lib/sex-education-church-resource";

export const metadata: Metadata = { title: "Educational Resources" };

const reportingSlug = "preparing-to-report-harm-in-a-church-charity";
const supportGuideSlug = "supporting-someone-still-inside";
const gossipSlug = "gossip-in-church-leadership";
const allResources = [sexEducationChurchResource, gossipChurchResource, lgbtqChurchResource, ...reviewedResources];

function replaceDashPunctuationWithEllipses<T>(value: T): T {
  return JSON.parse(JSON.stringify(value).replace(/[—–]/g, "…")) as T;
}

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
            const displayResource = isReportingGuide
              ? replaceDashPunctuationWithEllipses(resource)
              : resource;
            const resourceHref =
              displayResource.slug === supportGuideSlug
                ? `/resources/${displayResource.slug}?guide=1`
                : `/resources/${displayResource.slug}`;

            return (
              <article className="resourceCard" key={displayResource.slug}>
                <Link
                  className="resourceCardImageLink"
                  href={resourceHref}
                  aria-label={`Open ${displayResource.title}`}
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
                        src={displayResource.image}
                        alt={displayResource.imageAlt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: "contrast(1.04) saturate(1.03)"
                        }}
                      />
                    ) : (
                      <Image
                        src={displayResource.image}
                        alt={displayResource.imageAlt}
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
                      {displayResource.category} · {displayResource.readingTime} min · {displayResource.intensity} intensity
                    </span>
                  </div>

                  <h2>
                    <Link href={resourceHref}>
                      {displayResource.title}
                    </Link>
                  </h2>

                  <p>{displayResource.deck}</p>
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
