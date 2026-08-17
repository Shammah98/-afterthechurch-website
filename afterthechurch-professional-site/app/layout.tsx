import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExit from "@/components/QuickExit";
import { siteStarfieldDataUri } from "@/lib/site-starfield";
import "./globals.css";
import "./cosmic-theme.css";
import "./cosmic-visibility.css";
import "./footer-polish.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  display: "swap"
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "AfterTheChurch | Practical support after religious harm",
    template: "%s | AfterTheChurch"
  },
  description:
    "Religiously neutral educational resources, survivor stories and privacy-controlled story submission for people affected by harm in religious settings.",
  openGraph: {
    title: "AfterTheChurch",
    description: "Practical support for people rebuilding life after religious harm.",
    type: "website",
    images: ["/images/group-field.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterTheChurch",
    description: "Practical support for people rebuilding life after religious harm.",
    images: ["/images/group-field.jpg"]
  }
};

const starfieldCss = `
body::before {
  background-color: #000 !important;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.14)),
    url("${siteStarfieldDataUri}") !important;
  background-size: cover, cover !important;
  background-position: center, center !important;
  background-repeat: no-repeat, no-repeat !important;
}
`;

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: starfieldCss }} />
      </head>
      <body>
        <a className="skipLink" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <QuickExit />
      </body>
    </html>
  );
}
