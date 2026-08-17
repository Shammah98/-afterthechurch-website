import type { PropsWithChildren } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle
} from "react-native";
import { colors, radius } from "@/lib/theme";

export function Card({
  children,
  style
}: PropsWithChildren<{ style?: ViewStyle | ViewStyle[] }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Pill({ children }: PropsWithChildren) {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillText}>{children}</Text>
    </View>
  );
}

export function ActionButton({
  children,
  onPress,
  secondary = false,
  disabled = false,
  style
}: PropsWithChildren<{
  onPress: () => void;
  secondary?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}>) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        secondary && styles.buttonSecondary,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
        style
      ]}
    >
      <Text style={[styles.buttonText, secondary && styles.buttonTextSecondary]}>
        {children}
      </Text>
    </Pressable>
  );
}

export function Label({ children, style }: PropsWithChildren<{ style?: TextStyle }>) {
  return <Text style={[styles.label, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 18,
    gap: 10
  },
  pill: {
    alignSelf: "flex-start",
    backgroundColor: colors.surfaceRaised,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  pillText: { color: colors.muted, fontSize: 12, fontWeight: "700" },
  button: {
    minHeight: 50,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.border
  },
  buttonDisabled: { opacity: 0.45 },
  buttonPressed: { opacity: 0.82 },
  buttonText: { color: "#21131A", fontSize: 15, fontWeight: "800" },
  buttonTextSecondary: { color: colors.text },
  label: { color: colors.text, fontSize: 14, fontWeight: "700" }
});
