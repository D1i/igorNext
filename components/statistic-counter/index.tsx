import { StatisticCounterPropsType } from "./statistic-counter.types";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./statistic-counter.module.scss";

const StatisticCounter = ({
  count,
  title,
  className,
  src,
  visible,
}: StatisticCounterPropsType): JSX.Element => {
  const [animationCount, setAnimationCount] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animate = (time: number) => {
      let actualCount: number = 0;
      if (previousTimeRef.current != undefined) {
        setAnimationCount((prevCount: number) => {
          actualCount = prevCount + 10;
          if (actualCount > count) {
            actualCount = count;
          }
          return actualCount;
        });
      }
      previousTimeRef.current = time;
      if (count > actualCount) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(requestRef.current as number);
      }
    };

    if (visible) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [count, visible]);

  return (
    <div className={cn(styles.container, className)}>
      <Image alt={title} src={src} layout={"fixed"} width={75} height={58} />
      <div className={styles.counter}>
        {">"}&nbsp;{animationCount}
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default StatisticCounter;
