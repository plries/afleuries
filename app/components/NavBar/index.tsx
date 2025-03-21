import Image from "next/image";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { ButtonLink, MenuButton } from "../";
import { BookNowIcon } from "@/public";
import { useNavBar } from "./useNavBar";

export const NavBar = () => {
  const hook = useNavBar();

  return (
    <motion.header
      className={` ${hook.width} ${hook.maxWidth} relative sticky left-0 top-6 z-40 flex h-fit flex-row items-center justify-between gap-4 rounded-3xl border-[1px] border-tan-10 bg-gradient-to-b from-[#f9f9f9bf] from-25% to-[#f9f9f940] p-6 shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out md:mb-6`}
    >
      <ButtonLink
        href={"/"}
        additionalClasses={[
          "border-none",
          "shadow-none",
          "hover:shadow-none",
          "hover:scale-100",
          "hover:rotate-0",
          "!p-0",
        ]}
      >
        <Image
          src="/AfleuriesLogoBlack.svg"
          width={0}
          height={0}
          alt="Afleuries Logo"
          className="w-24 transition-all hover:-rotate-1 hover:scale-95 md:w-28 lg:w-32"
        />
      </ButtonLink>
      <MenuButton />
      <div className="hidden flex-row justify-center gap-2 md:flex">
        <ButtonLink
          additionalClasses={[
            "bg-transparent",
            "border-blue-100",
            "!text-blue-100",
          ]}
          href="/about"
        >
          {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.ABOUT}
        </ButtonLink>
        <ButtonLink
          additionalClasses={["bg-blue-100", "border-blue-10", "w-full"]}
          href="#contact"
          icon={<BookNowIcon />}
        >
          {AFLEURIES_ILLUSTRATED.HEADER.BUTTONS.BOOK}
        </ButtonLink>
      </div>
    </motion.header>
  );
};
