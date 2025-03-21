import { ButtonLink } from "../../components";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { Line1, Line2, Line3, BookNowIcon } from "@/public";
import { useMenuButton } from "./useMenuButton";

export const MenuButton = () => {
  const hook = useMenuButton();

  return (
    <>
      <button
        className="relative h-11 w-11 md:hidden"
        onClick={hook.toggleMenu}
      >
        <span className="sr-only">
          {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.MENU}
        </span>
        <span
          className={`inline-block transition-all duration-700 ease-in-out ${hook.isOpen ? "rotate-45" : "rotate-0"}`}
        >
          <Line1 />
          <span className={`my-1 inline-block`}>
            <Line2 />
          </span>
          <Line3 />
        </span>
      </button>
      <div
        className={`absolute bottom-0 left-0 flex w-full flex-row justify-center gap-2 transition-all duration-700 ease-in-out md:hidden ${hook.isOpen ? "translate-y-14 opacity-100 blur-none" : "pointer-events-none translate-y-12 opacity-0 blur-[10px]"}`}
      >
        <ButtonLink
          additionalClasses={[
            "bg-tan-20",
            "md:bg-transparent",
            "border-blue-100",
            "!text-blue-100",
            "w-full",
            "md:w-fit",
          ]}
          href="/about"
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
          href="#contact"
          icon={<BookNowIcon />}
        >
          {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.BOOK}
        </ButtonLink>
      </div>
    </>
  );
};
