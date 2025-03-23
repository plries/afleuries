import { useScroll, useTransform } from "framer-motion";

export const useContact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const startDate = "03/23/2025";
  const endDate = "03/29/2025";

  const checkDate = () => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return now >= start && now <= end;
  };

  return {
    scrollYProgress,
    y,
    rotate,
    checkDate,
  };
};
