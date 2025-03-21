"use client";
import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export const usePortraits = () => {
  const guestButtonRef = useRef<HTMLButtonElement>(null);
  const brideGroomButtonRef = useRef<HTMLButtonElement>(null);
  const [isGuestPortrait, setIsGuestPortrait] = useState(true);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const togglePortraits = (guestPortrait = false): unknown => {
    setIsGuestPortrait(guestPortrait);

    const activeButtonClass = [
      "bg-tan-30",
      "border-b-blue-100",
      "!text-blue-100",
      "shadow-md",
    ];

    if (guestPortrait) {
      guestButtonRef.current?.classList.add(...activeButtonClass);
      brideGroomButtonRef.current?.classList.remove(...activeButtonClass);
    } else {
      guestButtonRef.current?.classList.remove(...activeButtonClass);
      brideGroomButtonRef.current?.classList.add(...activeButtonClass);
    }
    return {};
  };

  return {
    guestButtonRef,
    brideGroomButtonRef,
    isGuestPortrait,
    y,
    rotate,
    togglePortraits,
  };
};
