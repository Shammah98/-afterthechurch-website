"use client";

import { useEffect, useMemo, useState } from "react";
import { getAdminAccessToken, getBrowserSupabase } from "@/lib/supabase-browser";

type SupportRequest = {
  id: string;
  personName: string;
  personAge: string;
  personGender: string | null;
  country: string;
  knowsAboutRequest: string;
  directContactPermitted: boolean;
  permissionToShareContact: boolean;
  safePhone: string | null;
  otherContact: string | null;
  safeContactNotes: string | null;
  requesterName: string | null;
  requesterRelationship: string | null;
  requesterContact: string | null;
  situation: string;
  safetyConcerns: string | null;
  urgentRisk: boolean;
  status: "new" | "reviewing" | "referred" | "closed";
  adminNotes: string | null;
  createdAt: string;
};

export default function AdminSupportRequests() {
  const [requests, setRequests] = useState<SupportRequest[]>([]);
  const [authorised, setAuthorised] = useState<boolean | null>(null);
  const [message, setMessage] = useState("Checking support-request access…");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [statuses, setStatuses] = useState<Record<string, SupportRequest["status"]>>({});
  const [busyId, setBusyId] = useState<string | null>(null);

  async function getAdminToken() {
    return getAdminAccessToken();
  }

  async function load() {
    try {
      const token = await getAdminToken();
      if (!token) {
        setAuthorised(false);
        setRequests([]);
        setMessage("Sign in with the administrator panel above to review private support requests.");
        return;
      }

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);
      let response: Response;

      try {
        response = await fetch("/api/admin/support-requests", {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
          signal: controller.signal
        });
      } finally {
        window.clearTimeout(timeout);
      }

      const result = await response.json();

      if (!response.ok) {
        setAuthorised(response.status === 403 ? false : true);
        setRequests([]);
        setMessage(result.error || "The support-request queue could not be loaded.");
        return;
      }

      const items = result.requests as SupportRequest[];
      setAuthorised(true);
      setRequests(items);
      setNotes(Object.fromEntries(items.map((item) => [item.id, item.adminNotes || ""])));
      setStatuses(Object.fromEntries(items.map((item) => [item.id, item.status])));
      setMessage(items.length ? "" : "There are no private support requests yet.");
    } catch {
      setAuthorised(false);
      setRequests([]);
      setMessage("Support-request access could not be checked. Sign in above or refresh the page.");
    }
  }

  useEffect(() => {
    load();
    const supabase = getBrowserSupabase();
    const { data } = supabase.auth.onAuthStateChange(() => {
      window.setTimeout(() => load(), 0);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  async function save(item: SupportRequest) {
    const token = await getAdminToken();
    if (!token) {
      setAuthorised(false);
      setMessage("Administrator sign-in is required.");
      return;
    }

    setBusyId(item.id);
    setMessage("Saving support-request notes…");

    try {
      const response = await fetch("/api/admin/support-requests", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: item.id,
          status: statuses[item.id] || item.status,
          adminNotes: notes[item.id] || ""
        })
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage(result.error || "The update could not be saved.");
        setBusyId(null);
        return;
      }

      await load();
      setMessage("Support request updated.");
    } catch {
      setMessage("The support-request update could not be saved. Please try again.");
    } finally {
      setBusyId(null);
    }
  }

  const openCount = useMemo(
    () => requests.filter((item) => item.status !== "closed").length,
    [requests]
  );

  if (authorised === null) {
    return <p className="loadingState">{message}</p>;
  }

  return (
    <section className="adminDashboard" aria-labelledby="support-request-heading">
      <div className="adminToolbar">
        <div>
          <p className="eyebrow">Private safeguarding support</p>
          <h2 id="support-request-heading">Help Someone Else requests</h2>
          <p className="fieldHelp">
            {authorised ? `${openCount} open request${openCount === 1 ? "" : "s"}.` : message}
          </p>
        </div>
      </div>

      {authorised && message ? <p className="formStatus">{message}</p> : null}

      {authorised
        ? requests.map((item) => (
            <article key={item.id}>
              <div className="adminToolbar">
                <div>
                  <div className="adminMeta">
                    <span>{new Date(item.createdAt).toLocaleString()}</span>
                    <span>{item.country}</span>
                    <span className={`statusBadge ${item.status}`}>{item.status}</span>
                    {item.urgentRisk ? <span className="statusBadge rejected">Urgent-risk flag</span> : null}
                  </div>
                  <h3>{item.personName}</h3>
                  <p>
                    Age: <strong>{item.personAge}</strong>
                    {item.personGender ? <> · Gender: <strong>{item.personGender}</strong></> : null}
                  </p>
                </div>
              </div>

              {item.urgentRisk ? (
                <div className="urgentNotice">
                  <strong>Urgent-risk flag selected.</strong>
                  <p>
                    Review promptly. AfterTheChurch is not an emergency service; imminent danger may require the appropriate local emergency or statutory safeguarding route.
                  </p>
                </div>
              ) : null}

              <div className="twoColumns">
                <div>
                  <h4>Direct contact</h4>
                  <p><strong>Knows about request:</strong> {item.knowsAboutRequest}</p>
                  <p><strong>Direct contact permitted:</strong> {item.directContactPermitted ? "Yes" : "No"}</p>
                  {item.directContactPermitted ? (
                    <>
                      <p><strong>Permission confirmed:</strong> {item.permissionToShareContact ? "Yes" : "No"}</p>
                      {item.safePhone ? <p><strong>Phone / WhatsApp:</strong> {item.safePhone}</p> : null}
                      {item.otherContact ? <p><strong>Other contact:</strong> {item.otherContact}</p> : null}
                    </>
                  ) : (
                    <p><strong>Do not contact this person directly.</strong></p>
                  )}
                </div>
                <div>
                  <h4>Person who submitted the request</h4>
                  <p><strong>Name:</strong> {item.requesterName || "Not provided"}</p>
                  <p><strong>Relationship:</strong> {item.requesterRelationship || "Not provided"}</p>
                  <p><strong>Safe contact:</strong> {item.requesterContact || "Not provided"}</p>
                </div>
              </div>

              {item.safeContactNotes ? (
                <div className="moderatorNote">
                  <strong>Safe contact instructions</strong>
                  <p>{item.safeContactNotes}</p>
                </div>
              ) : null}

              <details className="adminFullText" open>
                <summary>What is happening</summary>
                <div style={{ whiteSpace: "pre-wrap" }}>{item.situation}</div>
              </details>

              {item.safetyConcerns ? (
                <details className="adminFullText" open={item.urgentRisk}>
                  <summary>Safety concerns / things to be careful about</summary>
                  <div style={{ whiteSpace: "pre-wrap" }}>{item.safetyConcerns}</div>
                </details>
              ) : null}

              <label>
                Review status
                <select
                  value={statuses[item.id] || item.status}
                  onChange={(event) =>
                    setStatuses((current) => ({
                      ...current,
                      [item.id]: event.target.value as SupportRequest["status"]
                    }))
                  }
                >
                  <option value="new">New</option>
                  <option value="reviewing">Reviewing</option>
                  <option value="referred">Referred / support route given</option>
                  <option value="closed">Closed</option>
                </select>
              </label>

              <label>
                Private administrator notes
                <textarea
                  rows={5}
                  maxLength={5000}
                  value={notes[item.id] || ""}
                  onChange={(event) =>
                    setNotes((current) => ({ ...current, [item.id]: event.target.value }))
                  }
                  placeholder="Record only what is necessary: actions taken, referrals, consent/safety decisions and follow-up."
                />
              </label>

              <button
                className="button secondary"
                type="button"
                disabled={busyId === item.id}
                onClick={() => save(item)}
              >
                {busyId === item.id ? "Saving…" : "Save Support Review"}
              </button>
            </article>
          ))
        : null}
    </section>
  );
}
