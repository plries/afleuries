"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";

export const Heading = ({ children }: { children: string }) => {
  return (
    <motion.h3
      initial={MOTION_CONFIG.INITIAL}
      whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="font-instrument text-4xl font-normal md:text-5xl"
    >
      {children}
    </motion.h3>
  );
};
