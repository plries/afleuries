import type { ButtonPropTypes } from "./types";

export const IconButton = ({
    children,
    additionalClasses,
    onClick,
}: ButtonPropTypes) => {
    return (
        <button
            className={`
                h-11 w-11 aspect-square rounded-lg bg-tan-30 text-tan-100
                px-4 border-[1px] border-tan-40 shadow-md
                ease-in-out transition-all duration-300 hover:scale-95 hover:shadow-lg
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
};