import { AFLEURIES_ILLUSTRATED } from "../../../const";
import { IconButton } from "../../";
import { NavButtons } from "../NavButtons";
import { MenuIcon, CloseIcon } from "@/public";
import { MenuButtonPropTypes } from "./types";

export const MenuButton = ({
  isOpen,
  toggleMenu,
  pathname,
}: MenuButtonPropTypes) => {
  return (
    <>
      <IconButton
        name={
          isOpen
            ? AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.MENU.CLOSE
            : AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.MENU.CLOSE
        }
        onClick={toggleMenu}
        additionalClasses={[
          "!bg-blue-100",
          "!border-blue-10",
          "!text-tan-10",
          "duration-700",
          "md:hidden",
          `${isOpen ? "rotate-90 scale-95" : ""}`,
        ]}
      >
        <span
          className={`inline-block transition-all duration-700 ease-in-out ${isOpen ? "scale-100" : "absolute scale-0 opacity-0"}`}
        >
          <CloseIcon />
        </span>
        <span
          className={`inline-block transition-all duration-700 ease-in-out ${isOpen ? "absolute scale-0 opacity-0" : "scale-100"}`}
        >
          <MenuIcon />
        </span>
      </IconButton>
      <ul
        className={`absolute bottom-0 left-0 flex w-full flex-row justify-center gap-2 transition-all duration-700 ease-in-out ${isOpen ? "translate-y-14 opacity-100 blur-none" : "pointer-events-none translate-y-12 opacity-0 blur-[10px]"}`}
      >
        <NavButtons pathname={pathname} toggleMenu={toggleMenu} />
      </ul>
    </>
  );
};
