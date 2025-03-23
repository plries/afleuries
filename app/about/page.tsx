"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../const";
import { Heading, Paragraph, SocialLink } from "../components";
import { EmailIcon, InstagramIcon } from "@/public";

export default function About() {
  return (
    <div className="col-span-full grid grid-cols-4 gap-3 pb-16 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full lg:col-span-5 lg:col-start-2"
      >
        <Image
          src={AFLEURIES_ILLUSTRATED.ABOUT.IMAGE.SRC}
          width={1080}
          height={1350}
          alt={AFLEURIES_ILLUSTRATED.ABOUT.IMAGE.ALT}
          className="w-full rounded-3xl border-[1px] border-tan-50 object-cover shadow-md"
        />
      </motion.div>
      <div className="col col-span-full flex flex-col gap-3 lg:col-span-5 lg:col-start-7 lg:gap-4">
        <Heading>{AFLEURIES_ILLUSTRATED.ABOUT.HEADING}</Heading>
        <div className="flex h-full flex-col justify-between gap-3">
          <div className="flex h-full flex-col gap-3">
            <Paragraph>{AFLEURIES_ILLUSTRATED.ABOUT.PARAGRAPHS.ONE}</Paragraph>
            <Paragraph>{AFLEURIES_ILLUSTRATED.ABOUT.PARAGRAPHS.TWO}</Paragraph>
            <motion.p
              initial={MOTION_CONFIG.INITIAL}
              whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
              transition={MOTION_CONFIG.TRANSITION}
            >
              {AFLEURIES_ILLUSTRATED.ABOUT.PARAGRAPHS.THREE}
            </motion.p>
          </div>
          <motion.div
            initial={MOTION_CONFIG.INITIAL}
            whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className="flex flex-row flex-wrap gap-3"
          >
            {AFLEURIES_ILLUSTRATED.ABOUT.SOCIALS.map((social, index) => (
              <React.Fragment key={index}>
                <SocialLink href={social.HREF} icon={<social.ICON />}>
                  {social.NAME}
                </SocialLink>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
