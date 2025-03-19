export type IconButtonPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: {
    button?: string[];
  };
  onClick?: () => void;
  ref?: React.RefObject<HTMLButtonElement>;
}>;
