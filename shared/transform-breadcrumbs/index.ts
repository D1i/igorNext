import { BreadcrumbsInterface } from "@components/page-title/page-title.types";

export const transformBreadcrumbs = (
  breadcrumbs: BreadcrumbsInterface[]
): BreadcrumbsInterface[] => [{ name: "Главная", href: "/" }, ...breadcrumbs];
