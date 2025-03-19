import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const useContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [state, handleSubmit] = useForm("mjkykrzj");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
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

  useEffect(() => {
    if (state.errors) {
      setShowError(true);
      setAnimateFadeOut(false);

      const fadeOutTimer = setTimeout(() => {
        setAnimateFadeOut(true);
      }, 5000);

      const hideTimer = setTimeout(() => {
        setShowError(false);
        setAnimateFadeOut(false);
      }, 5300);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [state.errors]);

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
  };

  return {
    state,
    onSubmit,
    showSuccess,
    showError,
    animateFadeOut,
  };
};
