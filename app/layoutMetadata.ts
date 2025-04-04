import { Metadata } from "next";
import type { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://afleuries.com"),
  alternates: {
    canonical: "/",
  },
  title: "Afleuries Illustrated: Live Portrait Art",
  publisher: "Abigail Aries",
  description:
    "Live digital portraits, drawn on the spot and projected in real time for everyone to see. It’s live art in action—plus a keepsake to take home!",
  authors: { name: "Abigail Aries" },
  keywords: [
    "abigail aries",
    "abby aries",
    "afleuries",
    "afleuries illustrated",
    "live portraits",
    "live portrait art",
    "live event artist",
    "digital portraits",
    "custom illustrations",
    "live sketching",
    "event entertainment",
    "wedding artist",
    "personalized art",
    "guest portraits",
    "interactive art",
    "digital art",
    "live drawing",
    "event keepsakes",
    "wedding keepsakes",
    "custom event souvenirs",
    "illustration artist",
    "live art projection",
    "party entertainment",
    "corporate event artist",
    "creative event services",
    "digital illustration",
    "artistic experiences",
    "unique event ideas",
    "event personalization",
    "memorable event gifts",
    "event photography alternative",
    "live painting",
    "modern event trends",
    "creative wedding ideas",
    "digital caricatures",
    "portrait artist for events",
  ],
  openGraph: {
    title: "Afleuries Illustrated: Live Portrait Art",
    description:
      "Live digital portraits, drawn on the spot and projected in real time for everyone to see. It’s live art in action—plus a keepsake to take home!",
    images: [
      {
        url: "https://afleuries.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Afleuries Illustrated: Live Portrait Art",
      },
    ],
    siteName: "Afleuries Illustrated: Live Portrait Art",
    url: "https://afleuries.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}