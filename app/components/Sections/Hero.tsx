"use client"; 
import Image from "next/image";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="contents">
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
            ">
                <Image
                    src="/AfleuriesIllustration.svg"
                    width={100}
                    height={0}
                    alt={AFLEURIES_ILLUSTRATED.HERO.ALT}
                    className="w-full"
                />
            </motion.div>
            <div className="
                flex justify-center
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
                ">
                    <motion.h1
                        initial={MOTION_CONFIG.INITIAL}
                        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                        transition={MOTION_CONFIG.TRANSITION}
                        className="
                        font-instrument flex flex-wrap flex-row gap-3
                        text-7xl md:text-9xl lg:text-[9rem]
                    ">
                    <Image 
                        src="/AfleuriesLogoColour.svg"
                        width={0}
                        height={0}
                        alt=""
                        aria-hidden="true"
                        className="
                        mt-12 lg:mt-0
                        w-60 md:w-80
                    "/>
                    <span className="sr-only">
                        {AFLEURIES_ILLUSTRATED.HERO.HEADING}
                    </span>
                    </motion.h1>
            </div>  
        </section>
    )
}