"use client"; 
import Image from "next/image";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";

export const Hero = () => {
    return (
        <section className="contents">
            <div className="
                flex justify-center items-center -order-1 lg:-order-2
                col-start-1 col-span-4 md:col-span-8 lg:col-start-2 lg:col-span-5 lg:p-6
                ">
                    <motion.h1
                        initial={MOTION_CONFIG.INITIAL}
                        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                        transition={MOTION_CONFIG.TRANSITION}
                        className="
                        flex flex-col gap-2 md:gap-4
                        font-instrument text-blue-100
                        text-center text-4xl md:text-5xl
                    ">
                    <Image 
                        src="/AfleuriesLogoTitle.svg"
                        width={0}
                        height={0}
                        alt=""
                        aria-hidden="true"
                        className="
                        mt-12 lg:mt-0
                        w-60 md:w-96
                    "/>
                    <span className="sr-only">
                        {AFLEURIES_ILLUSTRATED.HERO.SR_ONLY}
                    </span>
                        {AFLEURIES_ILLUSTRATED.HERO.HEADING}
                    </motion.h1>
            </div>  
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="-order-2 lg:-order-1
                col-start-1 col-span-4 md:col-span-8 lg:col-span-5

            ">
                <Image
                    src="/AfleuriesIllustration.svg"
                    width={100}
                    height={0}
                    alt={AFLEURIES_ILLUSTRATED.HERO.ALT}
                    className="w-full"
                />
            </motion.div>
            
        </section>
    )
}