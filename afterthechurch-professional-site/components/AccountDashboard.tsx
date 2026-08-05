"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getOrCreatePublicSession } from "@/lib/supabase-browser";
import type { AccountStory, PrivacyLevel } from "@/lib/types";

function statusExplanation(status: AccountStory["status"]) {
  if (status === "pending") {
    return "Private and awaiting moderation. It will not appear in Survivor Stories until approved.";
  }
  if (status === "changes_requested") {
    return "Private while a requested change or clarification is being reviewed.";
  }
  if (status === "approved") {
    return "Published in Survivor Stories using the privacy level shown here.";
  }
  if (status === "rejected") {
    return "Not published. Review the moderator note or permanently delete the submission.";
  }
  return "Removed from public view and retained privately until it is deleted or reviewed.";
}

export default function AccountDashboard() {
  const [stories, setStories] = useState<AccountStory[]>([]);
  const [status, setStatus] = useState("Loading your submissions…");
  const [requestText, setRequestText] = useState<Record<string, string>>({});

  async function token() {
    try {
      return (await getOrCreatePublicSession()).access_token;
    } catch (error) {
      console.error("Private submission access failed:", error);
      setStatus(
        "Private submission controls are temporarily unavailable. Please try again later."
      );
      return null;
    }
  }

  async function load() {
    const accessToken = await token();
    if (!accessToken) return;

    const response = await fetch("/api/account/stories", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const result = await response.json();

    if (!response.ok) {
      setStatus(result.error || "Your submissions could not be loaded.");
      return;
    }

    setStories(result.stories);
    setStatus(
      result.stories.length
        ? ""
        : "No submissions are saved to this browser yet."
    );
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

  return (
    <div className="accountDashboard">
      <div className="accountHeader">
        <div>
          <p className="eyebrow">Your submissions</p>
          <h2>Manage privacy, changes and deletion.</h2>
        </div>
        <Link className="button primary" href="/share">Submit a Story</Link>
      </div>

      <p className="accountStatusHelp">
        No account or sign-in is required. These private controls stay connected
        to this browser, so avoid clearing this site&apos;s data until you no longer
        need to manage a submission.
      </p>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>

      <div className="accountStoryList">
        {stories.map((story) => (
          <article key={story.id}>
            <div className="accountStoryTop">
              <div>
                <span className={`statusBadge ${story.status}`}>{story.status.replace("_", " ")}</span>
                <h3>{story.title}</h3>
                <p>{story.mediaType} · submitted {new Date(story.createdAt).toLocaleDateString()}</p>
                <p className="accountStatusHelp">{statusExplanation(story.status)}</p>
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
                 <option value="anonymous_church">
  Anonymous Church
</option>

<option value="anonymous_author">
  Anonymous Author
</option>

<option value="fully_anonymous">
  Fully Anonymous
</option>
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
