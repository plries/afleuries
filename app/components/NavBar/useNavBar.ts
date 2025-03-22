"use client";
import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

export const useNavBar = () => {
  const { scrollY } = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateSticky = () => {
      setIsSticky(scrollY.get() > 50);
    };

    const removeWidth = scrollY.on("change", updateSticky);
    return () => removeWidth();
  }, [scrollY]);

  useEffect(() => {
    if (pathname !== "/" && window.location.hash !== "#contact") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const maxWidth = isSticky
    ? "max-w-[calc(1280px-3rem)]"
    : "md:max-w-screen-xl";
  const width = isSticky
    ? "w-[calc(100%-3rem)]"
    : "w-[calc(100%-3rem)] md:w-full lg:";

  return {
    maxWidth,
    width,
    pathname,
  };
};
