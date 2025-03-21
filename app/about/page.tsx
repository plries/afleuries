"use client";
import { motion } from "motion/react";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../const";
import { Heading, Paragraph } from "../components";

export default function About() {
  return (
    <>
      <div className="col-span-full flex flex-col gap-4 pb-16 lg:col-span-10 lg:col-start-2">
        <Heading>{AFLEURIES_ILLUSTRATED.ABOUT.HEADING}</Heading>
        <div className="flex flex-col gap-3">
          <Paragraph>{AFLEURIES_ILLUSTRATED.ABOUT.PARAGRAPHS.ONE}</Paragraph>
          <motion.p
            initial={MOTION_CONFIG.INITIAL}
            whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
          >
            {AFLEURIES_ILLUSTRATED.ABOUT.PARAGRAPHS.TWO}
          </motion.p>
        </div>
      </div>
    </>
  );
}
