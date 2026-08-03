"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Mode = "notice" | "summary" | "full";

export default function ContentNotice({
  storageKey,
  warnings,
  summary,
  backHref,
  children
}: {
  storageKey: string;
  warnings: string[];
  summary: string;
  backHref: string;
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("notice");

  useEffect(() => {
    const saved = window.sessionStorage.getItem(`atc-content-${storageKey}`);
    if (saved === "full" || saved === "summary") setMode(saved);
  }, [storageKey]);

  function choose(next: Mode) {
    setMode(next);
    if (next !== "notice") {
      window.sessionStorage.setItem(`atc-content-${storageKey}`, next);
    }
  }

  if (mode === "full") return <>{children}</>;

  if (mode === "summary") {
    return (
      <section className="contentSummary" aria-live="polite">
        <p className="eyebrow">Short summary</p>
        <h1>Read only the overview</h1>
        <p className="lead">{summary}</p>
        <div className="buttonRow">
          <button className="button primary" type="button" onClick={() => choose("full")}>
            Continue to Full Content
          </button>
          <Link className="button secondary" href={backHref}>
            Go Back
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="contentGate" aria-labelledby="content-notice-title">
      <p className="eyebrow">Before you continue</p>
      <h1 id="content-notice-title">Choose how much detail feels manageable.</h1>
      <p>
        This content discusses {warnings.length ? warnings.join(", ").toLowerCase() : "potentially distressing experiences"}.
        You can open the full content, read a shorter summary, or return without continuing.
      </p>
      <div className="buttonRow">
        <button className="button primary" type="button" onClick={() => choose("full")}>
          Continue to Full Content
        </button>
        <button className="button secondary" type="button" onClick={() => choose("summary")}>
          Read a Short Summary
        </button>
        <Link className="button quiet" href={backHref}>
          Go Back
        </Link>
      </div>
      <p className="smallPrint">
        Your choice is remembered for this page during the current browser session.
      </p>
    </section>
  );
}
