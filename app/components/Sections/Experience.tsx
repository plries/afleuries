"use client";
import { SectionHeading, SectionParagraph } from "./components/";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { motion } from "framer-motion";

export const Experience = () => {
    return (
        <section className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 order-3
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
        ">
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="
                aspect-video bg-tan-20 rounded-3xl
                col-span-full
            ">
            </motion.div>
            <div className="
                flex flex-col gap-4
                col-span-full
            ">
                <SectionHeading 
                    children={AFLEURIES_ILLUSTRATED.EXPERIENCE.HEADING}
                />
                <div className="flex flex-col gap-3">
                    <SectionParagraph
                        children={AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.ONE}
                    />
                    <SectionParagraph
                        children={AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.TWO}
                    />
                </div>
            </div>
        </section>
    )
}