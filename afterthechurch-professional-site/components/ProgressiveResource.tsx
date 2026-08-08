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
                  {item.href ? (
                    <a
                      className="sourceLink"
                      href={item.href}
                      target={item.href.startsWith("/") ? undefined : "_blank"}
                      rel={item.href.startsWith("/") ? undefined : "noreferrer"}
                    >
                      Open source
                    </a>
                  ) : (
                    <span>Source details listed above</span>
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
