import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton, Card, Pill } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { colors } from "@/lib/theme";

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.brandRow}>
        <View style={styles.brandMark} />
        <Text style={styles.brand}>Afterthechurch</Text>
      </View>

      <View style={styles.hero}>
        <Pill>Survivor-led • choice-first</Pill>
        <Text style={styles.heroTitle}>A safer place after church harm.</Text>
        <Text style={styles.heroBody}>
          Read at your own pace, find practical support, or share your experience
          without being forced to reveal your identity.
        </Text>
      </View>

      <Card>
        <Text style={styles.cardTitle}>You stay in control</Text>
        <Text style={styles.cardText}>
          Stories use content warnings and privacy choices. You decide what to read,
          what to share and when to leave.
        </Text>
        <ActionButton onPress={() => router.push("/(tabs)/stories")}>Browse stories</ActionButton>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Share without creating a public profile</Text>
        <Text style={styles.cardText}>
          Written submissions go to moderation first. Your church name and author name
          can both be withheld from publication.
        </Text>
        <ActionButton secondary onPress={() => router.push("/(tabs)/submit")}>
          Share your story
        </ActionButton>
      </Card>

      <Text style={styles.note}>
        Afterthechurch is a survivor-support and educational project. It is not an
        emergency or clinical service.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 12 },
  brandMark: { width: 12, height: 12, borderRadius: 99, backgroundColor: colors.accent },
  brand: { color: colors.text, fontSize: 18, fontWeight: "800", letterSpacing: 0.2 },
  hero: { gap: 14, paddingVertical: 14 },
  heroTitle: {
    color: colors.text,
    fontSize: 42,
    lineHeight: 46,
    letterSpacing: -1.3,
    fontWeight: "900"
  },
  heroBody: { color: colors.muted, fontSize: 17, lineHeight: 25 },
  cardTitle: { color: colors.text, fontSize: 20, lineHeight: 25, fontWeight: "800" },
  cardText: { color: colors.muted, fontSize: 15, lineHeight: 22 },
  note: { color: colors.muted, fontSize: 12, lineHeight: 18, textAlign: "center", marginTop: 4 }
});
