"use client";
import { ReactLenis } from "lenis/react";
import { AFLEURIES_ILLUSTRATED } from "./const";
import { Header } from "./components";
import { Hero, Experience, Portraits, Contact } from "./components/Sections/";

export default function Home() {
  return (
    <ReactLenis root>
      <img
        src="/CanvasTexture.jpg"
        className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen opacity-50 mix-blend-multiply"
      />
      <div className="grid w-screen place-items-center scroll-smooth bg-tan-20 md:bg-gradient-to-b md:from-green-10 md:to-green-100 md:p-12 lg:p-14">
        <Header />
        <main className="grid h-full w-full max-w-screen-xl auto-rows-min grid-cols-4 gap-3 bg-tan-20 px-6 pb-0 pt-12 shadow-2xl md:grid-cols-8 md:gap-4 md:rounded-3xl md:pt-6 lg:grid-cols-12 lg:pt-[5.5rem]">
          <Hero />
          <Experience />
          <Portraits />
          <Contact />
        </main>
        <footer className="w-full max-w-screen-xl bg-tan-30 p-4 pt-0 md:bg-transparent md:pt-4">
          <p className="text-center text-sm text-tan-50 md:text-tan-100">
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[0]}
            <a
              href={AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.LINK}
              className="text-sm font-medium text-tan-50 hover:underline md:text-tan-100"
            >
              {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.TEXT}
            </a>
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[1]}
            <a
              href={
                AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.LINK
              }
              className="text-sm font-medium text-tan-50 hover:underline md:text-tan-100"
            >
              {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.TEXT}
            </a>
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[2]}
          </p>
        </footer>
      </div>
    </ReactLenis>
  );
}
