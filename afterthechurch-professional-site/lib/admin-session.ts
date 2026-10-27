import type { NextRequest } from "next/server";

export const ADMIN_COOKIE = "atc_admin_session";
export const ADMIN_SESSION_SECONDS = 8 * 60 * 60;

function signingSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }
  return secret;
}

async function signature(payload: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(signingSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return Array.from(mac, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function createAdminSession() {
  const expires = Date.now() + ADMIN_SESSION_SECONDS * 1000;
  const payload = `v1.${expires}.${crypto.randomUUID()}`;
  return `${payload}.${await signature(payload)}`;
}

export async function hasAdminSession(request: NextRequest) {
  const raw = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!raw || raw.length > 256) return false;

  const match = /^v1\.(\d{13})\.([a-f0-9-]{36})\.([a-f0-9]{64})$/.exec(raw);
  if (!match) return false;

  const expires = Number(match[1]);
  if (!Number.isFinite(expires) || expires <= Date.now() ||
      expires > Date.now() + ADMIN_SESSION_SECONDS * 1000) return false;

  try {
    const payload = `v1.${match[1]}.${match[2]}`;
    const expected = await signature(payload);
    let difference = 0;
    for (let i = 0; i < expected.length; i++) {
      difference |= expected.charCodeAt(i) ^ match[3].charCodeAt(i);
    }
    return difference === 0;
  } catch {
    return false;
  }
}
