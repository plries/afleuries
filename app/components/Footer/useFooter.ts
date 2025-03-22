import { usePathname } from "next/navigation";

export const useFooter = () => {
  const pathname = usePathname();

  return {
    pathname,
  };
};
