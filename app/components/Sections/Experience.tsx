"use client";
import { SectionHeading, SectionParagraph } from "./components/";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { motion } from "framer-motion";
import Image from "next/image";

export const Experience = () => {
    return (
        <section className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 order-3
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
            ">
            <div className="
                flex flex-col gap-4
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
            ">
                <SectionHeading>
                    {AFLEURIES_ILLUSTRATED.EXPERIENCE.HEADING}
                </SectionHeading>
                <div className="flex flex-col gap-3">
                    <SectionParagraph>
                        {AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.ONE}
                    </SectionParagraph>
                    <SectionParagraph>
                        {AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.TWO}
                    </SectionParagraph>
                </div>
            </div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="
                aspect-square rounded-3xl overflow-hidden
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
            ">
                <Image
                    src="/images/Experience.jpg"
                    width={1920}
                    height={1080}
                    alt="Experience"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    )
}