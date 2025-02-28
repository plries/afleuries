"use client";
import { SectionHeading } from "./components";
import Image from "next/image";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { useEffect, useRef } from "react";

export const HowItWorks = () => {
const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    if (scrollRef.current && window.innerWidth >= 1024) {
        const secondElement = scrollRef.current.children[1] as HTMLElement;
        if (secondElement) {
        const offset =
            secondElement.offsetLeft -
            scrollRef.current.offsetWidth / 2 +
            secondElement.offsetWidth / 2;
            scrollRef.current.scrollTo({ left: offset, behavior: "smooth" });
        }
    }
    }, []);

    return (
    <section className="contents">
        <div
            id="HowItWorks"
            className="
            my-16 order-4
            col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10
            flex flex-col gap-3
        ">
        <SectionHeading
            children={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.HEADING}
        />
        <div className="relative -mx-6">
            <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r 
                from-tan-20 from-[1%] via-transparent via-[50%] to-tan-20 to-[99%] 
                z-10 hidden md:block"
            ></div>
            <div
                ref={scrollRef}
                className="relative flex flex-row gap-3 md:gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
            >
            {AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.STEPS.map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 min-w-72 snap-center pb-2
                    first:ml-6 last:mr-6 md:first:ml-36 md:last:mr-36 lg:first:ml-96 lg:last:mr-96
                ">
                    <div className="aspect-square w-full bg-tan-30 rounded-3xl"></div>
                        <div className="flex flex-row gap-3">
                            <Image
                            src={step.ICON.SRC}
                            width={44}
                            height={0}
                            alt={step.ICON.ALT}
                            />
                            <h4 className="font-instrument font-normal text-3xl lg:text-4xl">
                                {step.HEADING}
                            </h4>
                        </div>
                    <p>{step.PARAGRAPH}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
    );
};
