import { Input, TextArea, Button } from "../../index";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SubmitIcon } from "@/public";
import { useState, useEffect } from "react";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mjkykrzj");
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [showSuccess, setShowSuccess] = useState(false);
    const [animateFadeOut, setAnimateFadeOut] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            setAnimateFadeOut(false);

            const fadeOutTimer = setTimeout(() => {
                setAnimateFadeOut(true);
            }, 5000);

            const hideTimer = setTimeout(() => {
                setShowSuccess(false);
                setAnimateFadeOut(false);
            }, 5300);

            return () => {
                clearTimeout(fadeOutTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [state.succeeded]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!executeRecaptcha) {
            console.error("reCAPTCHA not yet available.");
            return;
        }

        const form = event.currentTarget;
        if (!(form instanceof HTMLFormElement)) {
            console.error("Invalid form element.");
            return;
        }

        try {
            const token = await executeRecaptcha("submit");
            const formData = new FormData(form);
            formData.append("g-recaptcha-response", token);

            handleSubmit(formData);
        } catch (error) {
            console.error("reCAPTCHA error:", error);
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className="
                flex flex-col gap-4 mt-4 lg:mt-0
                col-span-full md:col-start-1 md:col-span-8 lg:col-start-7 lg:col-span-5
            "
        >
            <motion.p
                initial={MOTION_CONFIG.INITIAL}
                whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
                transition={MOTION_CONFIG.TRANSITION}
                className="text-sm md:text-base text-nowrap
                flex flex-row gap-2 items-center
                after:w-full after:h-[1px] after:bg-tan-50"
            >
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
                after:w-full after:h-[1px] after:bg-tan-50"
            >
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
                className="flex flex-col gap-4 items-end"
            >
                <Button
                    type="submit"
                    additionalClasses={{ button: ["bg-blue-100", "border-blue-10"] }}
                    disabled={state.submitting}
                    icon={<SubmitIcon />}
                >
                    {AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
                </Button>
            </motion.div>
            <ValidationError errors={state.errors} />
                {showSuccess &&
                    <div className="left-0 fixed flex items-end justify-center bottom-0 w-screen h-screen">
                        <p className={`
                            w-fit h-fit bg-tan-100 text-tan-10 py-2 px-4 mb-8 rounded-2xl shadow-xl
                            text-sm md:text-base pointer-events-none
                            ${animateFadeOut ? "animate-fadeOut" : ""}
                        `}>
                            {AFLEURIES_ILLUSTRATED.CONTACT.FORM.SUCCESS}
                        </p>
                    </div>
                }
        </form>
    );
};