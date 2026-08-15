"use client";

import { useState } from "react";
import type { ResourceArticle } from "@/lib/types";

type Section = "overview" | "key" | "full" | "options" | "further";

const labels: { key: Section; label: string }[] = [
  { key: "overview", label: "Brief overview" },
  { key: "key", label: "Key points" },
  { key: "full", label: "Full article" },
  { key: "options", label: "Practical options" },
  { key: "further", label: "Further reading" }
];

export default function ProgressiveResource({
  resource
}: {
  resource: ResourceArticle;
}) {
  const [section, setSection] = useState<Section>("overview");

  return (
    <div className="progressiveResource">
      <div className="detailChooser" aria-label="Choose level of detail">
        {labels.map((item) => (
          <button
            type="button"
            key={item.key}
            className={section === item.key ? "active" : ""}
            aria-pressed={section === item.key}
            onClick={() => setSection(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="resourceReading" aria-live="polite">
        {section === "overview" && (
          <>
            <p className="eyebrow">Brief overview</p>
            <p className="resourceIntro">{resource.overview}</p>
          </>
        )}

        {section === "key" && (
          <>
            <p className="eyebrow">Key points</p>
            <ul className="plainList">
              {resource.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </>
        )}

        {section === "full" && (
          <>
            <p className="eyebrow">Full article</p>

            {resource.illustration && (
              <figure
                style={{
                  margin: "0 0 42px",
                  paddingBottom: "18px",
                  borderBottom: "1px solid var(--line)"
                }}
              >
                <img
                  src={resource.illustration.src}
                  alt={resource.illustration.alt}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px"
                  }}
                />
                <figcaption
                  style={{
                    marginTop: "14px",
                    color: "var(--muted)",
                    fontSize: ".9rem",
                    lineHeight: 1.55
                  }}
                >
                  {resource.illustration.caption}
                  {resource.illustration.credit && (
                    <small style={{ display: "block", marginTop: "8px" }}>
                      {resource.illustration.credit}
                    </small>
                  )}
                </figcaption>
              </figure>
            )}

            {resource.fullSections.map((item) => (
              <section key={item.heading} className="articleSection">
                <h2>{item.heading}</h2>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </>
        )}

        {section === "options" && (
          <>
            <p className="eyebrow">Options you can test or reject</p>
            <p>
              None of these are required steps. Keep what is useful and leave the rest.
            </p>
            <ul className="plainList">
              {resource.practicalOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </>
        )}

        {section === "further" && (
          <>
            <p className="eyebrow">Further reading</p>
            <div className="furtherList">
              {resource.furtherReading.map((item) => (
                <article key={item.label}>
                  <h2>{item.label}</h2>
                  <p>{item.note}</p>
                  {item.url ? (
                    <a
                      className="textLink"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open source
                    </a>
                  ) : (
                    <span>Reference listed for verification</span>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
