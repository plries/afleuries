import { Instrument_Serif, Geologica } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import { Footer, NavBar, Modal } from "./components";
import { AFLEURIES_ILLUSTRATED } from "./const";
import { metadata } from "./layoutMetadata";
import ReCaptchaProvider from "./ReCaptchaProvider";

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
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${instrumentSerif.variable} ${geologica.variable} min-h-screen antialiased`}
        >
          <ReCaptchaProvider>
            <Modal />
            <Image
              src={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.SRC}
              className="pointer-events-none fixed left-0 top-0 z-50 min-h-screen w-screen opacity-30 mix-blend-multiply"
              alt={AFLEURIES_ILLUSTRATED.CANVAS_TEXTURE.ALT}
              height={1400}
              width={1409}
              tabIndex={-1}
            />
            <div
              className="relative grid min-h-screen w-screen auto-rows-min place-items-center scroll-smooth bg-tan-20 md:bg-gradient-to-b md:from-green-10 md:to-green-100 md:p-12 lg:p-14"
              tabIndex={-1}
            >
              <div className="absolute top-0 hidden min-h-full w-full bg-[image:url('/DoodleBG.svg')] bg-center bg-repeat-y opacity-5 md:block"></div>
              <NavBar />
              <main
                role="main"
                id="top"
                className="z-10 grid h-full w-full max-w-screen-xl auto-rows-min grid-cols-4 gap-3 bg-tan-20 px-6 pb-0 pt-12 shadow-none md:grid-cols-8 md:gap-4 md:rounded-3xl md:pt-6 md:shadow-2xl lg:grid-cols-12 lg:pt-[5.5rem]"
              >
                {children}
                <Analytics />
              </main>
              <Footer />
            </div>
          </ReCaptchaProvider>
        </body>
      </ReactLenis>
    </html>
  );
}

export { metadata };
