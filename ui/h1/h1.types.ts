import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface H1Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
  secondaryColor?: boolean;
}
