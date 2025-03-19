import { useScroll, useTransform } from "framer-motion";

export const useExperience = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return {
    scrollYProgress,
    y,
    rotate,
  };
};
