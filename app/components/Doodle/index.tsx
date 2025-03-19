import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";
import { DoodlePropTypes } from "./types";

export const Doodle = ({
    scrollPosition,
    rightPosition,
    bottomPosition,
    children,
}: DoodlePropTypes ) => {
    return (
        <motion.div
            style={scrollPosition}
            className={`hidden lg:block absolute z-20 pointer-events-none drop-shadow-xl
            ${rightPosition ? "right-6" : "left-6"}
            ${bottomPosition ? "bottom-6" : "top-6"}
            `}
        >
            <motion.div
                transition={MOTION_CONFIG.TRANSITION}
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}