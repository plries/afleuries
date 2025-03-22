"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (pathname !== "/" && window.location.hash !== "#contact") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return {
    isOpen,
    pathname,
    toggleMenu,
  };
};
