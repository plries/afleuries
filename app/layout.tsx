"use client";
import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Footer, NavBar, Modal } from "./components";
import { AFLEURIES_ILLUSTRATED } from "./const";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

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
  viewport: "width=device-width, initial-scale=1.0",
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfYafYqAAAAAK1HewEyOuicqfv65TE1ufQpRIJ_">
      <html lang="en">
        <ReactLenis root>
          <body
            className={`${instrumentSerif.variable} ${geologica.variable} min-h-screen antialiased`}
          >
            <Modal />
            <Image
              src={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.SRC}
              className="pointer-events-none fixed left-0 top-0 z-50 min-h-screen w-screen opacity-30 mix-blend-multiply"
              alt={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.ALT}
              height={1400}
              width={1409}
            />
            <div className="relative grid min-h-screen w-screen auto-rows-min place-items-center scroll-smooth bg-tan-20 md:bg-gradient-to-b md:from-green-10 md:to-green-100 md:p-12 lg:p-14">
              <div className="absolute top-0 hidden min-h-full w-full bg-[image:url('/DoodleBG.svg')] bg-center bg-repeat-y opacity-5 md:block"></div>
              <NavBar />
              <main
                id="top"
                className="z-10 grid h-full w-full max-w-screen-xl auto-rows-min grid-cols-4 gap-3 bg-tan-20 px-6 pb-0 pt-12 shadow-none md:grid-cols-8 md:gap-4 md:rounded-3xl md:pt-6 md:shadow-2xl lg:grid-cols-12 lg:pt-[5.5rem]"
              >
                {children}
              </main>
              <Footer />
            </div>
          </body>
        </ReactLenis>
      </html>
    </GoogleReCaptchaProvider>
  );
}
