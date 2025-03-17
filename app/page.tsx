"use client";
import { NavBar } from "./components";
import { Hero, Experience, Services, Contact } from "./components/Sections/";
import { ReactLenis } from 'lenis/react'
import { AFLEURIES_ILLUSTRATED } from "./const";

export default function Home() {
  return (
    <ReactLenis root>
      <img 
        src="/CanvasTexture.jpg"
        className="
          w-screen h-screen
          fixed pointer-events-none top-0 left-0 z-50
          mix-blend-multiply opacity-50
        "
      />
      <div className="
        grid place-items-center scroll-smooth
        w-screen
        bg-tan-20
        md:bg-gradient-to-b md:from-green-10 md:to-green-100
        md:p-12 lg:p-14
        ">
        <NavBar />
        <main className="
        max-w-screen-xl w-full h-full pt-12 md:pt-6 lg:pt-[5.5rem]
        px-6 pb-0
        grid auto-rows-min grid-cols-4 md:grid-cols-8 lg:grid-cols-12
        gap-3 md:gap-4
        bg-tan-20 shadow-2xl
        md:rounded-3xl
        ">
          <Hero />
          <Experience />
          <Services />
          <Contact />
        </main>
        <footer className="max-w-screen-xl w-full bg-tan-30 p-4 pt-0 md:bg-transparent md:pt-4">
          <p className="text-center text-sm text-tan-50 md:text-tan-100">
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[0]}
            <a
              href={AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.LINK}
              className="text-sm font-medium hover:underline text-tan-50 md:text-tan-100 
            ">
              {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.TEXT}
            </a>
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[1]}
            <a
              href={AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.LINK}
              className="text-sm font-medium hover:underline text-tan-50 md:text-tan-100
            ">
              {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.TEXT}
            </a>
            {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[2]}
          </p>
        </footer>
      </div>
    </ReactLenis>
  );
}
