import { Linking, StyleSheet, Text } from "react-native";
import { ActionButton, Card } from "@/components/Atoms";
import { Screen } from "@/components/Screen";
import { SITE_URL } from "@/lib/config";
import { colors } from "@/lib/theme";

export default function AboutScreen() {
  return (
    <Screen
      title="About Afterthechurch"
      subtitle="Support for people harmed in churches — during involvement, while leaving, and after leaving."
    >
      <Card>
        <Text style={styles.heading}>Our approach</Text>
        <Text style={styles.body}>
          We centre survivor choice, privacy, safeguarding and practical education. We do
          not require people to adopt a particular religious or non-religious conclusion in
          order to belong here.
        </Text>
      </Card>

      <Card>
        <Text style={styles.heading}>Built around four promises</Text>
        <Text style={styles.body}>• You choose how much to read or share.</Text>
        <Text style={styles.body}>• Sensitive material should be signposted.</Text>
        <Text style={styles.body}>• Survivor submissions are moderated before publication.</Text>
        <Text style={styles.body}>• Privacy choices should be understandable and reversible where possible.</Text>
      </Card>

      <ActionButton secondary onPress={() => Linking.openURL(`${SITE_URL}/about`)}>
        Visit Afterthechurch.com
      </ActionButton>
      <ActionButton secondary onPress={() => Linking.openURL(`${SITE_URL}/terms`)}>
        Terms
      </ActionButton>
      <ActionButton secondary onPress={() => Linking.openURL(`${SITE_URL}/privacy`)}>
        Privacy policy
      </ActionButton>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: { color: colors.text, fontSize: 19, fontWeight: "800" },
  body: { color: colors.muted, fontSize: 14, lineHeight: 22 }
});
