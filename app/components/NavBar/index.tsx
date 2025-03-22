import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { NavButtons } from "./NavButtons";
import { useNavBar } from "./useNavBar";

export const NavBar = () => {
  const hook = useNavBar();

  return (
    <motion.header
      className={` ${hook.width} ${hook.maxWidth} relative sticky left-0 top-6 z-40 flex h-fit flex-row items-center justify-between gap-4 rounded-3xl border-[1px] border-tan-10 bg-gradient-to-b from-[#f9f9f9bf] from-25% to-[#f9f9f940] p-6 shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out md:mb-6`}
    >
      <Link
        href={hook.pathname === "/" ? "#top" : "/"}
        className="inline-block transition-all duration-300 ease-in-out hover:rotate-1 hover:scale-95"
        onClick={hook.closeMenu}
      >
        <Image
          src="/AfleuriesLogoBlack.svg"
          width={0}
          height={0}
          alt="Afleuries Logo"
          className="w-24 md:w-28 lg:w-32"
        />
      </Link>
      <MenuButton
        isOpen={hook.isOpen}
        toggleMenu={hook.toggleMenu}
        pathname={hook.pathname}
      />
      <div className="hidden flex-row justify-center gap-2 md:flex">
        <NavButtons pathname={hook.pathname} />
      </div>
    </motion.header>
  );
};
