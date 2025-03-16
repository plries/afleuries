"use client";
import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { metadata } from "./metadata";
import Head from "next/head";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
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
    <GoogleReCaptchaProvider reCaptchaKey="6LctE_YqAAAAAI1bAbf4fh5fPOvff91AEN8pk_Wa">
      <html lang="en">
        <Head>
          <meta name="description" content={metadata.description ?? ""} />
          <meta name="author" content={(Array.isArray(metadata.authors) ? metadata.authors.join(", ") : metadata.authors?.name) ?? ""} />
          <meta name="keywords" content={(Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords) ?? ""} />
          <meta name="description" content={metadata.description?.toString() ?? ""} />
          <meta property="og:description" content={metadata.description ?? ""} />
          <title>{metadata.title?.toString()}</title>
        </Head>
        <body
          className={`${instrumentSerif.variable} ${geologica.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </GoogleReCaptchaProvider>
  );
}
