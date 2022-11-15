import styles from "./mobile-menu.module.scss";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navList } from "@components/header/header.constants";
import { NavInterface } from "@components/header/header.types";

const MobileMenu = (): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector<HTMLBodyElement>(
      "body"
    ) as HTMLBodyElement;
    if (toggle) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [toggle]);

  const onToggle = () => {
    setToggle((state: boolean) => !state);
  };

  return (
    <div className={styles.mobileMenu}>
      <button
        onClick={onToggle}
        className={cn("resetButton", styles.button, {
          [styles.active]: toggle,
        })}
        aria-label={
          toggle ? "Закрыть меню навигации" : "Открыть меню навигации"
        }
      >
        <span className={cn()} />
      </button>
      <div
        className={cn(styles.wrapper, {
          [styles.wrapperActive]: toggle,
        })}
      >
        <ul>
          {navList.map(({ href, name }: NavInterface) => (
            <li key={href}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
