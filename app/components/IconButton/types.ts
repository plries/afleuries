export type IconButtonPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: {
    button?: string[];
  };
  disabled: boolean;
  onClick: () => void;
}>;
