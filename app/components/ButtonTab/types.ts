export type ButtonTabPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: string[];
  onClick: () => void;
  ref: React.RefObject<HTMLButtonElement>;
}>;
