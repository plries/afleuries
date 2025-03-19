export type ButtonLinkPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: {
    button?: string[];
  };
  onClick: string;
  icon?: React.ReactNode;
}>;
