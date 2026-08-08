"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Mode = "notice" | "summary" | "full";

function ImmediateCrisisHelp() {
  return (
    <aside className="immediateCrisisHelp" aria-labelledby="immediate-crisis-help">
      <p className="eyebrow">Need help right now?</p>
      <h2 id="immediate-crisis-help">Move towards another person and call.</h2>
      <p>
        If you may act on suicidal thoughts, have a plan or cannot stay safe,
        call emergency services now and do not remain alone.
      </p>
      <div className="immediateCrisisLinks">
        <a href="tel:113">Norway emergency: 113</a>
        <a href="tel:116117">Norway urgent medical help: 116 117</a>
        <a href="tel:988">US &amp; territories: call or text 988</a>
        <a href="https://findahelpline.com/" target="_blank" rel="noreferrer">
          Other countries: find a helpline
        </a>
      </div>
    </aside>
  );
}

export default function ContentNotice({
  storageKey,
  warnings,
  summary,
  backHref,
  showCrisisHelp = false,
  children
}: {
  storageKey: string;
  warnings: string[];
  summary: string;
  backHref: string;
  showCrisisHelp?: boolean;
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
        {showCrisisHelp && <ImmediateCrisisHelp />}
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
      <h1 id="content-notice-title">Choose what feels manageable.</h1>
      <p>
        This content discusses {warnings.length ? warnings.join(", ").toLowerCase() : "potentially distressing experiences"}.
        You can open the full content, read a shorter summary, or return without continuing.
      </p>
      {showCrisisHelp && <ImmediateCrisisHelp />}
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
