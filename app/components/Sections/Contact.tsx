"use client";
import { SectionHeading } from "./components";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { Input, Button, TextArea } from "../index";
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section 
            id="contact"
            className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 order-6
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
            md:rounded-b-xl
        ">
            <div className="col-span-full">
                <SectionHeading 
                    children={AFLEURIES_ILLUSTRATED.CONTACT.HEADING}
                />
            </div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full md:col-start-1 md:col-span-8 lg:col-start-1 lg:col-span-6"
            >
                <p className="font-medium">
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.ONE}
                </p>
                <p>
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.TWO}
                </p>
            </motion.div>
            <form
                className="
                flex flex-col gap-8 mt-4 lg:mt-0
                col-span-full md:col-start-1 md:col-start-1 md:col-span-8 lg:col-start-7 lg:col-span-6
            ">
                <div className="flex flex-col gap-6 lg:gap-4 lg:flex-row">
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.LABEL}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.FOR}
                    />
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.LABEL}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.FOR}
                    />
                </div>
                <Input
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.LABEL}
                    description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.DESCRIPTION}
                    htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.FOR}
                />
                <TextArea 
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.LABEL}
                    description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.DESCRIPTION}
                    htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.FOR}
                />
                <motion.div
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="flex justify-end">
                    <Button 
                        type="submit"
                        children={AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
                        additionalClasses={{ button: ['bg-blue-100', 'border-blue-10'] }}
                    />
                </motion.div>
            </form>
        </section>
    )
}