import React from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";

export const Paragraph = ({ children }: { children: string[] }) => {
  return (
    <motion.p
      initial={MOTION_CONFIG.INITIAL}
      whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
    >
      {children.map((child, index) =>
        index % 2 === 0 ? (
          <React.Fragment key={index}>{child}</React.Fragment>
        ) : (
          <span key={index} className="font-medium">
            {child}
          </span>
        ),
      )}
    </motion.p>
  );
};
