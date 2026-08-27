"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;
let rememberSessionFallback = false;
const memoryAuthStorage = new Map<string, string>();

function readStorage(storage: Storage | null, key: string) {
  if (!storage) return null;
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(storage: Storage | null, key: string, value: string) {
  if (!storage) return false;
  try {
    storage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function removeStorage(storage: Storage | null, key: string) {
  if (!storage) return;
  try {
    storage.removeItem(key);
  } catch {
    // Some browsers can block storage entirely in private/restricted contexts.
  }
}

function browserStorage(kind: "local" | "session") {
  if (typeof window === "undefined") return null;
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

const authStorage = {
  getItem(key: string) {
    if (typeof window === "undefined") return memoryAuthStorage.get(key) ?? null;

    const localValue = readStorage(browserStorage("local"), key);
    if (localValue !== null) return localValue;

    const sessionValue = readStorage(browserStorage("session"), key);
    if (sessionValue !== null) return sessionValue;

    return memoryAuthStorage.get(key) ?? null;
  },
  setItem(key: string, value: string) {
    if (typeof window === "undefined") {
      memoryAuthStorage.set(key, value);
      return;
    }

    const local = browserStorage("local");
    const session = browserStorage("session");
    const remember =
      readStorage(local, "atc-remember-session") === "true" || rememberSessionFallback;
    const selected = remember ? local : session;
    const other = remember ? session : local;

    removeStorage(other, key);

    if (writeStorage(selected, key, value)) {
      memoryAuthStorage.delete(key);
    } else {
      memoryAuthStorage.set(key, value);
    }
  },
  removeItem(key: string) {
    if (typeof window !== "undefined") {
      removeStorage(browserStorage("local"), key);
      removeStorage(browserStorage("session"), key);
    }
    memoryAuthStorage.delete(key);
  }
};

export function getBrowserSupabase() {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Missing public Supabase environment variables.");
  }

  client = createClient(url, anonKey, {
    auth: {
      storage: authStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  return client;
}

export function setRememberSession(remember: boolean) {
  rememberSessionFallback = remember;
  if (typeof window === "undefined") return;

  const local = browserStorage("local");
  if (!writeStorage(local, "atc-remember-session", String(remember))) {
    rememberSessionFallback = remember;
  }
}

export async function getAdminAccessToken(timeoutMs = 6000) {
  try {
    const sessionPromise = getBrowserSupabase().auth.getSession().then(({ data, error }) => {
      if (error) throw error;
      const session = data.session;
      if (!session || session.user.is_anonymous) return null;
      return session.access_token;
    });

    const timeoutPromise = new Promise<null>((resolve) => {
      window.setTimeout(() => resolve(null), timeoutMs);
    });

    return await Promise.race([sessionPromise, timeoutPromise]);
  } catch {
    return null;
  }
}

export async function getOrCreatePublicSession() {
  setRememberSession(true);

  const supabase = getBrowserSupabase();
  const { data: existing, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) throw sessionError;
  if (existing.session) return existing.session;

  const { data, error } = await supabase.auth.signInAnonymously();

  if (error) throw error;
  if (!data.session) {
    throw new Error("Private submission access could not be prepared.");
  }

  return data.session;
}
