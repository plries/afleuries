import { AFLEURIES_ILLUSTRATED } from "../../../const";
import { Line1, Line2, Line3 } from "@/public";
import { useMenuButton } from "./useMenuButton";
import { NavButtons } from "../NavButtons";

export const MenuButton = () => {
  const hook = useMenuButton();

  return (
    <>
      <button
        className="relative h-11 w-11 leading-none md:hidden"
        onClick={hook.toggleMenu}
      >
        <span className="sr-only">
          {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.MENU}
        </span>
        <span
          className={`inline-block transition-all duration-700 ease-in-out ${hook.isOpen ? "rotate-90" : ""}`}
        >
          <span
            className={`mb-2 inline-block transition-all duration-700 ease-in-out ${hook.isOpen ? "mb-1 translate-y-4 rotate-45" : ""}`}
          >
            <Line1 />
          </span>
          <span
            className={`mb-1.5 inline-block transition-all duration-300 ease-in-out ${hook.isOpen ? "scale-0 opacity-0" : ""}`}
          >
            <Line2 />
          </span>
          <span
            className={`mb-1 inline-block transition-all duration-700 ease-in-out ${hook.isOpen ? "-translate-y-4 -rotate-45" : ""}`}
          >
            <Line3 />
          </span>
        </span>
      </button>
      <div
        className={`absolute bottom-0 left-0 flex w-full flex-row justify-center gap-2 transition-all duration-700 ease-in-out md:hidden ${hook.isOpen ? "translate-y-14 opacity-100 blur-none" : "pointer-events-none translate-y-12 opacity-0 blur-[10px]"}`}
      >
        <NavButtons pathname={hook.pathname} toggleMenu={hook.toggleMenu} />
      </div>
    </>
  );
};
