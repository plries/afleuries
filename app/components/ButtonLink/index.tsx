import type { ButtonLinkPropTypes } from "./types";

export const ButtonLink = ({
    children,
    additionalClasses,
    onClick,
    icon,
}: ButtonLinkPropTypes) => {
    return (
        <a
            className={`
                h-fit w-fit rounded-xl text-tan-10 shadow-md px-4 py-2
                flex flex-row gap-2 items-center
                border-[1px] text-nowrap
                ease-in-out transition-all duration-300 hover:scale-95 hover:even:rotate-1 hover:odd:-rotate-1 hover:shadow-lg
                ${additionalClasses?.button?.join(' ') ?? ''}
            `}
            href={onClick}
        >
            {children}
            <span className="scale-90">
                {icon}
            </span>
        </a>
    )
};