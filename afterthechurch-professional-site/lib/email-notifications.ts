type StorySubmissionNotification = {
  title: string;
  displayName: string;
  churchName: string;
  privacyLevel: string;
  mediaType: string;
  categories: string[];
  contentIntensity: string;
};

type SupportRequestNotification = {
  country: string;
  urgentRisk: boolean;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    return entities[character] || character;
  });
}

function notificationConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient =
    process.env.STORY_NOTIFICATION_EMAIL?.trim() || "sha2mmah@gmail.com";
  const from =
    process.env.STORY_NOTIFICATION_FROM?.trim() ||
    "AfterTheChurch Notifications <onboarding@resend.dev>";
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.afterthechurch.com"
  ).replace(/\/+$/, "");

  return { apiKey, recipient, from, adminUrl: `${siteUrl}/admin` };
}

export async function sendStorySubmissionNotification(
  submission: StorySubmissionNotification
) {
  const { apiKey, recipient, from, adminUrl } = notificationConfig();

  // Email notifications are optional. A missing email configuration must never
  // prevent a survivor's submission from being saved for moderation.
  if (!apiKey) {
    console.info("Story notification skipped: RESEND_API_KEY is not configured.");
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject: `New story awaiting moderation: ${submission.title}`,
      text: [
        "A new story has been submitted to AfterTheChurch and is awaiting moderation.",
        "",
        `Title: ${submission.title}`,
        `Submitted as: ${submission.displayName}`,
        `Church or organisation: ${submission.churchName}`,
        `Privacy choice: ${submission.privacyLevel.replaceAll("_", " ")}`,
        `Format: ${submission.mediaType}`,
        `Intensity: ${submission.contentIntensity}`,
        `Categories: ${submission.categories.join(", ") || "None selected"}`,
        "",
        `Open the private moderation queue: ${adminUrl}`,
        "",
        "The story text is intentionally not included in this email to reduce privacy exposure."
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#241f1c;max-width:640px;margin:auto">
          <h1 style="font-size:24px">New story awaiting moderation</h1>
          <p>A new submission has entered the private AfterTheChurch moderation queue.</p>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Title</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.title)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Submitted as</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.displayName)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Church or organisation</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.churchName)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Privacy choice</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.privacyLevel.replaceAll("_", " "))}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Format</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.mediaType)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Intensity</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.contentIntensity)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd"><strong>Categories</strong></td><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(submission.categories.join(", ") || "None selected")}</td></tr>
          </table>
          <p style="margin:28px 0">
            <a href="${adminUrl}" style="background:#7f2438;color:white;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Open moderation queue</a>
          </p>
          <p style="font-size:13px;color:#665f5a">The story text is intentionally not included in this email to reduce privacy exposure.</p>
        </div>
      `
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend notification failed (${response.status}): ${details}`);
  }
}

export async function sendSupportRequestNotification(
  submission: SupportRequestNotification
) {
  const { apiKey, recipient, from, adminUrl } = notificationConfig();

  if (!apiKey) {
    console.info("Support request notification skipped: RESEND_API_KEY is not configured.");
    return;
  }

  const urgency = submission.urgentRisk ? "URGENT-RISK FLAG — " : "";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject: `${urgency}New private support request`,
      text: [
        "A new private Help Someone Else Safely request has been submitted to AfterTheChurch.",
        "",
        `Country: ${submission.country}`,
        `Urgent-risk flag selected: ${submission.urgentRisk ? "Yes" : "No"}`,
        "",
        `Open the restricted administrator page to review it: ${adminUrl}`,
        "",
        "Names, contact details and the description are intentionally excluded from this email."
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#241f1c;max-width:640px;margin:auto">
          <h1 style="font-size:24px">New private support request</h1>
          <p>A Help Someone Else Safely request has entered the restricted AfterTheChurch administrator queue.</p>
          <p><strong>Country:</strong> ${escapeHtml(submission.country)}<br/>
          <strong>Urgent-risk flag selected:</strong> ${submission.urgentRisk ? "Yes" : "No"}</p>
          <p style="margin:28px 0">
            <a href="${adminUrl}" style="background:#7f2438;color:white;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Open private admin queue</a>
          </p>
          <p style="font-size:13px;color:#665f5a">Names, contact details and the description are intentionally excluded from this email.</p>
        </div>
      `
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend support notification failed (${response.status}): ${details}`);
  }
}
