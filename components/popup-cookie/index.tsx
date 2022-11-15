import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

import Portal from "@components/portal";
import Button from "@ui/button";

import styles from "./popup-cookie.module.scss";
import { Transition, TransitionStatus } from "react-transition-group";
import cn from "classnames";

const PopupCookie = (): JSX.Element | null => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const data = Cookies.get("cookie-consent");
    if (!data) {
      setVisible(true);
    }
  }, []);

  const handleClick = () => {
    Cookies.set("cookie-consent", "agreed");
    setVisible(false);
  };

  return (
    <Portal>
      <Transition nodeRef={ref} in={visible} timeout={300} unmountOnExit>
        {(transitionClassName: TransitionStatus) => (
          <div className={cn(styles.container, transitionClassName)}>
            <p>
              Продолжая работу с данным сайтом Вы даёте согласие на
              автоматизированную обработку, Ваших персональных данных. В случае
              несогласия с обработкой персональных данных Вам необходимо
              прекратить использование сайта или отключить файлы cookie в
              настройках используемого Вами браузера.
            </p>
            <Button className={styles.button} onClick={handleClick}>
              Понятно
            </Button>
          </div>
        )}
      </Transition>
    </Portal>
  );
};

export default PopupCookie;
