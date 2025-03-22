import { ButtonLink } from "../../";
import { AFLEURIES_ILLUSTRATED } from "../../../const";
import { BookNowIcon } from "@/public";
import { NavButtonsPropTypes } from "./types";

export const NavButtons = ({ pathname, toggleMenu }: NavButtonsPropTypes) => {
  return (
    <>
      <ButtonLink
        additionalClasses={[
          "bg-tan-20",
          "md:bg-[#f9f9f980]",
          "border-blue-100",
          "!text-blue-100",
          "w-full",
          "md:w-fit",
        ]}
        href="/about"
        onClick={toggleMenu}
      >
        {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.ABOUT}
      </ButtonLink>
      <ButtonLink
        additionalClasses={[
          "bg-blue-100",
          "border-blue-10",
          "w-full",
          "md:w-fit",
        ]}
        href={pathname === "/about" ? "/#contact" : "#contact"}
        icon={<BookNowIcon />}
        onClick={toggleMenu}
      >
        {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.BOOK}
      </ButtonLink>
    </>
  );
};
