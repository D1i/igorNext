import cn from "classnames";
import Link from "next/link";

import styles from "./footer.module.scss";

import ClockSvg from "@public/icons/clock.svg";
import MailSvg from "@public/icons/mail.svg";
import PhoneSvg from "@public/icons/phone-small.svg";
import Logo from "@public/logo-white.svg";
import { navList } from "@components/header/header.constants";
import { NavInterface } from "@components/header/header.types";
import { useRouter } from "next/router";

const Footer = (): JSX.Element => {
  const { pathname } = useRouter();
  const pathMainPage = pathname === "/";

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.wrapper)}>
        <div role={"banner"} className={styles.logo}>
          {pathMainPage ? (
            <Logo />
          ) : (
            <Link href={"/"}>
              <a
                className={styles.linkLogo}
                aria-label="Логотип компании, переход на главную страницу"
              >
                <Logo />
              </a>
            </Link>
          )}
          <p>
            Защита ваших прав должна <br /> быть грамотной и достойной
          </p>
          <ul className={styles.info}>
            <li>ИП Ермолаева Мария Сергеевна</li>
            <li>ОГРНИП 321631200027227</li>
            <li>ИНН 631817342440</li>
          </ul>
        </div>
        <div>
          <div className={styles.titleForList}>Контакты</div>
          <ul className={cn("resetUl", styles.contactsList)}>
            <li>
              <a href="tel:+79371770210">
                <span>
                  <PhoneSvg />
                </span>
                <span>+7 (937) 177-02-10</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@ermolaeva-patent.ru">
                <span>
                  <MailSvg />
                </span>
                <span>info@ermolaeva-patent.ru</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className={styles.titleForList}>Посетителям</div>
          <nav>
            <ul className={cn("resetUl", styles.contactsList)}>
              {navList.map(({ href, name }: NavInterface) => (
                <li key={href}>
                  <Link href={href}>
                    <a>{name.slice(0, 1) + name.slice(1).toLowerCase()}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <div className={styles.titleForList}>Документы</div>
          <nav>
            <ul className={cn("resetUl", styles.contactsList)}>
              <li>
                <a
                  href={"/documents/polzovatelskoe-soglashenie.pdf"}
                  target={"__blank"}
                >
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a
                  href={"/documents/politica-confidicialnosty.pdf"}
                  target={"__blank"}
                >
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={"container"}>
          <span>© Ермолаева Мария Сергеевна</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
