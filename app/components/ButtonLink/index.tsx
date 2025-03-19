import type { ButtonLinkPropTypes } from "./types";

export const ButtonLink = ({
  children,
  additionalClasses,
  onClick,
  icon,
}: ButtonLinkPropTypes) => {
  return (
    <a
      className={`flex h-fit w-fit flex-row items-center gap-2 text-nowrap rounded-xl border-[1px] px-4 py-2 text-tan-10 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:odd:-rotate-1 hover:even:rotate-1 ${additionalClasses?.button?.join(" ") ?? ""} `}
      href={onClick}
    >
      {children}
      <span className="scale-90">{icon}</span>
    </a>
  );
};
