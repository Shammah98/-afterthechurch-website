"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";

type ReviewStory = {
  id: string;
  title: string;
  displayName: string;
  churchName: string;
  privacyLevel: string;
  mediaType: string;
  mediaUrl: string | null;
  imageUrl: string | null;
  storyText: string | null;
  shortSummary: string;
  categories: string[];
  contentWarnings: string[];
  contentIntensity: string;
  createdAt: string;
  authorChangeRequest: string | null;
};

export default function AdminDashboard() {
  const [stories, setStories] = useState<ReviewStory[]>([]);
  const [status, setStatus] = useState("Checking administrator access…");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [approvedStoryId, setApprovedStoryId] = useState<string | null>(null);

  async function getToken() {
    const { data } = await getBrowserSupabase().auth.getSession();
    return data.session?.access_token || null;
  }

  async function load() {
    const token = await getToken();
    if (!token) {
      setStatus("Sign in with an authorised administrator account.");
      return;
    }

    const response = await fetch("/api/admin/stories", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const result = await response.json();

    if (!response.ok) {
      setStatus(
        response.status === 403
          ? "Administrator access was not granted. Sign in with an email listed in ADMIN_EMAILS in Vercel, then refresh the queue."
          : result.error || "The moderation queue could not be loaded."
      );
      return;
    }

    setStories(result.stories);
    setStatus(result.stories.length ? "" : "There are no submissions awaiting review.");
  }

  useEffect(() => {
    load();
  }, []);

  async function review(id: string, decision: "approve" | "reject") {
    const token = await getToken();
    if (!token) return;

    setStatus("Saving the moderation decision…");

    const response = await fetch(`/api/admin/stories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        decision,
        moderatorNotes: notes[id] || ""
      })
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus(result.error || "The decision was not saved.");
      return;
    }

    await load();
    setStatus(`Submission ${decision === "approve" ? "approved and published" : "rejected"}.`);
    setApprovedStoryId(decision === "approve" ? id : null);
  }

  return (
    <div className="adminDashboard">
      <div className="adminToolbar">
        <button className="button secondary" type="button" onClick={load}>
          Refresh Moderation Queue
        </button>
        <Link className="textLink" href="/stories">
          Open Public Stories
        </Link>
      </div>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>

      {approvedStoryId && (
        <div className="moderatorNote">
          <strong>The story is now public.</strong>
          <p>
            <Link className="textLink" href={`/stories/${approvedStoryId}`}>
              Open the published story
            </Link>
          </p>
        </div>
      )}

      {stories.map((story) => (
        <article key={story.id}>
          <div className="adminMeta">
            <span>{story.mediaType}</span>
            <span>{story.contentIntensity} intensity</span>
            <span>{new Date(story.createdAt).toLocaleString()}</span>
          </div>
          <h2>{story.title}</h2>
          <p><strong>Submitted as:</strong> {story.displayName} · {story.churchName}</p>
          <p><strong>Privacy:</strong> {story.privacyLevel.replace("_", " ")}</p>
          <p><strong>Short summary:</strong> {story.shortSummary}</p>

          <div className="tagList">
            {story.categories.map((item) => <span key={item}>{item}</span>)}
          </div>

          {story.contentWarnings.length > 0 && (
            <p className="reviewWarning">
              Content notices: {story.contentWarnings.join(", ")}
            </p>
          )}

          {story.imageUrl && (
            <img
              className="storyImage"
              src={story.imageUrl}
              alt={`Submitted picture for ${story.title}`}
            />
          )}

          {story.mediaType === "video" && story.mediaUrl && (
            <video className="storyMedia" controls preload="metadata">
              <source src={story.mediaUrl} />
            </video>
          )}

          {story.mediaType === "audio" && story.mediaUrl && (
            <div className="audioStory">
              <audio controls preload="metadata">
                <source src={story.mediaUrl} />
              </audio>
            </div>
          )}

          <details className="adminFullText">
            <summary>Open full story or transcript</summary>
            <div>
              {story.storyText
                ? story.storyText.split("\n").map((paragraph, index) =>
                    paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                  )
                : <p>No written text was supplied.</p>}
            </div>
          </details>

          {story.authorChangeRequest && (
            <div className="moderatorNote">
              <strong>Author change request</strong>
              <p>{story.authorChangeRequest}</p>
            </div>
          )}

          <label>
            Reviewer notes visible to the author
            <textarea
              rows={4}
              value={notes[story.id] || ""}
              onChange={(event) =>
                setNotes((current) => ({ ...current, [story.id]: event.target.value }))
              }
            />
          </label>

          <div className="accountButtons">
            <button className="button primary" type="button" onClick={() => review(story.id, "approve")}>
              Approve for Publication
            </button>
            <button className="dangerButton" type="button" onClick={() => review(story.id, "reject")}>
              Reject and Retain for 30 Days
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
