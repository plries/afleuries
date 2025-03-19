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

  useEffect(() => {
    setIsFirstVisible(true);
    if (
      AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.STEPS[stepsKey].length <= 1
    ) {
      setIsLastVisible(true);
    }
  }, [stepsKey]);

  const scrollNext = () => {
    if (scrollRef.current) {
      const stepWidth =
        (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      scrollRef.current.scrollBy({ left: stepWidth, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const stepWidth =
        (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 0;
      scrollRef.current.scrollBy({ left: -stepWidth, behavior: "smooth" });
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
