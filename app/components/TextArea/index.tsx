"use client";
import { TextAreaPropTypes } from "./types";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";

export const TextArea = ({
  label,
  name,
  description,
  htmlFor,
}: TextAreaPropTypes) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const labelBgRef = useRef<HTMLDivElement>(null);

  const moveLabel = (forceMove = false) => {
    if (!textAreaRef.current || !labelRef.current || !labelBgRef.current)
      return;
    const labelClasses = ["!translate-y-0", "!text-tan-100", "!text-sm"];
    const labelBgClasses = ["!bg-tan-30"];

    if (forceMove || textAreaRef.current.value !== "") {
      labelRef.current.classList.add(...labelClasses);
      labelBgRef.current.classList.add(...labelBgClasses);
    } else {
      labelRef.current.classList.remove(...labelClasses);
      labelBgRef.current.classList.remove(...labelBgClasses);
    }
  };

  return (
    <motion.div
      initial={MOTION_CONFIG.INITIAL}
      whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
      transition={MOTION_CONFIG.TRANSITION}
      className="flex flex-col gap-1"
    >
      <div className="relative">
        <div
          ref={labelBgRef}
          className="absolute -top-3 z-10 mx-2 h-fit w-fit bg-transparent px-2 transition-all duration-300 ease-in-out"
        >
          <label
            ref={labelRef}
            htmlFor={htmlFor}
            className="pointer-events-none z-10 inline-block origin-left translate-y-7 text-base text-tan-90 transition-all duration-300 ease-in-out md:translate-y-[1.9rem]"
          >
            {label}
          </label>
        </div>
        <textarea
          ref={textAreaRef}
          id={htmlFor}
          name={name}
          className="border-tan-60 h-48 w-full resize-none rounded-lg border-[1px] bg-tan-30 p-4 text-base font-light transition-all duration-300 ease-in-out focus:shadow-md focus:outline-blue-10 md:text-lg"
          onFocus={() => {
            moveLabel(true);
          }}
          onBlur={() => {
            moveLabel();
          }}
        ></textarea>
      </div>
      {description && (
        <p className="text-sm md:text-base">
          {description[0]}
          <strong className="font-medium">{description[1]}</strong>
          {description[2]}
        </p>
      )}
    </motion.div>
  );
};
