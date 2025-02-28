import { SectionHeading, SectionParagraph } from "./components/";
import { AFLEURIES_ILLUSTRATED } from "../../const";

export const Experience = () => {
    return (
        <section className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 order-3
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
        ">
            <div className="
                aspect-video bg-tan-20 rounded-3xl
                col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10
            ">
            </div>
            <div className="
                flex flex-col gap-4
                col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10
            ">
                <SectionHeading 
                    children={AFLEURIES_ILLUSTRATED.EXPERIENCE.HEADING}
                />
                <div className="flex flex-col gap-3">
                    <SectionParagraph
                        children={AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.ONE}
                    />
                    <SectionParagraph
                        children={AFLEURIES_ILLUSTRATED.EXPERIENCE.PARAGRAPHS.TWO}
                    />
                </div>
            </div>
        </section>
    )
}