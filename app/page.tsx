import Image from "next/image";
import { Button } from "./components/Button/Button";
import { AFLEURIES_ILLUSTRATED } from "./const";

export default function Home() {
  return (
    <div className="
      w-screen h-[200vh] bg-gradient-to-b from-tan-10 to-tan-50 
      md:p-12 lg:p-14
    ">
      <div className="
      w-full h-full
      p-6 pt-0
      grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
      gap-3 md:gap-4
      bg-tan-20 shadow-2xl
      md:rounded-xl
      ">
        <header className="
          h-fit sticky top-0 left-0 p-6 -mx-6
          col-span-4 md:col-span-8 lg:col-span-12
          flex flex-row justify-between
          bg-gradient-to-b from-tan-20 from-25% to-transparent
          md:rounded-xl
        ">
          <Image
            src="/afleuries-logo.svg"
            width={100}
            height={0}
            alt="Logo"
          />
          <Button
            children={AFLEURIES_ILLUSTRATED.HEADER.BUTTON}
            additionalClasses={{ button: ['bg-blue-100'] }}
          />
        </header>
      </div>
    </div>
  );
}
