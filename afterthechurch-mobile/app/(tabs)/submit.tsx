import { useMemo, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { ActionButton, Card, Label } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { submitWrittenStory } from "@/lib/api";
import { colors, radius } from "@/lib/theme";
import type { PrivacyLevel } from "@/lib/types";

const privacyOptions: { value: PrivacyLevel; title: string; note: string }[] = [
  { value: "public", title: "Public identity", note: "Your name and church can appear." },
  { value: "anonymous_church", title: "Hide church", note: "Your name can appear; church is withheld." },
  { value: "anonymous_author", title: "Hide my name", note: "Church can appear; author is anonymous." },
  { value: "fully_anonymous", title: "Fully anonymous", note: "Both author and church are withheld." }
];

export default function SubmitScreen() {
  const [title, setTitle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [churchName, setChurchName] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [shortSummary, setShortSummary] = useState("");
  const [storyText, setStoryText] = useState("");
  const [privacyLevel, setPrivacyLevel] = useState<PrivacyLevel>("fully_anonymous");
  const [intensity, setIntensity] = useState<"gentle" | "moderate" | "high">("moderate");
  const [consent, setConsent] = useState(false);
  const [rights, setRights] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const valid = useMemo(
    () =>
      title.trim().length > 0 &&
      displayName.trim().length > 0 &&
      churchName.trim().length > 0 &&
      shortSummary.trim().length > 0 &&
      storyText.trim().length >= 150 &&
      consent &&
      rights,
    [title, displayName, churchName, shortSummary, storyText, consent, rights]
  );

  async function submit() {
    if (!valid || submitting) return;
    setSubmitting(true);
    try {
      await submitWrittenStory({
        title: title.trim(),
        displayName: displayName.trim(),
        churchName: churchName.trim(),
        countryRegion: countryRegion.trim(),
        shortSummary: shortSummary.trim(),
        storyText: storyText.trim(),
        privacyLevel,
        contentIntensity: intensity
      });
      setTitle("");
      setDisplayName("");
      setChurchName("");
      setCountryRegion("");
      setShortSummary("");
      setStoryText("");
      setPrivacyLevel("fully_anonymous");
      setIntensity("moderate");
      setConsent(false);
      setRights(false);
      Alert.alert(
        "Story received",
        "Your submission is now awaiting moderation. Nothing is published automatically."
      );
    } catch (err) {
      Alert.alert(
        "Could not submit",
        err instanceof Error ? err.message : "Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen
      title="Share your story"
      subtitle="Nothing is published automatically. You choose what identifying information can appear."
    >
      <Card>
        <Text style={styles.noticeTitle}>Privacy first</Text>
        <Text style={styles.body}>
          We still ask for a name and church below so moderators can understand your
          submission. Your selected privacy level controls what the public sees.
        </Text>
      </Card>

      <Field label="Story title" value={title} onChangeText={setTitle} maxLength={120} />
      <Field label="Your name or chosen name" value={displayName} onChangeText={setDisplayName} maxLength={80} />
      <Field label="Church or group" value={churchName} onChangeText={setChurchName} maxLength={160} />
      <Field label="Country / region (optional)" value={countryRegion} onChangeText={setCountryRegion} maxLength={100} />

      <View style={styles.group}>
        <Label>Publication privacy</Label>
        {privacyOptions.map((option) => (
          <Pressable
            key={option.value}
            onPress={() => setPrivacyLevel(option.value)}
            style={[
              styles.choice,
              privacyLevel === option.value && styles.choiceSelected
            ]}
          >
            <View style={styles.radioOuter}>
              {privacyLevel === option.value ? <View style={styles.radioInner} /> : null}
            </View>
            <View style={styles.choiceTextWrap}>
              <Text style={styles.choiceTitle}>{option.title}</Text>
              <Text style={styles.choiceNote}>{option.note}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.group}>
        <Label>Content intensity</Label>
        <View style={styles.segmentRow}>
          {(["gentle", "moderate", "high"] as const).map((value) => (
            <Pressable
              key={value}
              onPress={() => setIntensity(value)}
              style={[styles.segment, intensity === value && styles.segmentSelected]}
            >
              <Text style={[styles.segmentText, intensity === value && styles.segmentTextSelected]}>
                {value}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Field
        label="Short summary"
        value={shortSummary}
        onChangeText={setShortSummary}
        maxLength={650}
        multiline
        minHeight={110}
      />
      <Field
        label="Your story (minimum 150 characters)"
        value={storyText}
        onChangeText={setStoryText}
        maxLength={40000}
        multiline
        minHeight={240}
      />
      <Text style={styles.counter}>{storyText.length} characters</Text>

      <CheckRow
        checked={consent}
        onPress={() => setConsent((value) => !value)}
        text="I consent to Afterthechurch reviewing this submission for possible publication."
      />
      <CheckRow
        checked={rights}
        onPress={() => setRights((value) => !value)}
        text="This is my own account, or I have the right to submit the material I have included."
      />

      <ActionButton disabled={!valid || submitting} onPress={submit}>
        {submitting ? "Submitting…" : "Send for moderation"}
      </ActionButton>
      <Text style={styles.small}>
        You can stop at any time. If you are not ready to submit, simply leave this screen.
      </Text>
    </Screen>
  );
}

function Field({
  label,
  value,
  onChangeText,
  maxLength,
  multiline = false,
  minHeight
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  maxLength: number;
  multiline?: boolean;
  minHeight?: number;
}) {
  return (
    <View style={styles.group}>
      <Label>{label}</Label>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        placeholderTextColor={colors.muted}
        selectionColor={colors.accent}
        style={[styles.input, multiline && { minHeight: minHeight || 120 }]}
      />
    </View>
  );
}

function CheckRow({ checked, onPress, text }: { checked: boolean; onPress: () => void; text: string }) {
  return (
    <Pressable onPress={onPress} style={styles.checkRow}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <Text style={styles.checkText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  group: { gap: 9 },
  noticeTitle: { color: colors.accentStrong, fontSize: 17, fontWeight: "800" },
  body: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  input: {
    minHeight: 50,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    color: colors.text,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15
  },
  choice: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 14,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface
  },
  choiceSelected: { borderColor: colors.accent, backgroundColor: colors.surfaceRaised },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2
  },
  radioInner: { width: 10, height: 10, borderRadius: 99, backgroundColor: colors.accent },
  choiceTextWrap: { flex: 1, gap: 3 },
  choiceTitle: { color: colors.text, fontSize: 15, fontWeight: "800" },
  choiceNote: { color: colors.muted, fontSize: 13, lineHeight: 18 },
  segmentRow: { flexDirection: "row", gap: 8 },
  segment: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center"
  },
  segmentSelected: { backgroundColor: colors.accent, borderColor: colors.accent },
  segmentText: { color: colors.muted, fontSize: 12, fontWeight: "800", textTransform: "capitalize" },
  segmentTextSelected: { color: "#21131A" },
  counter: { color: colors.muted, fontSize: 12, marginTop: -10 },
  checkRow: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface
  },
  checkboxChecked: { backgroundColor: colors.accent, borderColor: colors.accent },
  checkmark: { color: "#21131A", fontWeight: "900" },
  checkText: { flex: 1, color: colors.muted, fontSize: 13, lineHeight: 20 },
  small: { color: colors.muted, fontSize: 12, lineHeight: 18, textAlign: "center" }
});
