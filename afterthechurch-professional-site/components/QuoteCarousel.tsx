"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const quotes = [
  {
    text: "Not every part of healing needs to be understood immediately.",
    author: "AfterTheChurch reflection"
  },
  {
    text: "You are allowed to change your mind when something no longer feels safe.",
    author: "AfterTheChurch reflection"
  },
  {
    text:
      "Peace is not the same as silence. Sometimes peace begins when you finally name what happened.",
    author: "AfterTheChurch reflection"
  },
  {
    text: "You may keep what helped you and leave behind what caused harm.",
    author: "AfterTheChurch reflection"
  },
  {
    text: "Recovery does not require you to become the person you were before.",
    author: "AfterTheChurch reflection"
  }
];

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % quotes.length),
      8000
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  function move(direction: number) {
    setIndex((value) => (value + direction + quotes.length) % quotes.length);
  }

  return (
    <section
      className="quoteCarousel"
      aria-label="Reflections on healing and autonomy"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") move(-1);
        if (event.key === "ArrowRight") move(1);
      }}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const change = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(change) > 45) move(change > 0 ? -1 : 1);
        touchStart.current = null;
      }}
    >
      <p className="quoteLabel">A quiet thought while you are here</p>
      <blockquote aria-live="polite">
        “{quotes[index].text}”
        <cite>{quotes[index].author}</cite>
      </blockquote>

      <div className="carouselControls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous reflection">
          <ChevronLeft aria-hidden="true" />
        </button>
        <span aria-hidden="true">
          {index + 1} / {quotes.length}
        </span>
        <button type="button" onClick={() => move(1)} aria-label="Next reflection">
          <ChevronRight aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume automatic movement" : "Pause automatic movement"}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </div>
    </section>
  );
}
