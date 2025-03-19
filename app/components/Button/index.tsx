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
      className={`flex h-fit w-fit flex-row items-center gap-2 text-nowrap rounded-xl border-[1px] px-4 py-2 text-tan-10 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:odd:-rotate-1 hover:even:rotate-1 disabled:scale-95 disabled:animate-pulse ${additionalClasses?.button?.join(" ") ?? ""} `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <span className="scale-90">{icon}</span>
    </button>
  );
};
