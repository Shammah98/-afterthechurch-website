function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export const SITE_URL = stripTrailingSlash(
  process.env.EXPO_PUBLIC_SITE_URL || "https://afterthechurch.com"
);

// Supabase publishable credentials are intentionally safe to ship in a client app.
// Database access remains protected by RLS and the website's server-side API.
export const SUPABASE_URL =
  process.env.EXPO_PUBLIC_SUPABASE_URL ||
  "https://xqfkaevvsipyncosflja.supabase.co";

export const SUPABASE_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_v0x6kwAc74Vtm-roAC7Y_Q_kASW6WSy";
