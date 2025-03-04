"use client";
import { InputPropTypes } from "./types"

export const TextArea = ({
    label,
    description,
    htmlFor,
}: InputPropTypes) => {

    const moveLabel = () => {
        const label = document.querySelector(`#${htmlFor}`) as HTMLTextAreaElement;
        const input = document.querySelector(`#${htmlFor + "-input"}`) as HTMLTextAreaElement;
        const classes = ['!translate-y-0', 'bg-tan-40', '!border-[#27272780]']

        if (label && label.style && input.value !== "") {
            label.classList.add(...classes);
        } 
        if (label && label.style && input.value === "") {
            label.classList.remove(...classes);
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="relative">
                <label
                    id={htmlFor}
                    className="
                    absolute mx-2 z-10 transition-all duration-200 text-[#272727be] border-2 border-tan-30 pointer-events-none
                    translate-y-6 md:translate-y-7
                    -top-2.5 md:-top-4
                    bg-tan-30 px-2 rounded-full
                    text-base md:text-lg
                ">
                    {label}
                </label>
                <textarea
                    id={htmlFor + "-input"}
                    className="
                    px-4 pb-3 pt-4 rounded-lg border-2 border-[#27272780] bg-transparent focus:outline-blue-10 w-full h-48
                    text-base md:text-lg font-light resize-none
                    "
                    onChange={() => {moveLabel()}}
                    onFocus={() => {moveLabel()}}
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