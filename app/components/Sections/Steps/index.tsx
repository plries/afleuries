import { motion, AnimatePresence } from "framer-motion";
import { AFLEURIES_ILLUSTRATED, MOTION_CONFIG } from "../../../const";
import { IconButton, StepIndicator } from "../../";
import { ChevronRight, ChevronLeft } from "@/public";
import { StepsPropTypes } from "./types";
import { useSteps } from "./useSteps";

export const Steps = ({ stepsKey }: StepsPropTypes) => {
  const hook = useSteps({ stepsKey });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stepsKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="col-span-full grid auto-rows-min grid-cols-4 gap-3 md:grid-cols-8 md:gap-4 lg:grid-cols-12"
        onAnimationComplete={() => {
          if (hook.scrollRef.current) {
            hook.setIsFirstVisible(hook.scrollRef.current.scrollLeft <= 10);
            const isAtEnd =
              hook.scrollRef.current.scrollLeft +
                hook.scrollRef.current.clientWidth >=
              hook.scrollRef.current.scrollWidth - 10;
            hook.setIsLastVisible(isAtEnd);
          }
        }}
      >
        <motion.div
          initial={MOTION_CONFIG.INITIAL}
          whileInView={MOTION_CONFIG.WHILE_IN_VIEW}
          transition={MOTION_CONFIG.TRANSITION}
          ref={hook.scrollContainerRef}
          className="lg:mr-0] relative col-span-full -mx-6 mb-14 md:mb-0"
        >
          <div className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-r from-tan-20 from-0% to-transparent to-5% md:block lg:hidden"></div>
          <div className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-r from-transparent from-95% to-tan-20 to-100% md:block lg:hidden"></div>
          <div className="pointer-events-none absolute -bottom-10 left-0 left-1/2 z-10 col-span-full flex grid w-full -translate-x-1/2 grid-cols-4 flex-row items-end justify-between gap-3 px-6 md:grid-cols-8 md:gap-4 lg:bottom-1/2 lg:max-w-[unset] lg:translate-y-1/2 lg:grid-cols-12 lg:p-0 lg:px-6">
            <div className="pointer-events-auto col-start-1 flex h-full w-full items-end justify-start lg:items-center lg:justify-end">
              <IconButton
                onClick={hook.scrollPrev}
                disabled={hook.isFirstVisible}
                name={
                  AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.BUTTONS.PREVIOUS
                }
              >
                <ChevronLeft />
              </IconButton>
            </div>
            <div className="col-start-4 flex h-full w-full items-end justify-end md:col-start-8 lg:col-start-12 lg:items-center lg:justify-start">
              <IconButton
                onClick={hook.scrollNext}
                disabled={hook.isLastVisible}
                name={AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.BUTTONS.NEXT}
              >
                <ChevronRight />
              </IconButton>
            </div>
          </div>
          <div
            ref={hook.scrollRef}
            className="no-scrollbar relative flex snap-x snap-mandatory flex-row overflow-x-scroll scroll-smooth lg:overflow-x-auto"
            onScroll={() => {
              if (hook.scrollRef.current) {
                hook.setIsFirstVisible(hook.scrollRef.current.scrollLeft <= 10);
                const isAtEnd =
                  hook.scrollRef.current.scrollLeft +
                    hook.scrollRef.current.clientWidth >=
                  hook.scrollRef.current.scrollWidth - 10;
                hook.setIsLastVisible(isAtEnd);
              }
            }}
          >
            {AFLEURIES_ILLUSTRATED.PORTRAITS.HOW_IT_WORKS.STEPS[stepsKey].map(
              (step, index, array) => (
                <div
                  ref={
                    index === 0
                      ? hook.firstItemRef
                      : index === array.length - 1
                        ? hook.lastItemRef
                        : null
                  }
                  key={index}
                  className="mb-4 flex min-w-full snap-start flex-col items-center px-6 md:last:mr-80 lg:last:mr-0"
                >
                  <div className="col-span-full grid min-h-full w-full grid-cols-4 gap-3 md:gap-4 lg:grid-cols-12">
                    <div className="col-span-full flex min-h-full flex-col gap-4 rounded-2xl border-[1px] border-tan-40 bg-tan-30 p-4 shadow-md lg:col-span-10 lg:col-start-2 lg:max-w-5xl">
                      <div className="flex flex-row items-center gap-3">
                        <step.ICON.SRC key={stepsKey} />
                        <h3 className="font-instrument text-3xl font-normal lg:text-4xl">
                          {step.HEADING}
                        </h3>
                      </div>
                      <p>{step.PARAGRAPH}</p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
          <div className="col-span-full flex translate-y-6 flex-row items-center justify-center gap-1 lg:translate-y-0">
            <StepIndicator stepVisible={hook.isFirstVisible} />
            <StepIndicator
              stepVisible={!hook.isFirstVisible && !hook.isLastVisible}
            />
            <StepIndicator stepVisible={hook.isLastVisible} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
