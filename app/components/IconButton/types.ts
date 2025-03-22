export type IconButtonPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: string[];
  disabled?: boolean;
  onClick: () => void;
  name: string;
}>;
