import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewSinglePropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  description: string;
  firstname: string;
  lastname: string;
  company?: string;
  position: string;
}
