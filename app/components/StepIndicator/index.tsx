import { StepIndicatorPropTypes } from "./types";

export const StepIndicator = ({ stepVisible }: StepIndicatorPropTypes) => {
  return (
    <div
      className={`h-2 rounded-full border-[1px] transition-all duration-300 ease-in-out ${stepVisible ? "w-4 border-blue-100 bg-blue-10" : "border-tan-60 w-2 bg-tan-30"}`}
    ></div>
  );
};
