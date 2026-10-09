import type { Metadata } from "next";
import ContactChat from "@/components/ContactChat";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us — Private Chat",
  description: "Start a private conversation with the AfterTheChurch team without creating an account.",
  robots: { index: false, follow: false }
};

export default function ContactPage() {
  return <ContactChat />;
}
