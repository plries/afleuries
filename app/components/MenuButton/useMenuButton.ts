"use client";
import { useState } from "react";

export const useMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleMenu,
  };
};
