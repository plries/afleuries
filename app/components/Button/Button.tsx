import type { ButtonPropTypes } from "./types";

export const Button = ({
    children,
    additionalClasses,
}: ButtonPropTypes) => {
    return (
        <button
            className={`
                w-fit rounded-xl text-tan-10 shadow-md
                px-4 py-2 pr-16 md:pr-20 lg:pr-32
                border-2 border-blue-10
                text-nowrap
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
        >
            {children}
        </button>
    )
};