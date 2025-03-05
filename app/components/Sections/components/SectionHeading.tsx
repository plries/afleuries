"use client";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../../const";

export const SectionHeading = ({ children }: { children: string[] }) => {
    return (
        <motion.h3 
            initial={MOTION_CONFIG.INITIAL}
            whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
            transition={MOTION_CONFIG.TRANSITION}
            className="font-instrument font-normal text-4xl md:text-5xl">
            <span className="italic">
                {children[0]}
            </span>
                {children[1]}
        </motion.h3>
    )
}
