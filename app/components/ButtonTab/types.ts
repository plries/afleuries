export type ButtonTabPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: {
    button?: string[];
  };
  onClick?: () => void;
  ref?: React.RefObject<HTMLButtonElement>;
}>;
