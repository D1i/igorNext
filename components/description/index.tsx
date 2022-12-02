import { DescriptionPropsInterface } from "./description.types";
import cn from "classnames";
import styles from "./description.module.scss";
import Image from "next/image";
import MariaImg from "@public/images/person/ermolaeva-mariya-law.jpeg";

const Description = ({
  title,
  className,
  children,
}: DescriptionPropsInterface) => {
  return (
    <section className={cn(styles.section, "container", className)}>
      <div className={styles.col}>
        <Image
          layout={"responsive"}
          alt={"Ермолаева Мария Сергеевна"}
          width={270}
          height={320}
          objectFit="cover"
          objectPosition="top"
          src={MariaImg}
        />
      </div>
      <div className={styles.col}>
        <h2>Наши преимущества</h2>
        <span className={styles.text}>
          Специализируемся на защите и регистрации интеллектуальных прав более
          20 лет.
        </span>
        <ul className={styles.list}>
          <li>
            Имеем профильное образование в сфере интеллектуальной собственности.
          </li>
          <li>
            Ежегодно повышаем квалификацию в ведущих международных и российских
            образовательных организациях.
          </li>
          <li>Работаем по всему миру, в т.ч. дистанционно.</li>
          <li>Обеспечиваем комплексный подход к решению Ваших задач</li>
          <li>
            Сотрудничаем с авторитетными патентными поверенными и экспертами в
            сфере интеллектуальной собственности.
          </li>
          <li>
            Регулярно изучаем судебную практику с целью более грамотного
            представления Ваших интересов.
          </li>
        </ul>
        <span className={styles.text}>
          Оказываем услуги на русском, английском и итальянском языках.
        </span>
      </div>
    </section>
  );
};

export default Description;
