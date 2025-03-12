export type ButtonPropTypes = Readonly<{
    children: React.ReactNode;
    additionalClasses?: {
        button?: string[];
    };
    onClick?: () => {};
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<HTMLButtonElement>;
}>