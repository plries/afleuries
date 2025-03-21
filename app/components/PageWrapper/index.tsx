"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="z-10 grid h-full w-full max-w-screen-xl auto-rows-min grid-cols-4 gap-3 bg-tan-20 px-6 pb-0 pt-12 shadow-none md:grid-cols-8 md:gap-4 md:rounded-3xl md:pt-6 md:shadow-2xl lg:grid-cols-12 lg:pt-[5.5rem]"
    >
      {children}
    </motion.main>
  );
};
