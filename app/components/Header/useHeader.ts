import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

export const useHeader = () => {
    const { scrollY } = useScroll();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const updateSticky = () => {
            setIsSticky(scrollY.get() > 50);
        };
    
        const unsubscribe = scrollY.on("change", updateSticky);
        return () => unsubscribe();
    }, [scrollY]);

    const maxWidth = isSticky ? "max-w-[calc(1280px-3rem)]" : "md:max-w-screen-xl";
    const width = isSticky ? "w-[calc(100%-3rem)]" : "w-[calc(100%-3rem)] md:w-full lg:";

    return {
        maxWidth,
        width
    };
}