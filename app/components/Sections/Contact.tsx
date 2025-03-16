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
            px-6 py-16
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
            md:rounded-b-xl
        ">
            <div className="col-span-full">
                <SectionHeading>
                    {AFLEURIES_ILLUSTRATED.CONTACT.HEADING}
                </SectionHeading>
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
                flex flex-col gap-4 mt-4 lg:mt-0
                col-span-full md:col-start-1 md:col-start-1 md:col-span-8 lg:col-start-7 lg:col-span-6
            ">
                <motion.p
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="text-sm md:text-base text-nowrap
                    flex flex-row gap-2 items-center
                    after:w-full after:h-[1px] after:bg-tan-50">
                    {AFLEURIES_ILLUSTRATED.CONTACT.FORM.CONTACT}
                </motion.p>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
                <motion.p 
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="text-sm md:text-base text-nowrap
                    flex flex-row gap-2 items-center mt-4
                    after:w-full after:h-[1px] after:bg-tan-50">
                    {AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT}
                </motion.p>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DATE.LABEL}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DATE.FOR}
                    />
                    <Input
                        label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_LOCATION.LABEL}
                        htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_LOCATION.FOR}
                    />
                </div>
                <TextArea 
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.LABEL}
                    description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.DESCRIPTION}
                />
                <motion.div
                    initial={MOTION_CONFIG.INITIAL}
                    whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                    transition={MOTION_CONFIG.TRANSITION}
                    className="flex justify-end">
                    <Button 
                        type="submit"
                        additionalClasses={{ button: ['bg-green-100', 'border-green-10'] }}
                    >
                        {AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
                    </Button>
                </motion.div>
            </form>
        </section>
    )
}