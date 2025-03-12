"use client";
import { SectionHeading } from "./components";
import { IconButton } from "..";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "@/public";

export const HowItWorks = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

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
    <section className="contents">
        <div
            className="
            order-5 col-span-full mt-4
            flex flex-col gap-4
        ">
        <div className="flex flex-row items-center justify-between">
            <SectionHeading
                children={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.HEADING}
            />
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex flex-row gap-2
                lg:hidden
            ">
                <IconButton
                    onClick={() => {scrollPrev()}}
                >
                    <ChevronLeft />
                </IconButton>
                <IconButton
                    onClick={() => {scrollNext()}}
                >
                    <ChevronRight />
                </IconButton>
            </motion.div>
        </div>
        <div className="relative -mx-6 lg:mr-0">
            <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r 
                from-tan-20 from-0% to-transparent to-5% z-10
                hidden md:block lg:hidden
                ">
            </div>
            <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r 
                from-transparent from-95% to-tan-20 to-100% z-10
                hidden md:block lg:hidden
                ">
            </div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                ref={scrollRef}
                className="relative flex flex-row
                overflow-x-scroll scroll-smooth no-scrollbar lg:overflow-x-auto
                snap-x snap-mandatory
            ">
            {AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.STEPS.map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 snap-start 
                    pb-2 pl-6 pr-6 md:pr-0
                    min-w-[calc(100%/1)] md:min-w-[calc(100%/1.5)] lg:min-w-0 lg:w-full
                    md:last:mr-80 lg:last:mr-0
                ">
                    <div className="flex flex-row items-center gap-3">
                        <div
                            className={`aspect-square h-12
                            ${step.ICON.COLOUR}
                        `}>
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
        </div>
    </section>
    );
};
