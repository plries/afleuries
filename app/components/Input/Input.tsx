"use client";
import { InputPropTypes } from "./types"

export const Input = ({
    label,
    description,
    htmlFor,
}: InputPropTypes) => {

    const moveLabel = () => {
        const label = document.querySelector(`#${htmlFor}`) as HTMLLabelElement;
        const input = document.querySelector(`#${htmlFor + "-input"}`) as HTMLInputElement;
        const classes = ['!translate-y-0', 'bg-tan-40', '!border-[#27272780]']

        if (label && label.style && input.value !== "") {
            label.classList.add(...classes);
        } 
        if (label && label.style && input.value === "") {
            label.classList.remove(...classes);
        }
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="relative">
                <label
                    id={htmlFor}
                    htmlFor={htmlFor}
                    className="
                    absolute mx-2 z-10 transition-all duration-200 text-[#272727be] border-2 border-tan-30 pointer-events-none
                    translate-y-6 md:translate-y-7
                    -top-2.5 md:-top-3.5
                    bg-tan-30 px-2 rounded-full
                    text-base md:text-lg
                ">
                    {label}
                </label>
                <input
                    id={htmlFor + "-input"}
                    type="text"
                    required
                    className="
                    px-4 pb-3 pt-4 w-full h-fit rounded-lg border-2 border-[#27272780] bg-transparent focus:outline-blue-10
                    text-base md:text-lg font-light
                    "
                    onChange={() => {moveLabel()}}
                    onFocus={() => {moveLabel()}}
                    onBlur={() => {moveLabel()}}
                >
                </input>
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