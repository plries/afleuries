import type { ButtonTabPropTypes } from "./types";

export const ButtonTab = ({
  children,
  additionalClasses,
  onClick,
  ref,
}: ButtonTabPropTypes) => {
  return (
    <button
      ref={ref}
      className={`h-fit w-full text-nowrap rounded-t-xl border-b-[1px] border-tan-40 px-4 py-2 font-medium text-tan-90 transition-all duration-300 ease-in-out hover:border-tan-50 ${additionalClasses?.join(" ") ?? ""} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
