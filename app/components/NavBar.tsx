import Image from "next/image";
import { Button } from "./Button/Button";
import { AFLEURIES_ILLUSTRATED } from "../const";

export const NavBar = () => {
    return (
        <header className="
            h-fit sticky top-0 left-0 p-6 -mx-6 gap-4
            col-span-4 md:col-span-8 lg:col-span-12
            flex flex-row items-top justify-between
            bg-gradient-to-b from-tan-20 from-25% to-transparent
            md:rounded-xl
        ">
        <Image
            src="/AfleuriesLogo.svg"
            width={0}
            height={0}
            alt="Afleuries Logo"
            className="w-24 md:w-28 lg:w-32 hover:-rotate-1 hover:scale-95 transition-all"
            />
        <Button
            children={AFLEURIES_ILLUSTRATED.HEADER.BUTTON}
            additionalClasses={{ button: ['bg-blue-100', 'border-blue-10'] }}
        />
        </header>
    )
}