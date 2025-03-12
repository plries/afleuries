import type { Metadata } from "next";
import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afleuries Illustration Station",
  description: "Live digital portraits, drawn on the spot and projected in real time for everyone to see. It’s live art in action—plus a keepsake to take home!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${geologica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
