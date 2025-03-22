import { AFLEURIES_ILLUSTRATED } from "../../const";
import { useFooter } from "./useFooter";

export const Footer = () => {
  const hook = useFooter();

  return (
    <footer
      className={`w-full max-w-screen-xl bg-tan-30 p-4 pt-0 md:bg-transparent md:pt-4 ${hook.pathname === "/about" ? "hidden" : ""}`}
    >
      <p className="text-center text-sm text-tan-50 md:text-tan-100">
        {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[0]}
        <a
          href={AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.LINK}
          className="text-sm font-medium text-tan-50 hover:underline md:text-tan-100"
        >
          {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PRIVACY_POLICY.TEXT}
        </a>
        {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[1]}
        <a
          href={AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.LINK}
          className="text-sm font-medium text-tan-50 hover:underline md:text-tan-100"
        >
          {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.TERMS_OF_SERVICE.TEXT}
        </a>
        {AFLEURIES_ILLUSTRATED.CONTACT.RECAPTCHA.PARAGRAPH[2]}
      </p>
    </footer>
  );
};
