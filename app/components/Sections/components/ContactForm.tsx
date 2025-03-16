import { Input, TextArea, Button } from "../../index";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED,MOTION_CONFIG } from "../../../const";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {

    const [state, handleSubmit] = useForm("mldjdbbn");

    if (state.succeeded) {
        return <p>Thanks for your submission!</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
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
                    name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.FIRST_NAME.NAME}
                />
                <Input
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.LABEL}
                    htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.FOR}
                    name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.LAST_NAME.NAME}
                />
            </div>
            <Input
                label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.LABEL}
                description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.DESCRIPTION}
                htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.FOR}
                name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EMAIL.NAME}
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
                    name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DATE.NAME}
                />
                <Input
                    label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_LOCATION.LABEL}
                    htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_LOCATION.FOR}
                    name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_LOCATION.NAME}
                />
            </div>
            <TextArea 
                label={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.LABEL}
                description={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.DESCRIPTION}
                htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.FOR}
                name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.NAME}
            />
            <motion.div
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="flex justify-end">
                <Button 
                    type="submit"
                    additionalClasses={{ button: ['bg-green-100', 'border-green-10'] }}
                    disabled={state.submitting}
                >
                    {AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
                </Button>
            </motion.div>
            <ValidationError errors={state.errors} />
        </form>
    )
}