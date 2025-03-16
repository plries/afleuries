"use client";
import { NavBar } from "./components";
import { Hero, Experience, Services, Contact } from "./components/Sections/";
import { ReactLenis } from 'lenis/react'

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
        bg-gradient-to-b from-green-10 to-green-100
        md:p-12 lg:p-14
      ">
        <div className="
        max-w-screen-xl w-full h-full
        px-6 py-0
        grid auto-rows-min grid-cols-4 md:grid-cols-8 lg:grid-cols-12
        gap-3 md:gap-4
        bg-tan-20 shadow-2xl
        md:rounded-xl
        ">
          <NavBar />
          <Hero />
          <Experience />
          <Services />
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
}
