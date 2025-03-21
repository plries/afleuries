"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../const";
import { Heading, Paragraph } from "../components";

export default function About() {
  return (
    <div className="col-span-full grid grid-cols-4 gap-3 pb-16 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <div className="col order-2 col-span-full flex flex-col gap-3 lg:col-span-5 lg:col-start-2 lg:gap-4">
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
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="order-1 col-span-full lg:order-2 lg:col-span-5 lg:col-start-7"
      >
        <Image
          src="/AfleuriesIllustration.svg"
          width={100}
          height={0}
          alt={AFLEURIES_ILLUSTRATED.HERO.ALT}
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
