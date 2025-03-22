"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const useMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return {
    isOpen,
    pathname,
    toggleMenu,
  };
};
