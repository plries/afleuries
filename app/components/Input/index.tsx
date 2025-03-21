"use client";
import { InputPropTypes } from "./types";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";

export const Input = ({
  label,
  name,
  description,
  htmlFor,
}: InputPropTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const labelBgRef = useRef<HTMLDivElement>(null);

  const moveLabel = (forceMove = false) => {
    if (!inputRef.current || !labelRef.current || !labelBgRef.current) return;
    const labelClasses = ["!translate-y-0", "!scale-100", "!text-tan-100"];
    const labelBgClasses = ["!bg-tan-30"];

    if (forceMove || inputRef.current.value !== "") {
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
      className="flex w-full flex-col gap-2"
    >
      <div className="relative">
        <div
          ref={labelBgRef}
          className="absolute -top-2.5 z-10 mx-2 h-fit w-fit rounded-full bg-transparent px-2 transition-all duration-300 ease-in-out md:-top-3.5"
        >
          <label
            ref={labelRef}
            htmlFor={htmlFor}
            className="pointer-events-none z-10 my-0.5 inline-block origin-left translate-y-6 scale-90 text-base text-tan-90 transition-all duration-300 ease-in-out md:translate-y-7 md:text-lg"
          >
            {label}
          </label>
        </div>
        <input
          ref={inputRef}
          id={htmlFor}
          type={
            htmlFor === "email"
              ? "email"
              : htmlFor === "datetime-local"
                ? "datetime-local"
                : "text"
          }
          name={name}
          required
          className="h-14 w-full appearance-none rounded-lg border-[1px] border-[#27272740] bg-tan-20 px-4 pb-3 pt-4 text-base font-light focus:outline-blue-10 md:h-[60px] md:text-lg"
          autoComplete="on"
          onFocus={() => moveLabel(true)}
          onBlur={() => moveLabel()}
        />
      </div>
      {description && (
        <p className="text-sm md:text-base">
          {description[0]}
          <span className="font-medium">{description[1]}</span>
          {description[2]}
        </p>
      )}
    </motion.div>
  );
};
