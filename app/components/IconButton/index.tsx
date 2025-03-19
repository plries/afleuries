import type { IconButtonPropTypes } from "./types";

export const IconButton = ({
  children,
  additionalClasses,
  onClick,
}: IconButtonPropTypes) => {
  return (
    <button
      className={`pointer-events-auto aspect-square h-11 w-11 rounded-lg border-[1px] border-tan-40 bg-tan-30 px-4 text-tan-100 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg ${additionalClasses?.button?.join(" ") ?? ""} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
