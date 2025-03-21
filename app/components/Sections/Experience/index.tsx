import Image from "next/image";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { Heading, Paragraph, Doodle } from "../../";
import { useExperience } from "./useExperience";

export const Experience = () => {
  const hook = useExperience();

  return (
    <section className="w-[calc(100% + 24px)] relative col-span-full col-start-1 -mx-6 mt-16 grid grid-cols-4 gap-3 bg-tan-30 px-6 py-16 shadow-sm md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Doodle scrollPosition={{ y: hook.y, rotate: hook.rotate }}>
        <span>{AFLEURIES_ILLUSTRATED.DOODLES.SQUIGGLES()}</span>
      </Doodle>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-4 col-start-1 aspect-square md:col-span-8 lg:col-span-5 lg:col-start-2"
      >
        <Image
          src={AFLEURIES_ILLUSTRATED.EXPERIENCE.IMAGE.SRC}
          width={1920}
          height={1080}
          alt={AFLEURIES_ILLUSTRATED.EXPERIENCE.IMAGE.ALT}
          className="aspect-square h-full w-full rounded-3xl border-[1px] border-tan-50 object-cover shadow-lg"
        />
      </motion.div>
      <div className="col-span-4 col-start-1 flex flex-col gap-4 md:col-span-8 lg:col-span-5">
        <Heading>{AFLEURIES_ILLUSTRATED.EXPERIENCE.HEADING}</Heading>
        <div className="flex flex-col gap-3">
          <Paragraph>
            {AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.ONE}
          </Paragraph>
          <Paragraph>
            {AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.TWO}
          </Paragraph>
        </div>
      </div>
    </section>
  );
};
