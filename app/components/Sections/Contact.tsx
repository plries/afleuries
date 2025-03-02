import { SectionHeading } from "./components";
import { AFLEURIES_ILLUSTRATED } from "../../const";
import { Input, Button } from "../index";

export const Contact = () => {
    return (
        <section className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 order-6
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
            md:rounded-b-xl
        ">
            <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10">
                <SectionHeading 
                    children={AFLEURIES_ILLUSTRATED.CONTACT.HEADING}
                />
            </div>
            <div className="col-span-full md:col-start-2 md:col-span-7 lg:col-start-2 lg:col-span-4">
                <p className="font-medium">
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.ONE}
                </p>
                <p>
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.TWO}
                </p>
            </div>
            <form
                className="
                flex flex-col gap-6
                col-span-full md:col-start-2 md:col-start-2 md:col-span-6 lg:col-start-7 lg:col-span-5
            ">
                <div className="flex flex-col gap-6 lg:gap-4 lg:flex-row">
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.LABEL}
                        placeholder={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.PLACEHOLDER}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.FOR}
                    />
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.LABEL}
                        placeholder={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.PLACEHOLDER}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.FOR}
                    />
                </div>
                <Input
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.LABEL}
                    placeholder={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.PLACEHOLDER}
                    description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.DESCRIPTION}
                    htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.FOR}
                />
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-base md:text-lg lg:text-xl">
                            {AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.LABEL}
                        </label>
                        <p className="text-sm md:text-base mt-1">
                            {AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.DESCRIPTION}
                        </p>
                    </div>
                    <textarea
                        placeholder={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.PLACEHOLDER}
                        className="
                        px-4 py-3 rounded-lg border-2 boreder-tan-20 placeholder:text-[#27272780] focus:outline-blue-10 max-h-96
                        "
                        minLength={150}
                    >
                    </textarea>
                </div>
                <div className="flex justify-end">
                    <Button 
                        type="submit"
                        children={AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
                        additionalClasses={{ button: ['bg-blue-100', 'border-blue-10'] }}
                    />
                </div>
            </form>
        </section>
    )
}