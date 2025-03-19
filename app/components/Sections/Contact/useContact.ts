import { useScroll, useTransform } from "framer-motion";

export const useContact = () => {
    
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 225]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -15]);
    
    return {
        scrollYProgress,
        y,
        rotate
    }
}
