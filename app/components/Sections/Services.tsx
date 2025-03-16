import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./components";
import { ButtonTab } from "../";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { HowItWorks } from "./HowItWorks";

export const Services = () => {
    const guestButtonRef = useRef<HTMLButtonElement>(null);
    const brideGroomButtonRef = useRef<HTMLButtonElement>(null);
    const [isGuestPortrait, setIsGuestPortrait] = useState(true);

    const toggleServices = (guestPortrait = false): unknown => {
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
        <section className="contents">
            <div className="col-span-full">
                <SectionHeading>
                    {AFLEURIES_ILLUSTRATED.SERVICES.HEADING}
                </SectionHeading>
            </div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex flex-row col-span-full md:gap-2"
            >
                <ButtonTab
                    ref={guestButtonRef as React.RefObject<HTMLButtonElement>}
                    additionalClasses={{ button: ['bg-tan-30', 'border-b-blue-100', '!text-blue-100'] }}
                    onClick={() => toggleServices(true)}
                >
                    {AFLEURIES_ILLUSTRATED.SERVICES.BUTTONS.GUEST_PORTRAIT}
                </ButtonTab>
                <ButtonTab
                    ref={brideGroomButtonRef as React.RefObject<HTMLButtonElement>}
                    onClick={() => toggleServices(false)}
                > 
                    {AFLEURIES_ILLUSTRATED.SERVICES.BUTTONS.BRIDE_GROOM}
                </ButtonTab>
            </motion.div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full"
            >
                <AnimatePresence mode="wait">
                    <motion.p
                        key={isGuestPortrait ? "guest-portrait" : "bride-groom"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isGuestPortrait
                            ? AFLEURIES_ILLUSTRATED.SERVICES.PARAGRAPH.GUEST_PORTRAIT
                            : AFLEURIES_ILLUSTRATED.SERVICES.PARAGRAPH.BRIDE_GROOM}
                    </motion.p>
                </AnimatePresence>
            </motion.div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full lg:col-start-3 lg:col-span-8 grid place-items-center my-4"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isGuestPortrait ? "guest-portrait" : "bride-groom"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="aspect-video max-w-lg md:max-w-xl lg:max-w-2xl"
                    >
                        <Image
                            src={
                                isGuestPortrait 
                                    ? AFLEURIES_ILLUSTRATED.SERVICES.IMAGES.GUEST_PORTRAIT.SRC
                                    : AFLEURIES_ILLUSTRATED.SERVICES.IMAGES.BRIDE_GROOM.SRC
                            }
                            width={1920}
                            height={1080}
                            alt={
                                isGuestPortrait
                                    ? AFLEURIES_ILLUSTRATED.SERVICES.IMAGES.GUEST_PORTRAIT.ALT
                                    : AFLEURIES_ILLUSTRATED.SERVICES.IMAGES.BRIDE_GROOM.ALT
                            }
                            className="w-full h-full shadow-lg rounded-2xl object-cover"
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
