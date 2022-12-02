import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalPortalPropsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
  className?: string;
}
