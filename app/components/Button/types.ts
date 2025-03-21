export type ButtonPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses: string[];
  onClick?: () => void;
  type: "button" | "reset" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
}>;
