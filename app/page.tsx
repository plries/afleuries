"use client";
import { NavBar } from "./components";
import { Hero, Experience, Services, Contact } from "./components/Sections/";
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root>
      <div className="
        grid place-items-center scroll-smooth
        w-screen bg-gradient-to-b from-tan-40 to-tan-50 
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
