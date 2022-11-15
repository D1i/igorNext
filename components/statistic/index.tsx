import { useRef } from "react";
import styles from "./statistic.module.scss";
import ScalesImg from "@public/icons/scales.png";
import BriefCaseImg from "@public/icons/briefcase.png";
import HammerImg from "@public/icons/hammer.png";
import PeoplesImg from "@public/icons/peoples.png";
import cn from "classnames";
import StatisticCounter from "@components/statistic-counter";
import useIntersectionObserver from "@hooks/useIntersectionObserver";

const Statistic = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref);
  return (
    <section className={styles.section}>
      <div ref={ref} className={cn("container", styles.container)}>
        <StatisticCounter
          count={150}
          title={"Успешных дел"}
          src={ScalesImg}
          alt={"Успешных дел"}
          visible={isIntersecting}
        />
        <StatisticCounter
          count={20}
          title={"Лет практики"}
          src={HammerImg}
          alt={"Лет практики"}
          visible={isIntersecting}
        />
        <StatisticCounter
          count={100}
          title={"Довольных клиентов"}
          src={PeoplesImg}
          alt={"Довольных клиентов"}
          visible={isIntersecting}
        />
        <StatisticCounter
          count={300}
          title={"Оказанных консультаций"}
          src={BriefCaseImg}
          alt={"казанных консультаций"}
          visible={isIntersecting}
        />
      </div>
    </section>
  );
};

export default Statistic;
