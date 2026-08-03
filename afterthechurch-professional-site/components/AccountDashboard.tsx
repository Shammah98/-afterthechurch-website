"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import type { AccountStory, PrivacyLevel } from "@/lib/types";

export default function AccountDashboard() {
  const [stories, setStories] = useState<AccountStory[]>([]);
  const [status, setStatus] = useState("Loading your submissions…");
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [requestText, setRequestText] = useState<Record<string, string>>({});

  async function token() {
    const { data } = await getBrowserSupabase().auth.getSession();
    return data.session?.access_token || null;
  }

  async function load() {
    const accessToken = await token();
    setSignedIn(Boolean(accessToken));

    if (!accessToken) {
      setStatus("");
      return;
    }

    const response = await fetch("/api/account/stories", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const result = await response.json();

    if (!response.ok) {
      setStatus(result.error || "Your submissions could not be loaded.");
      return;
    }

    setStories(result.stories);
    setStatus(result.stories.length ? "" : "You have not submitted a story.");
  }

  useEffect(() => {
    load();
  }, []);

  async function update(
    id: string,
    body: Record<string, unknown>,
    successMessage: string
  ) {
    const accessToken = await token();
    if (!accessToken) return;

    setStatus("Saving your request…");
    const response = await fetch(`/api/stories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    setStatus(
      response.ok
        ? successMessage
        : result.error || "The request could not be saved."
    );
    if (response.ok) load();
  }

  async function remove(id: string) {
    if (!window.confirm("Permanently delete this submission and its uploaded media? This cannot be undone.")) {
      return;
    }

    const accessToken = await token();
    if (!accessToken) return;

    setStatus("Deleting your submission…");
    const response = await fetch(`/api/stories/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const result = await response.json();
    setStatus(
      response.ok
        ? "The submission and media were deleted."
        : result.error || "Deletion failed."
    );
    if (response.ok) load();
  }

  if (signedIn === null) return <p className="loadingState">{status}</p>;

  if (!signedIn) {
    return (
      <div className="accountRequired">
        <h2>Sign in to view your private account.</h2>
        <Link className="button primary" href="/auth">Sign In</Link>
      </div>
    );
  }

  return (
    <div className="accountDashboard">
      <div className="accountHeader">
        <div>
          <p className="eyebrow">Your submissions</p>
          <h2>Manage privacy, changes and deletion.</h2>
        </div>
        <Link className="button primary" href="/share">Submit a Story</Link>
      </div>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>

      <div className="accountStoryList">
        {stories.map((story) => (
          <article key={story.id}>
            <div className="accountStoryTop">
              <div>
                <span className={`statusBadge ${story.status}`}>{story.status.replace("_", " ")}</span>
                <h3>{story.title}</h3>
                <p>{story.mediaType} · submitted {new Date(story.createdAt).toLocaleDateString()}</p>
              </div>

              <label>
                Public privacy level
                <select
                  value={story.privacyLevel}
                  onChange={(event) =>
                    update(
                      story.id,
                      {
                        action: "privacy",
                        privacyLevel: event.target.value as PrivacyLevel
                      },
                      "Your privacy level was updated."
                    )
                  }
                >
                  <option value="public">Fully Public</option>
                  <option value="anonymous_church">Anonymous Church</option>
                  <option value="fully_anonymous">Fully Anonymous</option>
                </select>
              </label>
            </div>

            {story.moderatorNotes && (
              <div className="moderatorNote">
                <strong>Reviewer note</strong>
                <p>{story.moderatorNotes}</p>
              </div>
            )}

            <label>
              Request a correction or change
              <textarea
                rows={3}
                value={requestText[story.id] || ""}
                onChange={(event) =>
                  setRequestText((current) => ({
                    ...current,
                    [story.id]: event.target.value
                  }))
                }
                placeholder="Explain what you would like changed. A reviewer will contact you before changing meaning."
              />
            </label>

            <div className="accountButtons">
              <button
                className="button secondary"
                type="button"
                onClick={() =>
                  update(
                    story.id,
                    {
                      action: "request_change",
                      request: requestText[story.id] || ""
                    },
                    "Your change request was recorded."
                  )
                }
              >
                Send Change Request
              </button>

              {story.status === "approved" && (
                <button
                  className="button quiet"
                  type="button"
                  onClick={() =>
                    update(
                      story.id,
                      { action: "unpublish" },
                      "The story was removed from public view."
                    )
                  }
                >
                  Temporarily Unpublish
                </button>
              )}

              <button className="dangerButton" type="button" onClick={() => remove(story.id)}>
                Permanently Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
