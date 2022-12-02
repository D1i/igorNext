import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";
import { ButtonAppearance, ButtonProps } from "./button.types";

const Button = ({
  children,
  className,
  appearance = ButtonAppearance.secondary,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.secondaryColor]: appearance === ButtonAppearance.secondary,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
