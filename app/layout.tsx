"use client";
import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { metadata } from "./metadata";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfYafYqAAAAAK1HewEyOuicqfv65TE1ufQpRIJ_">
      <html lang="en">
        <head>
          <meta name="description" content={metadata.description ?? ""} />
          <meta
            name="author"
            content={
              (Array.isArray(metadata.authors)
                ? metadata.authors.join(", ")
                : metadata.authors?.name) ?? ""
            }
          />
          <meta
            name="keywords"
            content={
              (Array.isArray(metadata.keywords)
                ? metadata.keywords.join(", ")
                : metadata.keywords) ?? ""
            }
          />
          <meta
            name="description"
            content={metadata.description?.toString() ?? ""}
          />
          <meta
            property="og:description"
            content={metadata.description ?? ""}
          />
          <title>{metadata.title?.toString()}</title>
        </head>
        <body
          className={`${instrumentSerif.variable} ${geologica.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </GoogleReCaptchaProvider>
  );
}
