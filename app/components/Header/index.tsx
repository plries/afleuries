import Image from "next/image";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { ButtonLink } from "../";
import { BookNowIcon } from "@/public";
import { useHeader } from "./useHeader";

export const Header = () => {
    const hook = useHeader();

    return (
        <motion.header
            className={`
            ${hook.width} ${hook.maxWidth}
            relative h-fit sticky z-40 top-6 left-0 p-6 gap-4 md:mb-6
            flex flex-row items-center justify-between border-[1px] border-tan-40 shadow-lg
            bg-gradient-to-b from-[#f9f9f9bf] from-25% to-[#f9f9f940]
            rounded-3xl transition-all duration-500 ease-in-out
            backdrop-blur-sm  
        `}>
            <ButtonLink
                onClick="#"
                additionalClasses={{ button: ['border-none', 'shadow-none', 'hover:shadow-none', 'hover:scale-100', 'hover:rotate-0', '!p-0'] }}
            >
                <Image
                    src="/AfleuriesLogoBlack.svg"
                    width={0}
                    height={0}
                    alt="Afleuries Logo"
                    className="w-24 md:w-28 lg:w-32 hover:-rotate-1 hover:scale-95 transition-all"
                />
            </ButtonLink>
            <ButtonLink
                additionalClasses={{ button: ['bg-blue-100', 'border-blue-10'] }}
                onClick="#contact"
                icon={<BookNowIcon />}
            >
                {AFLEURIES_ILLUSTRATED.HEADER.BUTTON}
            </ButtonLink>
        </motion.header>
    )
}