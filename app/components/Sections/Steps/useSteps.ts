import { useRef, useEffect, useState } from "react";
import { AFLEURIES_ILLUSTRATED } from "../../../const";
import { StepsPropTypes } from "./types";

export const useSteps = ({ stepsKey }: StepsPropTypes) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [isLastVisible, setIsLastVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const scrollDelay = 300;

  useEffect(() => {
    setIsFirstVisible(true);
    if (
      AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.STEPS[stepsKey].length <= 1
    ) {
      setIsLastVisible(true);
    }
  }, [stepsKey]);

  const scrollNext = () => {
    if (scrollRef.current && !isDisabled) {
      setIsDisabled(true);

      const stepWidth =
        (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      if (currentScroll + stepWidth <= maxScrollLeft) {
        scrollRef.current.scrollBy({ left: stepWidth, behavior: "smooth" });
      }

      setTimeout(() => {
        setIsDisabled(false);
      }, scrollDelay);
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current && !isDisabled) {
      setIsDisabled(true);

      const stepWidth =
        (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;

      if (scrollRef.current.scrollLeft - stepWidth >= 0) {
        scrollRef.current.scrollBy({ left: -stepWidth, behavior: "smooth" });
      }

      setTimeout(() => {
        setIsDisabled(false);
      }, scrollDelay);
    }
  };

  return {
    scrollRef,
    scrollContainerRef,
    firstItemRef,
    lastItemRef,
    isFirstVisible,
    setIsFirstVisible,
    isLastVisible,
    setIsLastVisible,
    scrollNext,
    scrollPrev,
  };
};
