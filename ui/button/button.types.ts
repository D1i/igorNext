import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export enum ButtonAppearance {
  secondary,
}

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance?: ButtonAppearance;
}
