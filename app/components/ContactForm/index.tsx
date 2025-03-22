"use client";
import { ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../const";
import { Input, TextArea, Button } from "../";
import { SubmitIcon } from "@/public";
import { useContactForm } from "./useContactForm";

export const ContactForm = () => {
  const hook = useContactForm();

  return (
    <form
      onSubmit={hook.onSubmit}
      className="col-span-full mt-4 flex flex-col gap-4 md:col-span-8 md:col-start-1 lg:col-span-5 lg:col-start-7 lg:mt-0"
    >
      <fieldset className="contents">
        <motion.legend
          initial={MOTION_CONFIG.INITIAL}
          whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="flex flex-row items-center gap-2 text-nowrap text-sm after:h-[1px] after:w-full after:bg-tan-50 md:text-base"
        >
          {AFLEURIES_ILLUSTRATED.CONTACT.FORM.CONTACT}
        </motion.legend>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      </fieldset>
      <fieldset className="contents">
        <motion.legend
          initial={MOTION_CONFIG.INITIAL}
          whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          className="mt-4 flex flex-row items-center gap-2 text-nowrap text-sm after:h-[1px] after:w-full after:bg-tan-50 md:text-base"
        >
          {AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT}
        </motion.legend>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          description={
            AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.DESCRIPTION
          }
          htmlFor={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.FOR}
          name={AFLEURIES_ILLUSTRATED.CONTACT.FORM.EVENT_DETAILS.NAME}
        />
      </fieldset>
      <motion.div
        initial={MOTION_CONFIG.INITIAL}
        whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
        transition={MOTION_CONFIG.TRANSITION}
        className="flex flex-col items-end gap-4"
      >
        <Button
          type="submit"
          additionalClasses={["bg-blue-100", "border-blue-10"]}
          disabled={hook.state.submitting}
          icon={<SubmitIcon />}
        >
          {AFLEURIES_ILLUSTRATED.CONTACT.FORM.BUTTON}
        </Button>
      </motion.div>
      {hook.showSuccess && (
        <div className="pointer-events-none fixed bottom-0 left-0 flex h-screen w-screen items-end justify-center">
          <p
            className={`pointer-events-none mb-8 h-fit w-fit rounded-full bg-tan-100 px-4 py-2 text-sm text-tan-10 shadow-xl md:text-base ${hook.animateFadeOut ? "animate-fade-out" : ""} `}
          >
            {AFLEURIES_ILLUSTRATED.CONTACT.FORM.SUCCESS}
          </p>
        </div>
      )}
      {hook.showError && (
        <div className="pointer-events-none fixed bottom-0 left-0 flex h-screen w-screen items-end justify-center">
          <ValidationError
            className={`pointer-events-none mb-8 h-fit w-fit rounded-full bg-red-100 px-4 py-2 text-sm text-tan-100 shadow-xl md:text-base ${hook.animateFadeOut ? "animate-fade-out" : ""} `}
            errors={hook.state.errors}
          />
        </div>
      )}
    </form>
  );
};
