import { useCallback, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Linking,
  StyleSheet,
  Text,
  View
} from "react-native";
import { ActionButton, Card, Pill } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { fetchStory } from "@/lib/api";
import { isStorySaved, toggleStorySaved } from "@/lib/bookmarks";
import { colors } from "@/lib/theme";
import type { PublicStory } from "@/lib/types";

export default function StoryScreen() {
  const params = useLocalSearchParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [story, setStory] = useState<PublicStory | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError("");
    try {
      const [nextStory, nextSaved] = await Promise.all([
        fetchStory(id),
        isStorySaved(id)
      ]);
      setStory(nextStory);
      setSaved(nextSaved);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The story could not be opened.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator color={colors.accent} size="large" />
      </Screen>
    );
  }

  if (!story || error) {
    return (
      <Screen title="Story unavailable">
        <Card>
          <Text style={styles.body}>{error || "This story could not be found."}</Text>
          <ActionButton secondary onPress={() => load()}>Try again</ActionButton>
        </Card>
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.header}>
        <Pill>{story.contentIntensity} intensity</Pill>
        <Text style={styles.title}>{story.title}</Text>
        <Text style={styles.identity}>
          {story.authorDisplay} • {story.churchDisplay}
        </Text>
        <Text style={styles.meta}>
          {story.readingMinutes} min read{story.countryRegion ? ` • ${story.countryRegion}` : ""}
        </Text>
      </View>

      {story.contentWarnings.length ? (
        <Card style={styles.warningCard}>
          <Text style={styles.warningTitle}>Before you continue</Text>
          <Text style={styles.body}>{story.contentWarnings.join(" • ")}</Text>
          <Text style={styles.small}>You can leave this page at any time.</Text>
        </Card>
      ) : null}

      {story.imageUrl ? (
        <Image source={{ uri: story.imageUrl }} style={styles.image} resizeMode="cover" />
      ) : null}

      <Card>
        <Text style={styles.summaryLabel}>Short version</Text>
        <Text style={styles.body}>{story.shortSummary}</Text>
      </Card>

      {story.storyText ? (
        <View style={styles.storyBodyWrap}>
          <Text style={styles.storyText}>{story.storyText}</Text>
        </View>
      ) : null}

      {story.mediaUrl ? (
        <ActionButton secondary onPress={() => Linking.openURL(story.mediaUrl!)}>
          Open {story.mediaType}
        </ActionButton>
      ) : null}

      <ActionButton
        secondary={saved}
        onPress={async () => setSaved(await toggleStorySaved(story.id))}
      >
        {saved ? "Saved privately on this device" : "Save for later"}
      </ActionButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { gap: 10 },
  title: { color: colors.text, fontSize: 34, lineHeight: 40, fontWeight: "900", letterSpacing: -0.7 },
  identity: { color: colors.gold, fontSize: 14, lineHeight: 20, fontWeight: "700" },
  meta: { color: colors.muted, fontSize: 12 },
  warningCard: { borderColor: colors.warning },
  warningTitle: { color: colors.warning, fontSize: 16, fontWeight: "800" },
  summaryLabel: { color: colors.accentStrong, fontSize: 13, fontWeight: "800", textTransform: "uppercase", letterSpacing: 0.7 },
  body: { color: colors.muted, fontSize: 15, lineHeight: 23 },
  small: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  image: { width: "100%", height: 220, borderRadius: 20, backgroundColor: colors.surface },
  storyBodyWrap: { paddingHorizontal: 4, paddingVertical: 6 },
  storyText: { color: colors.text, fontSize: 17, lineHeight: 28 }
});
