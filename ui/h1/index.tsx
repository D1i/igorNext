import { H1Props } from "./h1.types";
import cn from "classnames";
import styles from "./h1.module.scss";

const H1 = ({
  children,
  secondaryColor,
  className,
  ...props
}: H1Props): JSX.Element => {
  return (
    <h1
      className={cn(styles.title, className, {
        [styles.secondary]: secondaryColor,
      })}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1;
