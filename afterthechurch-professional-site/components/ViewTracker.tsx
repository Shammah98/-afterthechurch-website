"use client";

import { useEffect } from "react";

export default function ViewTracker({
  storyId,
  disclosureId
}: {
  storyId: string;
  disclosureId?: string;
}) {
  useEffect(() => {
    const key = "atc-viewed-" + storyId;
    function trackRead() {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "true");
      fetch("/api/stories/" + storyId + "/view", { method: "POST" }).catch(() => {
        window.sessionStorage.removeItem(key);
      });
    }

    if (!disclosureId) {
      trackRead();
      return;
    }

    const disclosure = document.getElementById(disclosureId) as HTMLDetailsElement | null;
    if (!disclosure) return;

    const onToggle = () => {
      if (disclosure.open) trackRead();
    };

    disclosure.addEventListener("toggle", onToggle);
    if (disclosure.open) trackRead();
    return () => disclosure.removeEventListener("toggle", onToggle);
  }, [storyId, disclosureId]);

  return null;
}
