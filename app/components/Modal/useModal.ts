import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const startDate = "03/23/2025";
  const endDate = "03/29/2025";

  const toggleModal = (value: boolean) => {
    if (value === true) {
      modalRef.current?.showModal();
      setIsOpen(true);
    } else {
      modalRef.current?.close();
      setIsOpen(false);
    }
  };

  const checkDate = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return now >= start && now <= end;
  };

  useEffect(() => {
    if (
      pathname === "/" &&
      localStorage.getItem("seen") !== "true" &&
      checkDate()
    ) {
      setTimeout(() => {
        toggleModal(true);
      }, 5000);
      if (!localStorage.getItem("seen")) {
        localStorage.setItem("seen", "true");
      }
    }
  }, [pathname]);

  return {
    modalRef,
    toggleModal,
    isOpen,
  };
};
