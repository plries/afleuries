"use client";
import { SectionHeading } from "./components";
import { IconButton } from "..";
import Image from "next/image";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { useRef } from "react";

export const HowItWorks = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (scrollRef.current) {
            const stepWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
            scrollRef.current.scrollBy({ left: stepWidth, behavior: "smooth" });
        }
    };
    
    const scrollPrev = () => {
        if (scrollRef.current) {
            const stepWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
            scrollRef.current.scrollBy({ left: -stepWidth, behavior: "smooth" });
        }
    };

    return (
    <section className="contents">
        <div
            id="HowItWorks"
            className="
            my-16 order-4
            col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10
        ">
        <div className="mb-3 flex flex-row items-center justify-between">
            <SectionHeading
                children={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.HEADING}
            />
            <div
                className="flex flex-row gap-2
                lg:hidden
            ">
                <IconButton
                    onClick={() => {scrollPrev()}}
                >
                    <Image
                        src={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.ICON_LEFT.SRC}
                        width={8}
                        height={13}
                        alt={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.ICON_LEFT.ALT}
                    />
                </IconButton>
                <IconButton
                    onClick={() => {scrollNext()}}
                >
                    <Image
                        src={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.ICON_RIGHT.SRC}
                        width={8}
                        height={13}
                        alt={AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.ICON_RIGHT.ALT}
                    />
                </IconButton>
            </div>
        </div>
        <div className="relative -mx-6">
            <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r 
                from-tan-20 from-0% to-transparent to-5% z-10
                hidden md:block lg:hidden
                ">
            </div>
            <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r 
                from-transparent from-95% to-tan-20 to-100% z-10
                hidden md:block lg:hidden
                ">
            </div>
            <div
                ref={scrollRef}
                className="relative flex flex-row
                overflow-x-scroll scroll-smooth no-scrollbar lg:overflow-x-auto
                snap-x snap-mandatory
            ">
            {AFLEURIES_ILLUSTRATED.HOW_IT_WORKS.STEPS.map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col gap-2 snap-start 
                    pb-2 pl-6 pr-6 md:pr-0
                    min-w-[calc(100%/1)] md:min-w-[calc(100%/1.5)] lg:min-w-0 lg:w-full
                    md:last:mr-80 lg:last:mr-0
                ">
                    <div className="aspect-square w-full bg-tan-30 rounded-3xl"></div>
                        <div className="flex flex-row items-center gap-3">
                            <Image
                                src={step.ICON.SRC}
                                width={48}
                                height={0}
                                alt={step.ICON.ALT}
                                className="aspect-square"
                            />
                            <h4 className="font-instrument font-normal text-nowrap text-[32px] lg:text-3xl">
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
