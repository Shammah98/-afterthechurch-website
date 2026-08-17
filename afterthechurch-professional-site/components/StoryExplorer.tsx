"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ContentIntensity, MediaType, PublicStory } from "@/lib/types";

type IdentityFilter = "all" | "anonymous" | "named";
type SortMode = "recent" | "most_read" | "shortest";
const fallbackImage = "/images/story-placeholder-church.webp";

export default function StoryExplorer({ stories, categories }: { stories: PublicStory[]; categories: readonly string[] }) {
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
  const [visible, setVisible] = useState(12);
  const backgrounds = useMemo(() => [...new Set(stories.map((story) => story.religiousBackground).filter(Boolean))].sort() as string[], [stories]);
  const regions = useMemo(() => [...new Set(stories.map((story) => story.countryRegion).filter(Boolean))].sort() as string[], [stories]);
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase(); const max = maxMinutes === "all" ? Infinity : Number(maxMinutes);
    return stories.filter((story) => {
      const identityMatches = identity === "all" || (identity === "anonymous" ? story.privacyLevel === "fully_anonymous" : story.privacyLevel !== "fully_anonymous");
      const text = [story.title, story.shortSummary, story.authorDisplay, story.churchDisplay, story.categories.join(" ")].join(" ").toLowerCase();
      return (!term || text.includes(term)) && (category === "all" || story.categories.includes(category)) && (intensity === "all" || story.contentIntensity === intensity) && (mediaType === "all" || story.mediaType === mediaType) && identityMatches && story.readingMinutes <= max && (background === "all" || story.religiousBackground === background) && (region === "all" || story.countryRegion === region) && (!summaryOnly || story.hasShortSummary);
    }).sort((a, b) => sort === "most_read" ? b.viewCount - a.viewCount : sort === "shortest" ? a.readingMinutes - b.readingMinutes : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [stories, search, category, intensity, mediaType, identity, maxMinutes, background, region, summaryOnly, sort]);
  function reset() { setCategory("all"); setIntensity("all"); setMediaType("all"); setIdentity("all"); setMaxMinutes("all"); setBackground("all"); setRegion("all"); setSummaryOnly(false); setSort("recent"); setSearch(""); setVisible(12); }
  return <div className="storyExplorer storyExplorer--youtube"><section className="youtubeStoryToolbar" aria-label="Filter survivor stories"><label className="youtubeSearch"><span className="srOnly">Search stories</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search stories" /></label><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Topic"><option value="all">All topics</option>{categories.map((item) => <option value={item} key={item}>{item}</option>)}</select><select value={sort} onChange={(event) => setSort(event.target.value as SortMode)} aria-label="Sort stories"><option value="recent">Newest</option><option value="most_read">Most read</option><option value="shortest">Shortest</option></select><details className="youtubeMoreFilters"><summary>More filters</summary><div className="youtubeMoreFiltersGrid"><label>Intensity<select value={intensity} onChange={(event) => setIntensity(event.target.value as "all" | ContentIntensity)}><option value="all">Any</option><option value="gentle">Gentle</option><option value="moderate">Moderate</option><option value="high">High</option></select></label><label>Format<select value={mediaType} onChange={(event) => setMediaType(event.target.value as "all" | MediaType)}><option value="all">All formats</option><option value="written">Written</option><option value="audio">Audio</option><option value="video">Video</option></select></label><label>Author<select value={identity} onChange={(event) => setIdentity(event.target.value as IdentityFilter)}><option value="all">Named or anonymous</option><option value="anonymous">Anonymous only</option><option value="named">Chosen name shown</option></select></label><label>Length<select value={maxMinutes} onChange={(event) => setMaxMinutes(event.target.value)}><option value="all">Any length</option><option value="5">Up to 5 min</option><option value="10">Up to 10 min</option><option value="15">Up to 15 min</option></select></label><label>Background<select value={background} onChange={(event) => setBackground(event.target.value)}><option value="all">Any background</option>{backgrounds.map((item) => <option value={item} key={item}>{item}</option>)}</select></label><label>Region<select value={region} onChange={(event) => setRegion(event.target.value)}><option value="all">Any region</option>{regions.map((item) => <option value={item} key={item}>{item}</option>)}</select></label><label className="checkboxRow youtubeCheckbox"><input type="checkbox" checked={summaryOnly} onChange={(event) => setSummaryOnly(event.target.checked)} />Has a short summary</label></div></details><button className="youtubeClearFilters" type="button" onClick={reset}>Clear</button></section><div className="storyResults storyResults--youtube"><p className="resultsCount" aria-live="polite">{filtered.length} {filtered.length === 1 ? "story" : "stories"}</p>{filtered.length === 0 ? <div className="emptyState"><h2>No stories match these filters.</h2><button className="button secondary" type="button" onClick={reset}>Clear filters</button></div> : <><div className="storyList storyList--youtube">{filtered.slice(0, visible).map((story) => <Link className="storyVideoCard" href={`/stories/${story.id}`} key={story.id}><div className="storyVideoThumbnail"><img src={story.imageUrl || fallbackImage} alt={story.imageUrl ? `Image for ${story.title}` : "Ornate church interior used as the default image for a survivor story."} /><span className="storyDuration">{story.readingMinutes} min</span><span className={`storyIntensityBadge ${story.contentIntensity}`}>{story.contentIntensity}</span></div><div className="storyVideoMeta"><h2>{story.title}</h2><p>{story.authorDisplay} · {story.churchDisplay}</p><small>{story.mediaType}{story.viewCount > 0 ? ` · ${story.viewCount} ${story.viewCount === 1 ? "read" : "reads"}` : ""}</small></div></Link>)}</div>{visible < filtered.length && <button type="button" className="button secondary loadMore" onClick={() => setVisible((value) => value + 12)}>Show more stories</button>}</>}</div></div>;
}
