"use client";
import { SectionHeading } from "./components";
import { IconButton } from "../";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "@/public";

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
        <>
            <div className="flex flex-row items-center justify-between">
                <SectionHeading>
                    {AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.HEADING}
                </SectionHeading>
            </div>
            <div ref={scrollContainerRef} className="relative -mx-6 mb-14 md:mb-0 lg:mr-0]">
                <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-tan-20 from-0% to-transparent to-5% z-10 hidden md:block lg:hidden"></div>
                <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-transparent from-95% to-tan-20 to-100% z-10 hidden md:block lg:hidden"></div>
                <motion.div
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="absolute z-10 w-full h-full
                    left-0 -bottom-14 md:bottom-0
                    flex flex-row justify-between px-6
                    items-end md:items-center
                ">
                    <IconButton
                        onClick={scrollPrev}
                        additionalClasses={{ button: [`${isFirstInView ? "text-[#27272740] scale-90 pointer-events-none hover:scale-100 hover:shadow-md" : ""}`] }}
                    >
                        <ChevronLeft />
                    </IconButton>
                    <IconButton
                        onClick={scrollNext}
                        additionalClasses={{ button: [`${isLastInView ? "text-[#27272740] scale-90 pointer-events-none hover:scale-100 hover:shadow-md" : ""}`] }}
                    >
                        <ChevronRight />
                    </IconButton>
                </motion.div>
                <motion.div
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
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
                </motion.div>
            </div>
        </>
    );
};
