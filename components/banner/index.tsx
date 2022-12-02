import cn from "classnames";
import React, { memo, useContext } from "react";
import Image from "next/image";
import HammerImage from "@public/images/hammer.png";
import { AppContext } from "@context/app.context";
import Button from "@ui/button";
import H1 from "@ui/h1";

import styles from "./banner.module.scss";

const Banner = (): JSX.Element => {
  const { setFeedbackModal } = useContext(AppContext);
  const openModal = () => setFeedbackModal(true);

  return (
    <div className={styles.banner}>
      <div className={cn("container", styles.container)}>
        <div className={cn(styles.description, styles.col)}>
          <H1 secondaryColor className={styles.title}>
            БЮРО ПО ЗАЩИТЕ
            <br />
            ИНТЕЛЛЕКТУАЛЬНЫХ
            <br />
            ПРАВ
          </H1>
          <p>Защита ваших прав должна быть грамотной и достойной.</p>
          <Button onClick={openModal} className={styles.button}>
            Обратиться за помощью
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
