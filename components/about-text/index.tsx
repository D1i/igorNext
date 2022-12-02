import cn from "classnames";

import Image from "next/image";

import { AboutTextPropsTypes } from "./about-text.types";
import styles from "./about-text.module.scss";
import Award from "@public/icons/award.png";
import Balance from "@public/icons/balance.png";
import Bouble from "@public/icons/double.png";
import Trophy from "@public/icons/trophy.png";

const AboutText = ({ className, ...props }: AboutTextPropsTypes) => (
  <div className={cn("container", styles.container, className)} {...props}>
    <section>
      <h2 className={styles.title}>Почему именно мы?</h2>
      <div className={styles.text}>
        <p>
          Команда Бюро состоит из профессиональных юристов специализирующихся в
          области защиты интеллектуальной собственности и успешно осуществляющих
          свою деятельность более 20 лет. Виды нашей деятельности – широкий
          спектр юридических и патентных услуг по регистрации объектов
          интеллектуальной собственности в Роспатенте и ее защите в Палате по
          патентным спорам, суде по интеллектуальным правам, иных судах,
          прокуратуре и органах полиции, антимонопольных органах, в таможне.
        </p>
        <p>
          Партнерами Бюро являются авторитетные патентные поверенные и эксперты
          в сфере интеллектуальной собственности.
        </p>
        <p>
          Многолетний опыт работы, успешной практики и регулярное повышение
          квалификации в ведущих международных образовательных организациях (в
          т.ч. на английском языке) позволяют специалистам нашего Бюро
          осуществить комплексный многосторонний анализ Вашей проблемы и найти
          оптимально возможное верное решение.
        </p>
        <p>
          Услуги оказываются на русском, английском и итальянском языках по
          всему миру, в том числе, дистанционно.
        </p>
      </div>
    </section>
    <section className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={Award} alt="" width={45} height={35} />
        </div>
        <div>
          <h3>Профильное образование</h3>
          <p>
            Наши специалисты имеют профильное образование в ведущих вызах,
            специализирующиеся на интеллектуальной собственности.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={Balance} alt="" width={45} height={35} />
        </div>
        <div>
          <h3>Повышение квалификации</h3>
          <p>
            Наши юристы регулярно повышают квалификацию в ведущих международных
            и национальных организациях как: РОСПАТЕНТ/ФИПС, WIPO, РГАИС, МАСПК
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={Bouble} alt="" width={45} height={35} />
        </div>
        <div>
          <h3>Более 20 лет практики</h3>
          <p>
            Представляем Ваши интересы в судах различных юрисдикций, а также
            иных компетентных органах
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={Trophy} alt="" width={45} height={35} />
        </div>
        <div>
          <h3>Выигранные дела</h3>
          <p>
            На данный момент специалистами нашего Бюро успешно завершены более
            150 судебных дела
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutText;
