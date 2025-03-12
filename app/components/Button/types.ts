export type ButtonPropTypes = Readonly<{
    children: React.ReactNode;
    additionalClasses?: {
        button?: string[];
    };
    onClick?: any
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<HTMLButtonElement>;
}>