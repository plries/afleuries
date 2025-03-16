"use client";
import { IconButton } from "../";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const [isLastVisible, setIsLastVisible] = useState(false);
    
    useEffect(() => {
        setIsFirstVisible(true);
        if (AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.STEPS[stepsKey].length <= 1) {
            setIsLastVisible(true);
        }
    }, [stepsKey]);

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
                    className="grid col-span-full auto-rows-min grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4"
                onAnimationComplete={() => {
                    if (scrollRef.current) {
                        setIsFirstVisible(scrollRef.current.scrollLeft <= 10);
                        const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= 
                            scrollRef.current.scrollWidth - 10;
                        setIsLastVisible(isAtEnd);
                    }
                }}
            >
                <div ref={scrollContainerRef} className="relative -mx-6 mb-14 md:mb-0 lg:mr-0] col-span-full">
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-tan-20 from-0% to-transparent to-5% z-10 hidden md:block lg:hidden"></div>
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-transparent from-95% to-tan-20 to-100% z-10 hidden md:block lg:hidden"></div>
                    <div
                        className="absolute z-10 w-full h-full
                        left-0 -bottom-12 md:bottom-0
                        flex flex-row justify-between px-6
                        items-end md:items-center
                        lg:p-0 lg:max-w-4xl left-1/2 -translate-x-1/2
                    ">
                        <IconButton
                            onClick={scrollPrev}
                            additionalClasses={{ 
                                button: isFirstVisible 
                                    ? ["!text-tan-40", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                    : [] 
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <IconButton
                            onClick={scrollNext}
                            additionalClasses={{ 
                                button: isLastVisible 
                                    ? ["!text-tan-40", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                    : [] 
                            }}
                        >
                            <ChevronRight />
                        </IconButton>
                    </div>
                    <div
                        ref={scrollRef}
                        className="relative flex flex-row overflow-x-scroll scroll-smooth no-scrollbar lg:overflow-x-auto snap-x snap-mandatory"
                        onScroll={() => {
                            if (scrollRef.current) {
                                setIsFirstVisible(scrollRef.current.scrollLeft <= 10);
                                const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= 
                                    scrollRef.current.scrollWidth - 10;
                                setIsLastVisible(isAtEnd);
                            }
                        }}
                    >
                        {AFLEURIES_ILLUSTRATED.SERVICES.HOW_IT_WORKS.STEPS[stepsKey].map((step, index, array) => (
                            <div
                                ref={index === 0 ? firstItemRef : index === array.length - 1 ? lastItemRef : null}
                                key={index}
                                className="flex flex-col items-center snap-start min-w-full
                                px-6 md:px-24 lg:px-40 mb-4
                                md:last:mr-80 lg:last:mr-0
                            ">
                                <div className="min-h-full max-w-lg md:max-w-xl lg:max-w-2xl
                                    bg-tan-30 border-[1px] border-tan-40 rounded-2xl shadow-lg p-4
                                    flex flex-col gap-4
                                ">
                                    <div className="flex flex-row items-center gap-2">
                                        <div className="aspect-square h-10">
                                            <step.ICON.SRC />
                                        </div>
                                        <h4 className="font-instrument font-normal text-3xl lg:text-4xl">
                                            {step.HEADING}
                                        </h4>
                                    </div>
                                    <p>{step.PARAGRAPH}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};