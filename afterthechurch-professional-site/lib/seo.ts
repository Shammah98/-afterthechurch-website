// The canonical domain is intentionally stable across Vercel preview and
// production deployments; do not point search engines at deployment URLs.
export const SITE_URL = "https://www.afterthechurch.com";

export function seoDescription(value: string, maxLength = 165) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  const snippet = normalized.slice(0, maxLength - 1);
  const lastSpace = snippet.lastIndexOf(" ");
  return (lastSpace > 90 ? snippet.slice(0, lastSpace) : snippet).trimEnd() + "…";
}

// Avoid inserting untrusted story text directly into an HTML script context.
export function safeJsonLd(value: Record<string, unknown>) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
