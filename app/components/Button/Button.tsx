import type { ButtonPropTypes } from "./types";

export const Button = ({
    children,
    additionalClasses,
    onClick,
    type,
    ref,
}: ButtonPropTypes) => {
    return (
        <button
            ref={ref}
            type={type}
            className={`
                h-fit w-fit rounded-xl text-tan-100 shadow-md
                px-4 py-2 pr-12 md:pr-16 lg:pr-20
                border-[1px] text-nowrap font-normal
                ease-in-out transition-all duration-300 hover:scale-95 hover:even:rotate-1 hover:odd:-rotate-1 hover:shadow-lg
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
};