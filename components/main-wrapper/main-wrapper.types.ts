import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainWrapperPropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}
