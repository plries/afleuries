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
      className={`h-fit w-full text-nowrap rounded-t-xl border-b-[1px] border-transparent px-4 py-2 text-tan-100 transition-all duration-300 ease-in-out hover:border-tan-50 ${additionalClasses?.button?.join(" ") ?? ""} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
