import Image from "next/image";
import { Button } from "..";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { ButtonLink } from "../Button/ButtonLink";

export const Hero = () => {
    return (
        <section className="contents">
            <div className="
                aspect-square bg-tan-30 rounded-3xl 
                col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-7 lg:col-span-5 lg:order-2
            ">
            </div>
            <div className="
                flex flex-col justify-center
                gap-6 
                col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-5 lg:order-1
                ">
                <hgroup>
                    <h1 className="
                    font-instrument flex flex-wrap flex-row gap-3
                    text-7xl md:text-8xl
                    ">
                    <Image 
                        src="/LiveWord.svg"
                        width={100}
                        height={0}
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="sr-only">
                        {AFLEURIES_ILLUSTRATED.HERO.LIVE_PORTRAITS[0]}
                    </span>
                    {AFLEURIES_ILLUSTRATED.HERO.LIVE_PORTRAITS[1]}
                    </h1>
                <h2 className="font-geologica text-2xl md:-mt-2">{AFLEURIES_ILLUSTRATED.HERO.SUBHEADING}</h2>
                </hgroup>
                <div className="flex flex-row flex-wrap gap-3">
                <Button
                    children={AFLEURIES_ILLUSTRATED.HERO.CONTACT}
                    additionalClasses={{ button: ['bg-tan-100', 'border-tan-100'] }}
                />
                <ButtonLink
                    children={AFLEURIES_ILLUSTRATED.HERO.HOW_IT_WORKS}
                    additionalClasses={{ button: ['bg-transparent', 'border-tan-100', 'text-tan-100'] }}
                    onClick={"#HowItWorks"}
                />
                </div>
            </div>  
        </section>
    )
}