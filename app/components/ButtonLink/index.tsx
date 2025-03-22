import Link from "next/link";
import type { ButtonLinkPropTypes } from "./types";

export const ButtonLink = ({
  children,
  additionalClasses,
  href,
  onClick,
  icon,
}: ButtonLinkPropTypes) => {
  return (
    <Link
      className={`inline-block flex h-fit w-fit flex-row items-center justify-center gap-2 text-nowrap rounded-xl border-[1px] px-4 py-2 font-medium text-tan-10 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:odd:-rotate-1 hover:even:rotate-1 ${additionalClasses?.join(" ") ?? ""} `}
      href={href}
      prefetch={false}
      onClick={onClick}
    >
      {children}
      {icon && <span className="scale-90">{icon}</span>}
    </Link>
  );
};
