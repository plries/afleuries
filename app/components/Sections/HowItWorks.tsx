"use client";
import { SectionHeading } from "./components";
import { IconButton } from "../";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "@/public";
import { AnimatePresence } from "framer-motion";

interface HowItWorksProps {
    stepsKey: "GUEST_PORTRAIT" | "BRIDE_GROOM";
}

export const HowItWorks = ({ stepsKey }: HowItWorksProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const firstItemRef = useRef<HTMLDivElement>(null);
    const lastItemRef = useRef<HTMLDivElement>(null);

    const isFirstInView = useInView(firstItemRef, { amount: 0.1 });
    const isLastInView = useInView(lastItemRef, { amount: 0.1 });

    const scrollNext = () => {
        if (scrollRef.current) {
            const stepWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
            scrollRef.current.scrollBy({ left: stepWidth, behavior: "smooth" });
        }
    };
    
    const scrollPrev = () => {
        if (scrollRef.current) {
            const stepWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
            scrollRef.current.scrollBy({ left: -stepWidth, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={stepsKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-row items-center justify-between">
                <h3 
                    className="font-instrument font-normal text-4xl md:text-5xl">
                    <span className="italic">
                        {AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.HEADING[0]}
                    </span>
                        {AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.HEADING[1]}
                </h3>
                </div>
                <div ref={scrollContainerRef} className="relative -mx-6 mb-14 md:mb-0 lg:mr-0]">
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-tan-20 from-0% to-transparent to-5% z-10 hidden md:block lg:hidden"></div>
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-transparent from-95% to-tan-20 to-100% z-10 hidden md:block lg:hidden"></div>
                    <div
                        className="absolute z-10 w-full h-full
                        left-0 -bottom-14 md:bottom-0
                        flex flex-row justify-between px-6
                        items-end md:items-center
                    ">
                        <IconButton
                            onClick={scrollPrev}
                            additionalClasses={{ 
                                button: isFirstInView 
                                    ? ["!text-[#27272740]", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                    : [] 
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <IconButton
                            onClick={scrollNext}
                            additionalClasses={{ 
                                button: isLastInView 
                                    ? ["!text-[#27272740]", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                    : [] 
                            }}
                        >
                            <ChevronRight />
                        </IconButton>
                    </div>
                    <div
                        ref={scrollRef}
                        className="relative flex flex-row overflow-x-scroll scroll-smooth no-scrollbar lg:overflow-x-auto snap-x snap-mandatory"
                    >
                        {AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.STEPS[stepsKey].map((step, index, array) => (
                            <div
                                ref={index === 0 ? firstItemRef : index === array.length - 1 ? lastItemRef : null}
                                key={index}
                                className="flex flex-col gap-2 snap-start min-w-full
                                px-6 md:px-24
                                md:last:mr-80 lg:last:mr-0
                            ">
                                <div className="flex flex-row items-center gap-3">
                                    <div className={`aspect-square h-12 ${step.ICON.COLOUR}`}>
                                        <step.ICON.SRC />
                                    </div>
                                    <h4 className="font-instrument font-normal text-[32px] lg:text-4xl">
                                        {step.HEADING}
                                    </h4>
                                </div>
                                <p>{step.PARAGRAPH}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
