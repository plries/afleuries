"use client"; 
import Image from "next/image";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { ButtonLink } from "../Button/ButtonLink";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="contents">
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="
                aspect-square bg-tan-30 rounded-3xl 
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
            ">
            </motion.div>
            <div className="
                flex flex-col justify-center
                gap-6 
                col-start-1 col-span-4 md:col-span-8 lg:col-span-6
                ">
                <hgroup>
                    <motion.h1
                        initial={MOTION_CONFIG.INITIAL}
                        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                        transition={MOTION_CONFIG.TRANSITION}
                        className="
                        font-instrument flex flex-wrap flex-row gap-3
                        text-7xl md:text-9xl lg:text-[9rem]
                    ">
                    <Image 
                        src="/LiveWord.svg"
                        width={100}
                        height={0}
                        alt=""
                        aria-hidden="true"
                        className="md:w-36 lg:w-40"
                    />
                    <span className="sr-only">
                        {AFLEURIES_ILLUSTRATED.HERO.LIVE_PORTRAITS[0]}
                    </span>
                    {AFLEURIES_ILLUSTRATED.HERO.LIVE_PORTRAITS[1]}
                    </motion.h1>
                <motion.h2
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="font-geologica text-2xl md:-mt-2"
                >
                    {AFLEURIES_ILLUSTRATED.HERO.SUBHEADING}
                </motion.h2>
                </hgroup>
                <motion.div 
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex flex-row flex-wrap gap-3">
                <ButtonLink
                    children={AFLEURIES_ILLUSTRATED.HERO.CONTACT}
                    additionalClasses={{ button: ['bg-tan-100', 'border-tan-90', 'text-tan-20'] }}
                    onClick={"#contact"}
                />
                <ButtonLink
                    children={AFLEURIES_ILLUSTRATED.HERO.HOW_IT_WORKS}
                    additionalClasses={{ button: ['bg-transparent', 'border-tan-100', 'text-tan-100'] }}
                    onClick={"#how-it-works"}
                />
                </motion.div>
            </div>  
        </section>
    )
}