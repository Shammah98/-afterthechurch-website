import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, type Session } from "@supabase/supabase-js";
import { AppState } from "react-native";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./config";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  }
);

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

let sessionPromise: Promise<Session> | null = null;

export async function getOrCreateAnonymousSession(): Promise<Session> {
  const { data: existing, error: existingError } = await supabase.auth.getSession();
  if (existingError) throw existingError;
  if (existing.session) return existing.session;

  if (!sessionPromise) {
    sessionPromise = (async () => {
      const { data, error } = await supabase.auth.signInAnonymously();
      if (error) throw error;
      if (!data.session) throw new Error("A private submission session could not be created.");
      return data.session;
    })().finally(() => {
      sessionPromise = null;
    });
  }

  return sessionPromise;
}
