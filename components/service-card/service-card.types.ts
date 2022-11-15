import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
  SVGProps,
} from "react";

export interface ServiceCardDataInterface {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
  description: string[];
}

export type ServiceCardPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLLinkElement | HTMLDivElement>,
  HTMLLinkElement | HTMLDivElement
> &
  ServiceCardDataInterface;

export type WrapperCardType = DetailedHTMLProps<
  HTMLAttributes<HTMLLinkElement | HTMLDivElement>,
  HTMLLinkElement | HTMLDivElement
> & { children: ReactNode; href: string };
