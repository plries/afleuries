import type { ButtonPropTypes } from "./types";

export const IconButton = ({
    children,
    additionalClasses,
    onClick,
}: ButtonPropTypes) => {
    return (
        <button
            className={`
                h-11 w-11 aspect-square rounded-full text-tan-10 shadow-md
                px-4 border-2 border-tan-100
                ease-in-out transition-all hover:scale-95 hover:shadow-lg
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
};