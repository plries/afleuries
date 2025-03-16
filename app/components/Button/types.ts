export type ButtonPropTypes = Readonly<{
    children: React.ReactNode;
    additionalClasses?: {
        button?: string[];
    };
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<HTMLButtonElement>;
    disabled?: boolean;
}>