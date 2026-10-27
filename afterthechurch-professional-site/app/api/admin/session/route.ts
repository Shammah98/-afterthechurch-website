import { NextRequest, NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  ADMIN_COOKIE,
  ADMIN_SESSION_SECONDS,
  createAdminSession,
  hasAdminSession
} from "@/lib/admin-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "private, no-store, max-age=0" }
  });
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  return !origin || origin === request.nextUrl.origin;
}

function equalsSecret(input: string, expected: string) {
  const hash = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(hash(input), hash(expected));
}

export async function GET(request: NextRequest) {
  return json({ authenticated: await hasAdminSession(request) });
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return json({ error: "Request not allowed." }, 403);

  if (!(await checkRateLimit(request, "admin_login", 5, 900))) {
    return json({ error: "Too many login attempts. Try again in 15 minutes." }, 429);
  }

  let credentials: unknown;
  try {
    credentials = await request.json();
  } catch {
    return json({ error: "Invalid login request." }, 400);
  }

  if (!credentials || typeof credentials !== "object") {
    return json({ error: "Invalid login request." }, 400);
  }

  const body = credentials as Record<string, unknown>;
  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (username.length > 128 || password.length > 256) {
    return json({ error: "Invalid username or password." }, 401);
  }

  const expectedUser = process.env.ADMIN_LOGIN_USERNAME;
  const expectedPassword = process.env.ADMIN_LOGIN_PASSWORD;
  if (!expectedUser || !expectedPassword) {
    console.error("Admin credentials are not configured.");
    return json({ error: "Administrator login is unavailable." }, 503);
  }

  if (!equalsSecret(username, expectedUser) || !equalsSecret(password, expectedPassword)) {
    return json({ error: "Invalid username or password." }, 401);
  }

  const response = json({ authenticated: true });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: await createAdminSession(),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: ADMIN_SESSION_SECONDS
  });
  return response;
}

export async function DELETE(request: NextRequest) {
  if (!sameOrigin(request)) return json({ error: "Request not allowed." }, 403);
  const response = json({ authenticated: false });
  response.cookies.set({
    name: ADMIN_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0
  });
  return response;
}
