export type ButtonLinkPropTypes = Readonly<{
  children: React.ReactNode;
  additionalClasses?: string[];
  href: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}>;
