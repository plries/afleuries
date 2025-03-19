"use client";
import { InputPropTypes } from "./types";
import { useRef } from "react";
import { motion } from "framer-motion";
import { MOTION_CONFIG } from "../../const";

export const Input = ({ label, name, description, htmlFor }: InputPropTypes) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const labelBgRef = useRef<HTMLDivElement>(null);

    const moveLabel = (forceMove = false) => {
        if (!inputRef.current || !labelRef.current || !labelBgRef.current) return;
        const labelClasses = ["!translate-y-0", "!scale-100", "!text-tan-100", "!opacity-100"];
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
            className="w-full flex flex-col gap-2"
        >
            <div className="relative">
                <div 
                    ref={labelBgRef}
                    className="
                    absolute mx-2 z-10 px-2 rounded-full h-fit w-fit
                    -top-2.5 md:-top-3.5
                    bg-transparent transition-all duration-300 ease-in-out
                ">
                    <label
                        ref={labelRef}
                        htmlFor={htmlFor}
                        className="
                        my-0.5 z-10 transition-all duration-300 ease-in-out opacity-60 pointer-events-none
                        translate-y-6 md:translate-y-7 text-[#272727bf]
                        text-base md:text-lg inline-block
                        origin-left scale-90
                    ">
                        {label}
                    </label>
                </div>
                <input
                    ref={inputRef}
                    id={htmlFor}
                    type={htmlFor === "email" ? "email" : htmlFor === "datetime-local" ? "datetime-local" : "text"}
                    name={name}
                    required
                    className="
                    px-4 pb-3 pt-4 w-full h-14 md:h-[60px] rounded-lg border-[1px] border-[#27272740] bg-tan-20 focus:outline-blue-10
                    text-base md:text-lg font-light appearance-none
                    "
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
