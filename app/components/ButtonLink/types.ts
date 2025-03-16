export type ButtonLinkPropTypes = Readonly<{
    children: React.ReactNode;
    additionalClasses?: {
        button?: string[];
    };
    onClick?: string;
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<HTMLButtonElement>;
    icon?: React.ReactNode;
}>