import { Linking, StyleSheet, Text } from "react-native";
import { ActionButton, Card } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { SITE_URL } from "@/lib/config";
import { colors } from "@/lib/theme";

const supportLinks = [
  {
    title: "Resource library",
    text: "Reviewed material on church harm, recovery, coercive control and rebuilding life at your own pace.",
    path: "/resources"
  },
  {
    title: "Safety & safeguarding",
    text: "Practical guidance for reducing risk, documenting concerns and deciding what kind of help to seek.",
    path: "/safety"
  },
  {
    title: "Frequently asked questions",
    text: "A calmer place to understand what Afterthechurch is, what it can do and where its limits are.",
    path: "/faq"
  },
  {
    title: "Privacy",
    text: "Read how story information and survivor choices are handled before you submit anything.",
    path: "/privacy"
  }
];

export default function SupportScreen() {
  return (
    <Screen
      title="Support, without pressure"
      subtitle="These resources are options to explore, not instructions you have to follow."
    >
      {supportLinks.map((item) => (
        <Card key={item.path}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.body}>{item.text}</Text>
          <ActionButton secondary onPress={() => Linking.openURL(`${SITE_URL}${item.path}`)}>
            Open resource
          </ActionButton>
        </Card>
      ))}

      <Card style={styles.boundaryCard}>
        <Text style={styles.boundaryTitle}>What this app is not</Text>
        <Text style={styles.body}>
          Afterthechurch does not replace emergency services, legal advice, medical care
          or therapy. The app is designed to help you find information and make your own
          informed choices.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardTitle: { color: colors.text, fontSize: 19, lineHeight: 24, fontWeight: "800" },
  body: { color: colors.muted, fontSize: 14, lineHeight: 21 },
  boundaryCard: { borderColor: colors.gold },
  boundaryTitle: { color: colors.gold, fontSize: 17, fontWeight: "800" }
});
