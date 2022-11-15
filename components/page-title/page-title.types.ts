import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BreadcrumbsInterface {
  name: string;
  href?: string;
}

export interface PageTitlePropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
  breadcrumbs: BreadcrumbsInterface[];
  isTitle?: boolean;
}
