import { useCallback, useEffect, useState } from "react";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Card, Pill } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { fetchStories } from "@/lib/api";
import { colors } from "@/lib/theme";
import type { PublicStory } from "@/lib/types";

export default function StoriesScreen() {
  const [stories, setStories] = useState<PublicStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async (refresh = false) => {
    refresh ? setRefreshing(true) : setLoading(true);
    setError("");
    try {
      setStories(await fetchStories());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Stories could not be loaded.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Screen
      title="Survivor stories"
      subtitle="You choose how deep to go. Open only what feels useful today."
      refreshing={refreshing}
      onRefresh={() => load(true)}
    >
      {loading ? <ActivityIndicator color={colors.accent} size="large" /> : null}
      {error ? (
        <Card>
          <Text style={styles.errorTitle}>We could not load the library.</Text>
          <Text style={styles.body}>{error}</Text>
        </Card>
      ) : null}
      {!loading && !error && stories.length === 0 ? (
        <Card>
          <Text style={styles.cardTitle}>The library is quiet right now.</Text>
          <Text style={styles.body}>Approved stories will appear here after moderation.</Text>
        </Card>
      ) : null}
      {stories.map((story) => (
        <Pressable
          key={story.id}
          accessibilityRole="button"
          onPress={() => router.push(`/story/${story.id}`)}
        >
          {({ pressed }) => (
            <Card style={pressed ? styles.pressed : undefined}>
              <View style={styles.metaRow}>
                <Pill>{story.contentIntensity} intensity</Pill>
                <Text style={styles.meta}>{story.readingMinutes} min read</Text>
              </View>
              <Text style={styles.cardTitle}>{story.title}</Text>
              <Text style={styles.identity}>
                {story.authorDisplay} • {story.churchDisplay}
              </Text>
              <Text style={styles.body} numberOfLines={4}>
                {story.shortSummary}
              </Text>
              {story.contentWarnings.length ? (
                <Text style={styles.warning}>
                  Content notes: {story.contentWarnings.join(", ")}
                </Text>
              ) : null}
            </Card>
          )}
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.82 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 },
  meta: { color: colors.muted, fontSize: 12 },
  cardTitle: { color: colors.text, fontSize: 20, lineHeight: 25, fontWeight: "800" },
  identity: { color: colors.gold, fontSize: 13, lineHeight: 18, fontWeight: "700" },
  body: { color: colors.muted, fontSize: 15, lineHeight: 22 },
  warning: { color: colors.warning, fontSize: 12, lineHeight: 18 },
  errorTitle: { color: colors.text, fontSize: 17, fontWeight: "800" }
});
