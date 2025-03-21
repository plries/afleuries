import type { IconButtonPropTypes } from "./types";

export const IconButton = ({
  children,
  additionalClasses,
  onClick,
  disabled,
  name,
}: IconButtonPropTypes) => {
  return (
    <button
      disabled={disabled}
      className={`pointer-events-auto aspect-square h-11 w-11 rounded-lg border-[1px] border-tan-40 bg-tan-30 px-4 text-tan-100 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg disabled:pointer-events-none disabled:scale-90 disabled:!text-tan-40 disabled:hover:scale-100 disabled:hover:shadow-md ${additionalClasses?.join(" ") ?? ""} `}
      onClick={onClick}
    >
      {children}
      <span className="sr-only">
        {name}
      </span>
    </button>
  );
};
