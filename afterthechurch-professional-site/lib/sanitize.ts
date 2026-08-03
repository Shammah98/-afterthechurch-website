export function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, maxLength);
}

export function cleanStringArray(
  value: unknown,
  allowed: readonly string[],
  maxItems = 8
) {
  if (!Array.isArray(value)) return [];
  const allowedSet = new Set(allowed);
  return [...new Set(value.filter((item) => typeof item === "string" && allowedSet.has(item)))]
    .slice(0, maxItems);
}

export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 210));
}
