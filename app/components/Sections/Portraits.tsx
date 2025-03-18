import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./components";
import { ButtonTab } from "..";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { HowItWorks } from "./HowItWorks";
import { Doodle } from "../";

export const Portraits = () => {
    const guestButtonRef = useRef<HTMLButtonElement>(null);
    const brideGroomButtonRef = useRef<HTMLButtonElement>(null);
    const [isGuestPortrait, setIsGuestPortrait] = useState(true);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

    const togglePortraits = (guestPortrait = false): unknown => {
        setIsGuestPortrait(guestPortrait);
        
        const activeButtonClass = ['bg-tan-30', 'border-b-blue-100', '!text-blue-100'];

        if (guestPortrait) {
            guestButtonRef.current?.classList.add(...activeButtonClass);
            brideGroomButtonRef.current?.classList.remove(...activeButtonClass);
        } else {
            guestButtonRef.current?.classList.remove(...activeButtonClass);
            brideGroomButtonRef.current?.classList.add(...activeButtonClass);
        }
        return {};
    };

    return (
        <section className="col-span-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 relative gap-3 md:gap-4">
            <Doodle
                scrollPosition={{ y, rotate}}
                rightPosition
                bottomPosition
            >
                {AFLEURIES_ILLUSTRATED.DOODLES.HEARTS()}
            </Doodle>
            <div className="col-span-full lg:col-start-2 lg:col-span-10 mt-16">
                <SectionHeading>
                    {AFLEURIES_ILLUSTRATED.PORTRAITS.HEADING}
                </SectionHeading>
            </div>
            <motion.p
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full lg:col-start-2 lg:col-span-10"
            >
                {AFLEURIES_ILLUSTRATED.PORTRAITS.PARAGRAPH}
            </motion.p>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex flex-row col-span-full lg:col-start-2 lg:col-span-10 md:gap-2"
            >
                <ButtonTab
                    ref={guestButtonRef as React.RefObject<HTMLButtonElement>}
                    additionalClasses={{ button: ['bg-tan-30', 'border-b-blue-100', '!text-blue-100'] }}
                    onClick={() => togglePortraits(true)}
                >
                    {AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS.GUEST_PORTRAIT}
                </ButtonTab>
                <ButtonTab
                    ref={brideGroomButtonRef as React.RefObject<HTMLButtonElement>}
                    onClick={() => togglePortraits(false)}
                > 
                    {AFLEURIES_ILLUSTRATED.PORTRAITS.BUTTONS.BRIDE_GROOM}
                </ButtonTab>
            </motion.div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full lg:col-start-2 lg:col-span-10 grid place-items-center aspect-video"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isGuestPortrait ? "guest-portrait" : "bride-groom"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="aspect-video lg:max-w-5xl"
                    >
                        <Image
                            src={
                                isGuestPortrait 
                                    ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.SRC
                                    : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.SRC
                            }
                            width={1920}
                            height={1080}
                            alt={
                                isGuestPortrait
                                    ? AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.GUEST_PORTRAIT.ALT
                                    : AFLEURIES_ILLUSTRATED.PORTRAITS.IMAGES.BRIDE_GROOM.ALT
                            }
                            className="w-full h-full shadow-lg rounded-2xl object-cover border-[1px] border-tan-50"
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
                <HowItWorks 
                    stepsKey={isGuestPortrait ? "GUEST_PORTRAIT" : "BRIDE_GROOM"}
                />
            </motion.div>
        </section>
    );
};
