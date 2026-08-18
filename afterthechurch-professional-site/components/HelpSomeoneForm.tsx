"use client";

import { FormEvent, useState } from "react";

type KnowsChoice = "yes" | "no" | "unsure";
type DirectContactChoice = "yes" | "no";

export default function HelpSomeoneForm() {
  const [knowsAboutRequest, setKnowsAboutRequest] = useState<KnowsChoice>("yes");
  const [directContact, setDirectContact] = useState<DirectContactChoice>("no");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [startedAt] = useState(Date.now());

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setBusy(true);
    setSubmitted(false);
    setStatus("");

    try {
      const requesterContact = String(form.get("requesterContact") || "").trim();
      const personPhone = String(form.get("personPhone") || "").trim();
      const otherContact = String(form.get("otherContact") || "").trim();
      const permissionToShareContact = form.get("permissionToShareContact") === "on";

      if (directContact === "yes" && knowsAboutRequest !== "yes") {
        throw new Error(
          "We can only receive the person's direct contact details when they know about this request. Choose ‘No’ for direct contact and give us a safe way to contact you instead."
        );
      }

      if (directContact === "yes" && !permissionToShareContact) {
        throw new Error(
          "Please confirm that the person has agreed to share their contact details with AfterTheChurch."
        );
      }

      if (directContact === "yes" && !personPhone && !otherContact) {
        throw new Error("Add at least one safe contact method for the person.");
      }

      if (directContact === "no" && !requesterContact) {
        throw new Error(
          "Add a safe way for AfterTheChurch to contact you. We will not contact the other person directly."
        );
      }

      const response = await fetch("/api/help-someone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personName: form.get("personName"),
          personAge: form.get("personAge"),
          personGender: form.get("personGender"),
          country: form.get("country"),
          knowsAboutRequest,
          directContact: directContact === "yes",
          permissionToShareContact,
          personPhone,
          otherContact,
          safeContactNotes: form.get("safeContactNotes"),
          requesterName: form.get("requesterName"),
          requesterRelationship: form.get("requesterRelationship"),
          requesterContact,
          situation: form.get("situation"),
          safetyConcerns: form.get("safetyConcerns"),
          urgentRisk: form.get("urgentRisk") === "on",
          privacyConfirmed: form.get("privacyConfirmed") === "on",
          emergencyConfirmed: form.get("emergencyConfirmed") === "on",
          website: form.get("website"),
          startedAt
        })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "The support request could not be saved.");
      }

      formElement.reset();
      setKnowsAboutRequest("yes");
      setDirectContact("no");
      setSubmitted(true);
      setStatus(
        "Your support request was received privately. An authorised AfterTheChurch administrator can now review it. Do not wait for us if the situation becomes urgent."
      );
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
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
        <legend>About the person</legend>
        <p className="fieldHelp">
          A first name, preferred name or initials are enough if giving a full legal name is unnecessary.
        </p>
        <div className="twoColumns">
          <label>
            Name or preferred name
            <input name="personName" maxLength={120} required />
          </label>
          <label>
            Age or approximate age
            <input name="personAge" maxLength={40} placeholder="e.g. 21, or early 20s" required />
          </label>
          <label>
            Gender
            <input name="personGender" maxLength={80} placeholder="Optional — only if relevant or known" />
          </label>
          <label>
            Country of residence
            <input name="country" maxLength={100} autoComplete="country-name" required />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Contact them safely</legend>
        <p className="fieldHelp">
          Do not give us their contact details if they do not know about this request or if contact could expose them to monitoring or retaliation.
        </p>

        <label>
          Do they know you are contacting AfterTheChurch?
          <select
            value={knowsAboutRequest}
            onChange={(event) => setKnowsAboutRequest(event.target.value as KnowsChoice)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">I am not sure</option>
          </select>
        </label>

        <label>
          May AfterTheChurch contact this person directly?
          <select
            value={directContact}
            onChange={(event) => setDirectContact(event.target.value as DirectContactChoice)}
          >
            <option value="no">No — contact me instead</option>
            <option value="yes">Yes — they know and agree</option>
          </select>
        </label>

        {directContact === "yes" ? (
          <>
            <div className="twoColumns">
              <label>
                Safe phone / WhatsApp number
                <input name="personPhone" maxLength={100} inputMode="tel" autoComplete="off" />
              </label>
              <label>
                Other safe communication
                <input
                  name="otherContact"
                  maxLength={240}
                  placeholder="e.g. Signal, email, Telegram or another safe method"
                  autoComplete="off"
                />
              </label>
            </div>
            <label className="checkboxRow">
              <input type="checkbox" name="permissionToShareContact" />
              <span>
                The person knows about this request and has agreed that their contact details may be shared with AfterTheChurch.
              </span>
            </label>
          </>
        ) : null}

        <label>
          Safe contact instructions
          <textarea
            name="safeContactNotes"
            rows={4}
            maxLength={1500}
            placeholder="Tell us about safe times, words not to use, monitored devices, voicemail, caller ID, shared accounts or anything else that could create risk."
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>What is happening?</legend>
        <label>
          Describe the situation
          <textarea
            name="situation"
            rows={9}
            minLength={30}
            maxLength={6000}
            required
            placeholder="What has been happening, what has changed, who is involved, and what makes you concerned?"
          />
          <small>Focus on what you know or directly observed. You can say when something is uncertain.</small>
        </label>

        <label>
          Anything we need to be especially careful about?
          <textarea
            name="safetyConcerns"
            rows={6}
            maxLength={3000}
            placeholder="For example: threats, suicide or self-harm risk, violence, sexual harm, medical neglect, a child or dependent adult, homelessness, immigration dependence, financial control, stalking, surveillance, shunning or retaliation."
          />
        </label>

        <label className="checkboxRow">
          <input type="checkbox" name="urgentRisk" />
          <span>I believe there may be a serious or urgent safety risk.</span>
        </label>
      </fieldset>

      <fieldset>
        <legend>How can we follow up with you?</legend>
        <div className="twoColumns">
          <label>
            Your name
            <input name="requesterName" maxLength={120} placeholder="Optional" />
          </label>
          <label>
            Your relationship to the person
            <input name="requesterRelationship" maxLength={120} placeholder="e.g. friend, sibling, classmate" />
          </label>
        </div>
        <label>
          Safe way to contact you
          <input
            name="requesterContact"
            maxLength={240}
            placeholder="Email, phone, Signal or another safe method"
            autoComplete="off"
          />
          <small>This is required when you do not want us to contact the person directly.</small>
        </label>
      </fieldset>

      <fieldset>
        <legend>Before sending</legend>
        <label className="checkboxRow">
          <input type="checkbox" name="privacyConfirmed" required />
          <span>
            I have shared only information that is reasonably necessary for this support request and I have not included passwords, identification numbers, private records or unnecessary addresses.
          </span>
        </label>
        <label className="checkboxRow">
          <input type="checkbox" name="emergencyConfirmed" required />
          <span>
            I understand AfterTheChurch is not an emergency or statutory safeguarding service and I will use the appropriate local service if someone is in immediate danger.
          </span>
        </label>
      </fieldset>

      <button className="button primary submitButton" type="submit" disabled={busy}>
        {busy ? "Sending privately…" : "Send Private Support Request"}
      </button>
      <p className="formStatus" role="status" aria-live="polite">
        {submitted ? "✓ " : ""}{status}
      </p>
    </form>
  );
}
