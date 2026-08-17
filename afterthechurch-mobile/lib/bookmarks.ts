import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "afterthechurch:saved-story-ids";

export async function getSavedStoryIds(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export async function isStorySaved(id: string) {
  return (await getSavedStoryIds()).includes(id);
}

export async function toggleStorySaved(id: string) {
  const current = await getSavedStoryIds();
  const next = current.includes(id)
    ? current.filter((item) => item !== id)
    : [...current, id];
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
  return next.includes(id);
}
