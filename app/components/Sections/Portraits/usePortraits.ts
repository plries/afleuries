"use client";
import { useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { AFLEURIES_ILLUSTRATED } from "@/app/const";

export const usePortraits = () => {
  const [tab, setTab] = useState(AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS[0]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const getStyles = (type: string) => {
    const activeButtonClass = [
      "bg-tan-30",
      "border-b-blue-100",
      "!text-blue-100",
      "shadow-md",
    ];

    if (type === tab) return activeButtonClass;
    return [];
  }

  return {
    tab,
    setTab,

    y,
    rotate,
    getStyles,
  };
};
