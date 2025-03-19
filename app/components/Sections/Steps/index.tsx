"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AFLEURIES_ILLUSTRATED } from "../../../const";
import { IconButton } from "../../";
import { ChevronRight, ChevronLeft } from "@/public";
import { StepsPropTypes } from "./types";
import { useSteps } from "./useSteps";

export const Steps = ({ stepsKey }: StepsPropTypes) => {
    const hook = useSteps({ stepsKey });

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
                    if (hook.scrollRef.current) {
                        hook.setIsFirstVisible(hook.scrollRef.current.scrollLeft <= 10);
                        const isAtEnd = hook.scrollRef.current.scrollLeft + hook.scrollRef.current.clientWidth >= 
                        hook.scrollRef.current.scrollWidth - 10;
                        hook.setIsLastVisible(isAtEnd);
                    }
                }}
            >
                <div ref={hook.scrollContainerRef} className="relative -mx-6 mb-14 md:mb-0 lg:mr-0] col-span-full">
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-tan-20 from-0% to-transparent to-5% z-10 hidden md:block lg:hidden"></div>
                    <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-transparent from-95% to-tan-20 to-100% z-10 hidden md:block lg:hidden"></div>
                    <div
                        className="absolute z-10 w-full pointer-events-none
                        left-0 -bottom-10 lg:bottom-1/2 lg:translate-y-1/2
                        flex flex-row justify-between items-end px-6
                        left-1/2 -translate-x-1/2
                        lg:p-0 lg:px-6 lg:max-w-[unset]
                        grid col-span-full grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4
                    ">
                        <div className="h-full w-full flex items-end lg:items-center justify-start col-start-1 lg:justify-end pointer-events-auto">
                            <IconButton
                                onClick={hook.scrollPrev}
                                additionalClasses={{
                                    button: hook.isFirstVisible 
                                        ? ["!text-tan-40", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                        : []
                                }}
                            >
                                <ChevronLeft />
                            </IconButton>
                        </div>
                        <div className="h-full w-full flex items-end lg:items-center justify-end col-start-4 md:col-start-8 lg:col-start-12 lg:justify-start">
                            <IconButton
                                onClick={hook.scrollNext}
                                additionalClasses={{ 
                                    button: hook.isLastVisible 
                                        ? ["!text-tan-40", "scale-90", "pointer-events-none", "hover:scale-100", "hover:shadow-md"] 
                                        : hook.isFirstVisible ? ["animate-pulse-scale"] : []
                                }}
                            >
                                <ChevronRight />
                            </IconButton>
                        </div>
                    </div>
                    <div
                        ref={hook.scrollRef}
                        className="relative flex flex-row overflow-x-scroll scroll-smooth no-scrollbar lg:overflow-x-auto snap-x snap-mandatory"
                        onScroll={() => {
                            if (hook.scrollRef.current) {
                                hook.setIsFirstVisible(hook.scrollRef.current.scrollLeft <= 10);
                                const isAtEnd = hook.scrollRef.current.scrollLeft + hook.scrollRef.current.clientWidth >= 
                                hook.scrollRef.current.scrollWidth - 10;
                                hook.setIsLastVisible(isAtEnd);
                            }
                        }}
                    >
                        {AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.STEPS[stepsKey].map((step, index, array) => (
                            <div
                                ref={index === 0 ? hook.firstItemRef : index === array.length - 1 ? hook.lastItemRef : null}
                                key={index}
                                className="flex flex-col items-center snap-start min-w-full
                                px-6 mb-4
                                md:last:mr-80 lg:last:mr-0
                            ">
                                <div className="w-full min-h-full grid col-span-full grid-cols-4 lg:grid-cols-12 gap-3 md:gap-4">
                                    <div className="min-h-full lg:max-w-5xl
                                        bg-tan-30 border-[1px] border-tan-40 rounded-2xl shadow-lg p-4
                                        flex flex-col gap-4
                                        col-span-full lg:col-start-2 lg:col-span-10
                                    ">
                                        <div className="flex flex-row items-center gap-3">
                                            <div className="aspect-square h-11">
                                                <step.ICON.SRC />
                                            </div>
                                            <h4 className="font-instrument font-normal text-3xl lg:text-4xl">
                                                {step.HEADING}
                                            </h4>
                                        </div>
                                        <p>{step.PARAGRAPH}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};