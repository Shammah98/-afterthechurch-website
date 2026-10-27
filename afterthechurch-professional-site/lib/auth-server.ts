import type { NextRequest } from "next/server";
import { createAdminClient } from "./supabase-admin";
import { hasAdminSession } from "./admin-session";

export async function getUserFromRequest(request: NextRequest) {
  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return null;

  const supabase = createAdminClient();
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) return null;
  return data.user;
}

export function isAdminEmail(email: string | undefined | null) {
  if (!email) return false;
  const allowed = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  return allowed.includes(email.toLowerCase());
}

/** Validates signed admin sessions or the existing Supabase admin allowlist. */
export async function isAdminRequest(request: NextRequest) {
  if (await hasAdminSession(request)) {
    const origin = request.headers.get("origin");
    if (request.method !== "GET" && request.method !== "HEAD" &&
        origin && origin !== request.nextUrl.origin) return false;
    return true;
  }

  const user = await getUserFromRequest(request);
  return Boolean(user && !user.is_anonymous && isAdminEmail(user.email));
}
