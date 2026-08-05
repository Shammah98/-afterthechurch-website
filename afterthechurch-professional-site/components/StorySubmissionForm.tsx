"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { getBrowserSupabase } from "@/lib/supabase-browser";
import type { MediaType, PrivacyLevel } from "@/lib/types";

const maxSizes: Record<MediaType, number> = {
  written: 0,
  audio: 50 * 1024 * 1024,
  video: 250 * 1024 * 1024
};

const maxImageSize = 10 * 1024 * 1024;
const acceptedImageTypes = ["image/jpeg", "image/png", "image/webp"];

function publicPreview(
  privacy: PrivacyLevel,
  displayName: string,
  churchName: string
) {
  if (privacy === "fully_anonymous") {
    return { author: "Anonymous Author", church: "Church Name Withheld" };
  }
  if (privacy === "anonymous_church") {
    return {
      author: displayName || "Your chosen name",
      church: "Church Name Withheld"
    };
  }

  if (privacy === "anonymous_author") {
  return {
    author: "Anonymous Author",
    church: churchName || "Church or organisation name"
  };
}
  return {
    author: displayName || "Your chosen name",
    church: churchName || "Church or organisation name"
  };
}

export default function StorySubmissionForm({
  categories,
  warnings
}: {
  categories: readonly string[];
  warnings: readonly string[];
}) {
  const [mediaType, setMediaType] = useState<MediaType>("written");
  const [privacy, setPrivacy] = useState<PrivacyLevel>("fully_anonymous");
  const [displayName, setDisplayName] = useState("");
  const [churchName, setChurchName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [startedAt] = useState(Date.now());

  useEffect(() => {
    getBrowserSupabase().auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
    });
  }, []);

  const preview = publicPreview(privacy, displayName, churchName);

  const acceptedTypes = useMemo(() => {
    if (mediaType === "audio") return "audio/mpeg,audio/mp4,audio/wav,audio/x-m4a";
    if (mediaType === "video") return "video/mp4,video/quicktime,video/webm";
    return undefined;
  }, [mediaType]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Capture the real HTML form before any asynchronous work begins.
    // React's event.currentTarget should not be relied on after an await.
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setStatus("");
    setBusy(true);

    try {
      const supabase = getBrowserSupabase();
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;

      if (!token) {
        setStatus("Sign in before submitting or managing a story.");
        return;
      }

      const storyText = String(form.get("storyText") || "").trim();

      if (mediaType === "written" && storyText.length < 150) {
        setStatus("Please write at least 150 characters or save the text elsewhere and return later.");
        return;
      }

      if (mediaType !== "written" && !file) {
        setStatus(`Choose an ${mediaType} file before submitting.`);
        return;
      }

      if (file && file.size > maxSizes[mediaType]) {
        setStatus(
          mediaType === "video"
            ? "The video must be 250 MB or smaller."
            : "The audio file must be 50 MB or smaller."
        );
        return;
      }

      if (imageFile && !acceptedImageTypes.includes(imageFile.type)) {
        setStatus("Choose a JPG, PNG or WebP picture.");
        return;
      }

      if (imageFile && imageFile.size > maxImageSize) {
        setStatus("The picture must be 10 MB or smaller.");
        return;
      }

      let mediaPath: string | null = null;
      let imagePath: string | null = null;

      if (file) {
        setStatus("Preparing a private upload…");

        const signResponse = await fetch("/api/uploads/sign", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            fileName: file.name,
            contentType: file.type,
            fileSize: file.size,
            mediaType
          })
        });

        const signed = await signResponse.json();
        if (!signResponse.ok) {
          throw new Error(signed.error || "The upload could not start.");
        }

        setStatus("Uploading your file privately…");

        const { error: uploadError } = await supabase.storage
          .from("story-media")
          .uploadToSignedUrl(signed.path, signed.token, file, {
            contentType: file.type
          });

        if (uploadError) {
          throw new Error("The media upload failed. Please try again.");
        }

        mediaPath = signed.path;
      }

      if (imageFile) {
        setStatus("Uploading your picture privately…");

        const signResponse = await fetch("/api/uploads/sign", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            fileName: imageFile.name,
            contentType: imageFile.type,
            fileSize: imageFile.size,
            mediaType: "image"
          })
        });

        const signed = await signResponse.json();
        if (!signResponse.ok) {
          throw new Error(signed.error || "The picture upload could not start.");
        }

        const { error: uploadError } = await supabase.storage
          .from("story-media")
          .uploadToSignedUrl(signed.path, signed.token, imageFile, {
            contentType: imageFile.type
          });

        if (uploadError) {
          throw new Error("The picture upload failed. Please try again.");
        }

        imagePath = signed.path;
      }

      const response = await fetch("/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title: form.get("title"),
          displayName: form.get("displayName"),
          churchName: form.get("churchName"),
          privacyLevel: privacy,
          mediaType,
          shortSummary: form.get("shortSummary"),
          storyText,
          mediaPath,
          imagePath,
          categories: form.getAll("categories").map(String),
          contentWarnings: form.getAll("contentWarnings").map(String),
          contentIntensity: form.get("contentIntensity"),
          religiousBackground: form.get("religiousBackground"),
          countryRegion: form.get("countryRegion"),
          consent: form.get("consent") === "on",
          rights: form.get("rights") === "on",
          website: form.get("website"),
          startedAt
        })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "The submission could not be saved.");
      }

      formElement.reset();
      setFile(null);
      setImageFile(null);
      setMediaType("written");
      setPrivacy("fully_anonymous");
      setDisplayName("");
      setChurchName("");
      setStatus(
        "Your submission was received. It remains private until the review process is complete."
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (signedIn === null) {
    return <p className="loadingState">Checking your account…</p>;
  }

  if (!signedIn) {
    return (
      <div className="accountRequired">
        <h2>An account is required to submit or manage a story.</h2>
        <p>
          Reading stories and resources remains public. An account gives you a
          private place to check review status, request changes, alter privacy
          settings or delete a submission.
        </p>
        <Link className="button primary" href="/auth">
          Sign In or Create Account
        </Link>
      </div>
    );
  }

  return (
    <form className="storyForm" onSubmit={submit}>
      <input
        className="honeypot"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <fieldset>
        <legend>How would you like to share?</legend>
        <div className="formatChoices">
          {(["written", "audio", "video"] as MediaType[]).map((type) => (
            <label className={mediaType === type ? "choice active" : "choice"} key={type}>
              <input
                type="radio"
                name="mediaType"
                value={type}
                checked={mediaType === type}
                onChange={() => {
                  setMediaType(type);
                  setFile(null);
                }}
              />
              <strong>{type[0].toUpperCase() + type.slice(1)}</strong>
              <small>
                {type === "written"
                  ? "Plain text"
                  : type === "audio"
                    ? "MP3, M4A or WAV"
                    : "MP4, MOV or WebM"}
              </small>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Choose your privacy level</legend>
        <div className="privacyChoices">
          <label className={privacy === "public" ? "privacyChoice active" : "privacyChoice"}>
            <input
              type="radio"
              name="privacyLevel"
              value="public"
              checked={privacy === "public"}
              onChange={() => setPrivacy("public")}
            />
            <span>
              <strong>Fully Public</strong>
              Your chosen name and the church or organisation name are displayed.
            </span>
          </label>

          <label className={privacy === "anonymous_church" ? "privacyChoice active" : "privacyChoice"}>
            <input
              type="radio"
              name="privacyLevel"
              value="anonymous_church"
              checked={privacy === "anonymous_church"}
              onChange={() => setPrivacy("anonymous_church")}
            />
            <span>
              <strong>Anonymous Church</strong>
              Your chosen name is displayed. The organisation appears as “Church Name Withheld.”
            </span>
          </label>

          <label className={privacy === "anonymous_author" ? "privacyChoice active" : "privacyChoice"}>
            <input
              type="radio"
              name="privacyLevel"
              value="anonymous_author"
              checked={privacy === "anonymous_author"}
              onChange={() => setPrivacy("anonymous_author")}
            />
            <span>
              <strong>Anonymous Author</strong>
              Your name is hidden as “Anonymous Author.” The church or organisation name is displayed.
            </span>
          </label>

          <label className={privacy === "fully_anonymous" ? "privacyChoice active" : "privacyChoice"}>
            <input
              type="radio"
              name="privacyLevel"
              value="fully_anonymous"
              checked={privacy === "fully_anonymous"}
              onChange={() => setPrivacy("fully_anonymous")}
            />
            <span>
              <strong>Fully Anonymous</strong>
              The public page displays “Anonymous Author” and “Church Name Withheld.”
            </span>
          </label>
        </div>

        <div className="publicPreview">
          <p className="eyebrow">Public preview</p>
          <strong>{preview.author}</strong>
          <span>{preview.church}</span>
        </div>
      </fieldset>

      <fieldset>
        <legend>Basic information</legend>
        <div className="twoColumns">
          <label>
            Chosen name or pseudonym
            <input
              name="displayName"
              required
              maxLength={80}
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
            />
          </label>

          <label>
            Church, ministry or organisation
            <input
              name="churchName"
              required
              maxLength={160}
              value={churchName}
              onChange={(event) => setChurchName(event.target.value)}
            />
          </label>
        </div>

        <label>
          Story title
          <input name="title" required maxLength={120} />
        </label>

        <label>
          Short, non-sensational summary
          <textarea
            name="shortSummary"
            required
            maxLength={650}
            rows={5}
            placeholder="Explain what the story covers without including the most distressing details."
          />
        </label>

        <div className="twoColumns">
          <label>
            Religious background
            <input
              name="religiousBackground"
              maxLength={100}
              placeholder="Optional, for example Pentecostal or Catholic"
            />
          </label>
          <label>
            Country or region
            <input
              name="countryRegion"
              maxLength={100}
              placeholder="Optional and only if safe to share"
            />
          </label>
        </div>

        <label>
          Content intensity
          <select name="contentIntensity" required defaultValue="moderate">
            <option value="gentle">Gentle — limited distressing detail</option>
            <option value="moderate">Moderate — some direct description</option>
            <option value="high">High — detailed or potentially difficult material</option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>Topics and content notices</legend>
        <p className="fieldHelp">
          These labels help readers decide what they are ready to open.
        </p>
        <div className="checkGrid">
          {categories.map((item) => (
            <label className="checkboxRow" key={item}>
              <input type="checkbox" name="categories" value={item} />
              {item}
            </label>
          ))}
        </div>

        <h2 className="subLegend">Content notices</h2>
        <div className="checkGrid">
          {warnings.map((item) => (
            <label className="checkboxRow" key={item}>
              <input type="checkbox" name="contentWarnings" value={item} />
              {item}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Your story</legend>

        <label>
          Add a picture (optional)
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => setImageFile(event.target.files?.[0] || null)}
          />
          <small>
            JPG, PNG or WebP, maximum 10 MB. The picture stays private until your story is approved.
          </small>
        </label>

        {mediaType !== "written" && (
          <label>
            Upload {mediaType}
            <input
              type="file"
              accept={acceptedTypes}
              required
              onChange={(event) => setFile(event.target.files?.[0] || null)}
            />
            <small>
              {mediaType === "video"
                ? "Maximum 250 MB. Avoid showing people who have not consented."
                : "Maximum 50 MB."}
            </small>
          </label>
        )}

        <label>
          {mediaType === "written" ? "Full story" : "Transcript or written context"}
          <textarea
            name="storyText"
            rows={16}
            maxLength={40000}
            placeholder="Share only what feels safe. Plain text is used so embedded scripts or tracking cannot be added."
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Consent before submission</legend>
        <label className="checkboxRow">
          <input type="checkbox" name="consent" required />
          I understand that the submission remains private until it is reviewed and approved.
        </label>
        <label className="checkboxRow">
          <input type="checkbox" name="rights" required />
          This is my experience, and I have permission to share any uploaded recording or material.
        </label>
      </fieldset>

      <button className="button primary submitButton" type="submit" disabled={busy}>
        {busy ? "Submitting privately…" : "Submit for Review"}
      </button>

      <p className="formStatus" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
