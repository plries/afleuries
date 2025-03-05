"use client";
import { InputPropTypes } from "./types"
import { useRef } from "react";

export const TextArea = ({
    label,
    description,
    htmlFor,
}: InputPropTypes) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const labelBgRef = useRef<HTMLDivElement>(null);

    const moveLabel = (forceMove = false) => {
        if (!textAreaRef.current || !labelRef.current || !labelBgRef.current) return;
        const labelClasses = ["!translate-y-0", "scale-100"];
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
        <div className="flex flex-col gap-1">
            <div className="relative">
            <div 
                    ref={labelBgRef}
                    className="
                    absolute mx-2 z-10 px-2 rounded-full h-8 w-fit
                    -top-2.5 md:-top-3.5
                    bg-transparent transition-all duration-300 ease-in-out
                ">
                    <label
                        ref={labelRef}
                        htmlFor={htmlFor}
                        className="
                        my-0.5 z-10 transition-all duration-300 ease-in-out text-[#272727be] pointer-events-none
                        translate-y-6 md:translate-y-7
                        text-base md:text-lg inline-block
                        origin-left scale-90
                    ">
                        {label}
                    </label>
                </div>
                <textarea
                    ref={textAreaRef}
                    className="
                    px-4 pb-3 pt-4 rounded-lg border-2 border-[#27272780] bg-transparent focus:outline-blue-10 w-full h-48
                    text-base md:text-lg font-light resize-none
                    "
                    onFocus={() => {moveLabel(true)}}
                    onBlur={() => {moveLabel()}}
                >
                </textarea>
            </div>
            {description && (
                <p className="text-sm md:text-base">
                    {description[0]}
                    <span className="font-medium">
                        {description[1]}
                    </span>
                    {description[2]}
                </p>
            )}
        </div>
    )
}