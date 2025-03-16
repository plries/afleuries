import type { ButtonPropTypes } from "./types";

export const Button = ({
    children,
    additionalClasses,
    onClick,
    type,
    ref,
    disabled,
    icon,
}: ButtonPropTypes) => {
    return (
        <button
            ref={ref}
            type={type}
            className={`
                h-fit w-fit rounded-xl text-tan-10 shadow-md px-4 py-2
                flex flex-row gap-2 items-center
                border-[1px] text-nowrap
                ease-in-out transition-all duration-300 hover:scale-95 hover:even:rotate-1 hover:odd:-rotate-1 hover:shadow-lg
                disabled:opacity-50 disabled:scale-95
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            <span className="scale-90">
                {icon}
            </span>
        </button>
    )
};