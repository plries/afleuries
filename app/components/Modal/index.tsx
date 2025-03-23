import { AFLEURIES_ILLUSTRATED } from "../../const";
import { ButtonLink, Heading, IconButton, Paragraph } from "../";
import { CloseIcon, PromotionIcon, RedeemIcon } from "@/public";
import { useModal } from "./useModal";

export const Modal = () => {
  const hook = useModal();

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 grid h-full w-full place-items-center bg-[#00000080] p-6 transition-all duration-700 ease-in-out ${hook.isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <dialog
          ref={hook.modalRef}
          open={hook.isOpen}
          className={`flex w-[calc(100%-3rem)] max-w-md flex-col gap-3 rounded-3xl bg-tan-10 p-6 shadow-lg transition-all duration-700 ease-in-out ${hook.isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className="flex flex-col">
            <IconButton
              additionalClasses={[
                "self-end",
                "border-none",
                "bg-transparent",
                "hover:shadow-none",
                "hover:bg-tan-20",
                "shadow-none",
              ]}
              onClick={() => hook.toggleModal(false)}
              name={AFLEURIES_ILLUSTRATED.MODAL.BUTTONS.CLOSE}
            >
              <CloseIcon />
            </IconButton>
            <Heading>{AFLEURIES_ILLUSTRATED.MODAL.HEADING}</Heading>
          </div>
          <PromotionIcon />
          <Paragraph>{AFLEURIES_ILLUSTRATED.MODAL.PARAGRAPH}</Paragraph>
          <ButtonLink
            additionalClasses={["bg-tan-100", "border-tan-90", "self-end"]}
            href="#contact"
            onClick={() => hook.toggleModal(false)}
            icon={<RedeemIcon />}
          >
            {AFLEURIES_ILLUSTRATED.MODAL.BUTTONS.CTA}
          </ButtonLink>
        </dialog>
      </div>
    </>
  );
};
