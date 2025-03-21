"use client";
import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Head, Footer, NavBar, PageWrapper } from "./components";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfYafYqAAAAAK1HewEyOuicqfv65TE1ufQpRIJ_">
      <html lang="en">
        <Head />
        <ReactLenis root>
          <body
            className={`${instrumentSerif.variable} ${geologica.variable} antialiased`}
          >
            <img
              src={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.SRC}
              className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen opacity-50 mix-blend-multiply"
              alt={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.ALT}
            />
            <div className="relative grid w-screen place-items-center scroll-smooth bg-tan-20 md:bg-gradient-to-b md:from-green-10 md:to-green-100 md:p-12 lg:p-14">
              <div className="absolute top-0 hidden min-h-full w-full bg-[image:url('/doodletexture.jpg')] opacity-[2%] md:block"></div>
              <NavBar />
                <PageWrapper>{children}</PageWrapper>
              <Footer />
            </div>
          </body>
        </ReactLenis>
      </html>
    </GoogleReCaptchaProvider>
  );
}
