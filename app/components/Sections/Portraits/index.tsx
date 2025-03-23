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
        className="col-span-full flex flex-row lg:col-span-10 lg:col-start-2"
      >
        <ButtonTab
          ref={hook.guestButtonRef as React.RefObject<HTMLButtonElement>}
          additionalClasses={[
            "bg-tan-30",
            "border-b-blue-100",
            "!text-blue-100",
            "shadow-md",
          ]}
          onClick={() => hook.togglePortraits(true)}
        >
          {AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS.GUEST_PORTRAIT}
        </ButtonTab>
        <ButtonTab
          ref={hook.brideGroomButtonRef as React.RefObject<HTMLButtonElement>}
          onClick={() => hook.togglePortraits(false)}
        >
          {AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS.BRIDE_GROOM}
        </ButtonTab>
      </motion.div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="col-span-full aspect-video lg:col-span-10 lg:col-start-2"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={hook.isGuestPortrait ? "guest-portrait" : "bride-groom"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="aspect-video lg:max-w-5xl"
          >
            <Image
              src={
                hook.isGuestPortrait
                  ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.SRC
                  : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.SRC
              }
              width={1920}
              height={1080}
              alt={
                hook.isGuestPortrait
                  ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.ALT
                  : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.ALT
              }
              className="border-tan-60 h-full w-full rounded-2xl border-[1px] object-cover shadow-md"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="contents"
      >
        <Steps
          stepsKey={hook.isGuestPortrait ? "GUEST_PORTRAIT" : "BRIDE_GROOM"}
        />
      </motion.div>
    </section>
  );
};
