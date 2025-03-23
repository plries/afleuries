import React from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";
import { ParagraphPropTypes } from "./types";

export const Paragraph = ({ children }: ParagraphPropTypes) => {
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
          <strong key={index} className="font-medium">
            {child}
          </strong>
        ),
      )}
    </motion.p>
  );
};
