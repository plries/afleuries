"use client";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfYafYqAAAAAK1HewEyOuicqfv65TE1ufQpRIJ_">
      {children}
    </GoogleReCaptchaProvider>
  );
}
