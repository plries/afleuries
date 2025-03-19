"use client";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { Heading, ContactForm, Doodle } from "../../";
import { useContact } from "./useContact";

export const Contact = () => {
  const hook = useContact();

  return (
    <section
      id="contact"
      className="w-[calc(100% + 24px)] relative col-span-full col-start-1 -mx-6 mt-16 grid scroll-mt-24 grid-cols-4 gap-3 bg-tan-30 px-6 py-16 md:grid-cols-8 md:gap-4 md:rounded-b-xl lg:grid-cols-12"
    >
      <Doodle scrollPosition={{ y: hook.y, rotate: hook.rotate }}>
        {AFLEURIES_ILLUSTRATED.DOODLES.SPARKLES()}
      </Doodle>
      <div className="col-span-full lg:col-span-10 lg:col-start-2">
        <Heading>{AFLEURIES_ILLUSTRATED.CONTACT.HEADING}</Heading>
      </div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full md:col-span-8 md:col-start-1 lg:col-span-4 lg:col-start-2"
      >
        <p className="font-medium">
          {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.ONE}
        </p>
        <p>{AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.TWO}</p>
      </motion.div>
      <ContactForm />
    </section>
  );
};
