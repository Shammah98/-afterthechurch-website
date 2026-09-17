import type { ReactNode } from "react";
import styles from "./safety.module.css";

export default function SafetyLayout({ children }: { children: ReactNode }) {
  return <div className={styles.scope}>{children}</div>;
}
