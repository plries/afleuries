import type { ButtonPropTypes } from "./types";

export const ButtonTab = ({
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
                h-fit w-full rounded-t-xl text-tan-100
                border-b-2 border-transparent
                px-4 py-2 text-nowrap
                ease-in-out transition-all duration-300
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
};