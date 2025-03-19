"use client";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { Heading, ContactForm, Doodle } from "../../";
import { useContact } from "./useContact";

export const Contact = () => {
    const hook = useContact();

    return (
        <section 
            id="contact"
            className="
            w-[calc(100% + 24px)] -mx-6 mt-16 bg-tan-30
            px-6 py-16 relative
            col-start-1 col-span-full
            grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-3 md:gap-4
            md:rounded-b-xl
            scroll-mt-24
        ">
            <Doodle
                scrollPosition={{ y: hook.y, rotate: hook.rotate}}
            >
                {AFLEURIES_ILLUSTRATED.DOODLES.SPARKLES()}
            </Doodle>
            <div className="col-span-full lg:col-start-2 lg:col-span-10">
                <Heading>
                    {AFLEURIES_ILLUSTRATED.CONTACT.HEADING}
                </Heading>
            </div>
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="col-span-full md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-4
                "
            >
                <p className="font-medium">
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.ONE}
                </p>
                <p>
                    {AFLEURIES_ILLUSTRATED.CONTACT.PARAGRAPHS.TWO}
                </p>
            </motion.div>
            <ContactForm />
        </section>
    )
}