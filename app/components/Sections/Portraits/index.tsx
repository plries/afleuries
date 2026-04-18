import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { ButtonTab, Heading, Doodle, Paragraph } from "../../";
import { Steps } from "../";
import { usePortraits } from "./usePortraits";

export const Portraits = () => {
  const hook = usePortraits();

  return (
    <section className="relative col-span-full grid grid-cols-4 gap-3 md:grid-cols-8 md:gap-4 lg:grid-cols-12">
      <Doodle
        scrollPosition={{ y: hook.y, rotate: hook.rotate }}
        rightPosition
        bottomPosition
      >
        {AFLEURIES_ILLUSTRATED.DOODLES.HEARTS()}
      </Doodle>
      <div className="col-span-full mt-16 lg:col-span-10 lg:col-start-2">
        <Heading>{AFLEURIES_ILLUSTRATED.PORTRAITS.HEADING}</Heading>
      </div>
      <div className="col-span-full flex flex-col gap-3 lg:col-span-10 lg:col-start-2">
        <Paragraph>{AFLEURIES_ILLUSTRATED.PORTRAITS.PARAGRAPHS.ONE}</Paragraph>
        <Paragraph>{AFLEURIES_ILLUSTRATED.PORTRAITS.PARAGRAPHS.TWO}</Paragraph>
      </div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-4 lg:col-span-10 lg:col-start-2"
      >
        {AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS.map((button) => (
          <ButtonTab
            key={button}
            additionalClasses={hook.getStyles(button)}
            onClick={() => hook.setTab(button)}
          >
            {button}
          </ButtonTab>
        ))}
      </motion.div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full lg:col-span-10 lg:col-start-2 relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={hook.tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video lg:max-w-5xl"
          >
            <Image
              src={AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.find(img => img.KEY === hook.tab)?.SRC || ""}
              alt={AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.find(img => img.KEY === hook.tab)?.KEY || ""}
              width={1920}
              height={1080}
              className="border-tan-60 h-full w-full rounded-2xl border-[1px] object-cover shadow-md"
            />
          </motion.div>

          <motion.p
            key={hook.tab+'desc'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="col-span-full mt-4 mx-auto rounded-2xl border-[1px] border-tan-40 bg-tan-30 p-4 shadow-md lg:col-span-10 lg:col-start-2 lg:max-w-5xl md:w-[calc(100%-4rem)] w-full"
          >
            {AFLEURIES_ILLUSTRATED.PORTRAITS.DESCRIPTIONS.find(desc => desc.KEY === hook.tab)?.TEXT || ""}
          </motion.p>
        </AnimatePresence>
      </motion.div>
      <motion.div
        key={hook.tab}
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="contents"
      >
        {/* <Steps
          stepsKey={hook.tab}
        /> */}
      </motion.div>
    </section>
  );
};
