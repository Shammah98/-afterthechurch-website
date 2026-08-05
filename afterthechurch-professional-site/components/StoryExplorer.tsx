"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ContentIntensity, MediaType, PublicStory } from "@/lib/types";

type IdentityFilter = "all" | "anonymous" | "named";
type SortMode = "recent" | "most_read" | "shortest";

export default function StoryExplorer({
  stories,
  categories
}: {
  stories: PublicStory[];
  categories: readonly string[];
}) {
  const [category, setCategory] = useState("all");
  const [intensity, setIntensity] = useState<"all" | ContentIntensity>("all");
  const [mediaType, setMediaType] = useState<"all" | MediaType>("all");
  const [identity, setIdentity] = useState<IdentityFilter>("all");
  const [maxMinutes, setMaxMinutes] = useState("all");
  const [background, setBackground] = useState("all");
  const [region, setRegion] = useState("all");
  const [summaryOnly, setSummaryOnly] = useState(false);
  const [sort, setSort] = useState<SortMode>("recent");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);

  const backgrounds = useMemo(
    () =>
      [...new Set(stories.map((story) => story.religiousBackground).filter(Boolean))]
        .sort() as string[],
    [stories]
  );

  const regions = useMemo(
    () =>
      [...new Set(stories.map((story) => story.countryRegion).filter(Boolean))]
        .sort() as string[],
    [stories]
  );

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    const max = maxMinutes === "all" ? Infinity : Number(maxMinutes);

    return stories
      .filter((story) => {
        const identityMatches =
          identity === "all" ||
          (identity === "anonymous"
            ? story.privacyLevel === "fully_anonymous"
            : story.privacyLevel !== "fully_anonymous");

        const text = [
          story.title,
          story.shortSummary,
          story.authorDisplay,
          story.churchDisplay,
          story.categories.join(" ")
        ].join(" ").toLowerCase();

        return (
          (!term || text.includes(term)) &&
          (category === "all" || story.categories.includes(category)) &&
          (intensity === "all" || story.contentIntensity === intensity) &&
          (mediaType === "all" || story.mediaType === mediaType) &&
          identityMatches &&
          story.readingMinutes <= max &&
          (background === "all" || story.religiousBackground === background) &&
          (region === "all" || story.countryRegion === region) &&
          (!summaryOnly || story.hasShortSummary)
        );
      })
      .sort((a, b) => {
        if (sort === "most_read") return b.viewCount - a.viewCount;
        if (sort === "shortest") return a.readingMinutes - b.readingMinutes;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [
    stories,
    search,
    category,
    intensity,
    mediaType,
    identity,
    maxMinutes,
    background,
    region,
    summaryOnly,
    sort
  ]);

  function reset() {
    setCategory("all");
    setIntensity("all");
    setMediaType("all");
    setIdentity("all");
    setMaxMinutes("all");
    setBackground("all");
    setRegion("all");
    setSummaryOnly(false);
    setSort("recent");
    setSearch("");
    setVisible(6);
  }

  return (
    <div className="storyExplorer">
      <aside className="filterPanel" aria-label="Filter survivor stories">
        <div className="filterHeading">
          <h2>Choose what you are ready to read</h2>
          <button type="button" onClick={reset}>Clear filters</button>
        </div>

        <label>
          Search
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Title, topic, author or church"
          />
        </label>

        <label>
          Topic
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All topics</option>
            {categories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>

        <div className="filterColumns">
          <label>
            Content intensity
            <select
              value={intensity}
              onChange={(event) => setIntensity(event.target.value as "all" | ContentIntensity)}
            >
              <option value="all">Any intensity</option>
              <option value="gentle">Gentle</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </label>

          <label>
            Format
            <select
              value={mediaType}
              onChange={(event) => setMediaType(event.target.value as "all" | MediaType)}
            >
              <option value="all">All formats</option>
              <option value="written">Written</option>
              <option value="audio">Audio available</option>
              <option value="video">Video available</option>
            </select>
          </label>

          <label>
            Author display
            <select
              value={identity}
              onChange={(event) => setIdentity(event.target.value as IdentityFilter)}
            >
              <option value="all">Named or anonymous</option>
              <option value="anonymous">Anonymous only</option>
              <option value="named">Chosen name shown</option>
            </select>
          </label>

          <label>
            Reading time
            <select value={maxMinutes} onChange={(event) => setMaxMinutes(event.target.value)}>
              <option value="all">Any length</option>
              <option value="5">Up to 5 minutes</option>
              <option value="10">Up to 10 minutes</option>
              <option value="15">Up to 15 minutes</option>
            </select>
          </label>

          <label>
            Religious background
            <select value={background} onChange={(event) => setBackground(event.target.value)}>
              <option value="all">Any background</option>
              {backgrounds.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            Country or region
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              <option value="all">Any region</option>
              {regions.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <label className="checkboxRow">
          <input
            type="checkbox"
            checked={summaryOnly}
            onChange={(event) => setSummaryOnly(event.target.checked)}
          />
          Show stories with a short summary
        </label>

        <label>
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
            <option value="recent">Recently published</option>
            <option value="most_read">Most read</option>
            <option value="shortest">Shortest first</option>
          </select>
        </label>
      </aside>

      <div className="storyResults">
        <p className="resultsCount" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"} match your choices.
        </p>

        {filtered.length === 0 ? (
          <div className="emptyState">
            <h2>No stories match these filters.</h2>
            <p>You can clear the filters or return later as more stories are published.</p>
            <button className="button secondary" type="button" onClick={reset}>
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="storyList">
              {filtered.slice(0, visible).map((story) => (
                <article className="storyCard" key={story.id}>
                  {story.imageUrl && (
                    <img
                      className="storyCardImage"
                      src={story.imageUrl}
                      alt=""
                    />
                  )}
                  <div className="storyCardTopline">
                    <span className={`intensity ${story.contentIntensity}`}>
                      {story.contentIntensity} intensity
                    </span>
                    <span>{story.readingMinutes} min</span>
                    <span>{story.mediaType}</span>
                  </div>
                  <h2>{story.title}</h2>
                  <p className="storyIdentity">
                    {story.authorDisplay} · {story.churchDisplay}
                  </p>
                  <div className="tagList">
                    {story.categories.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <p>{story.shortSummary}</p>
                  <Link className="storyLink" href={`/stories/${story.id}`}>
                    Read Story
                  </Link>
                </article>
              ))}
            </div>

            {visible < filtered.length && (
              <button
                type="button"
                className="button secondary loadMore"
                onClick={() => setVisible((value) => value + 6)}
              >
                Show more stories
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
