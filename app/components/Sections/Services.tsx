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
        
        const activeButtonClass = ['bg-tan-30', 'border-b-blue-100', 'text-blue-100'];

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
        <section className="order-4 col-span-full mt-16 flex flex-col gap-4">
            <SectionHeading>
                {AFLEURIES_ILLUSTRATED.SERVICES.HEADING}
            </SectionHeading>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex flex-row w-[calc(100%+3rem)] overflow-scroll no-scrollbar -mx-6"
            >
                <ButtonTab
                    ref={guestButtonRef as React.RefObject<HTMLButtonElement>}
                    additionalClasses={{ button: ['bg-tan-30', 'border-b-blue-100', 'text-blue-100', 'ml-6'] }}
                    onClick={() => toggleServices(true)}
                >
                    {AFLEURIES_ILLUSTRATED.SERVICES.BUTTONS.GUEST_PORTRAIT}
                </ButtonTab>
                <ButtonTab
                    ref={brideGroomButtonRef as React.RefObject<HTMLButtonElement>}
                    additionalClasses={{ button: ['mr-6'] }}
                    onClick={() => toggleServices(false)}
                > 
                    {AFLEURIES_ILLUSTRATED.SERVICES.BUTTONS.BRIDE_GROOM}
                </ButtonTab>
            </motion.div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
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
                className="w-full aspect-video"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isGuestPortrait ? "guest-portrait" : "bride-groom"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full h-full aspect-video"
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
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={isGuestPortrait ? "guest-portrait" : "bride-groom"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="order-5 col-span-full mt-4 flex flex-col gap-4"
                >
                    <HowItWorks 
                        stepsKey={isGuestPortrait ? "GUEST_PORTRAIT" : "BRIDE_GROOM"}
                    />
                </motion.div>
            </AnimatePresence>
        </section>
    );
};
