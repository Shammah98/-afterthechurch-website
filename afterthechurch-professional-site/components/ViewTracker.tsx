"use client";

import { useEffect } from "react";

export default function ViewTracker({ storyId }: { storyId: string }) {
  useEffect(() => {
    const key = `atc-viewed-${storyId}`;
    if (window.sessionStorage.getItem(key)) return;

    window.sessionStorage.setItem(key, "true");
    fetch(`/api/stories/${storyId}/view`, { method: "POST" }).catch(() => {
      window.sessionStorage.removeItem(key);
    });
  }, [storyId]);

  return null;
}
