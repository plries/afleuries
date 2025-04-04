import Link from "next/link";
import { SocialLinkPropTypes } from "./types";

export const SocialLink = ({ href, icon, children }: SocialLinkPropTypes) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block flex flex-row items-center gap-2 rounded-full border-[1px] border-tan-50 bg-tan-40 py-2 pl-2 pr-8 font-instrument text-lg text-tan-90 shadow-md transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg hover:odd:-rotate-1 hover:even:rotate-1 md:text-xl lg:text-2xl"
    >
      {icon}
      {children}
    </Link>
  );
};
