import Image from "next/image";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";

export const Hero = () => {
  return (
    <section className="contents">
      <div className="-order-1 col-span-4 col-start-1 flex items-center justify-center md:col-span-8 lg:-order-2 lg:col-span-5 lg:col-start-2 lg:p-6">
        <motion.h1
          initial={MOTION_CONFIG.INITIAL}
          whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="flex flex-col gap-2 text-center font-instrument text-4xl text-blue-100 md:gap-4 md:text-5xl"
        >
          <Image
            src={AFLEURIES_ILLUSTRATED.HERO.LOGO.SRC}
            width={0}
            height={0}
            alt={AFLEURIES_ILLUSTRATED.HERO.LOGO.ALT}
            aria-hidden="true"
            className="mt-12 w-60 md:w-96 lg:mt-0"
          />
          <span className="sr-only">{AFLEURIES_ILLUSTRATED.HERO.LOGO.ALT}</span>
          {AFLEURIES_ILLUSTRATED.HERO.LOGO.HEADING}
        </motion.h1>
      </div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="-order-2 col-span-4 col-start-1 md:col-span-8 lg:-order-1 lg:col-span-5"
      >
        <Image
          src={AFLEURIES_ILLUSTRATED.HERO.IMAGE.SRC}
          width={100}
          height={0}
          alt={AFLEURIES_ILLUSTRATED.HERO.IMAGE.ALT}
          className="w-full"
        />
      </motion.div>
    </section>
  );
};
