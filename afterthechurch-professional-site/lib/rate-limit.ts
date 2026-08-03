import { createHash } from "crypto";
import type { NextRequest } from "next/server";
import { createAdminClient } from "./supabase-admin";

function requestFingerprint(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const agent = request.headers.get("user-agent") || "unknown";
  const secret = process.env.RATE_LIMIT_SECRET;

  if (!secret && process.env.NODE_ENV === "production") {
    throw new Error("RATE_LIMIT_SECRET is required in production.");
  }

  return createHash("sha256")
    .update(`${ip}|${agent}|${secret || "local-development"}`)
    .digest("hex");
}

export async function checkRateLimit(
  request: NextRequest,
  event: string,
  limit: number,
  windowSeconds: number
) {
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc("check_rate_limit", {
    p_event: event,
    p_ip_hash: requestFingerprint(request),
    p_limit: limit,
    p_window_seconds: windowSeconds
  });

  if (error) {
    console.error("Rate limit error:", error.message);
    return false;
  }

  return data === true;
}
