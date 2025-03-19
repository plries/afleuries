export type IconButtonPropTypes = Readonly<{
    children: React.ReactNode;
    additionalClasses?: {
        button?: string[];
    };
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<HTMLButtonElement>;
    disabled?: boolean;
    icon?: React.ReactNode;
}>