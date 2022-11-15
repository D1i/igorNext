import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./header.module.scss";

import MailSVG from "@public/icons/mail.svg";
import PhoneSVG from "@public/icons/phone-small.svg";
import Logo from "@public/logo.svg";
import { navList } from "@components/header/header.constants";
import { NavInterface } from "./header.types";
import MobileMenu from "@components/mobile-menu";

const Header = (): JSX.Element => {
  const { pathname } = useRouter();
  const pathMainPage = pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={cn("container", styles.topHeaderContainer)}>
          <div className={styles.contacts}>
            <a
              className={styles.link}
              href="tel:+79371770210"
              aria-label="+7 (937) 177-02-10"
            >
              <PhoneSVG />
              <span> +7 (937) 177-02-10</span>
            </a>
            <a
              className={styles.link}
              href="mailto:info@ermolaeva-patent.ru"
              aria-label="info@ermolaeva-patent.ru"
            >
              <MailSVG />
              <span> info@ermolaeva-patent.ru</span>
            </a>
          </div>
        </div>
      </div>
      <div className={cn("container", styles.bottomHeader)}>
        {pathMainPage ? (
          <div className={styles.logo}>
            <Logo />
          </div>
        ) : (
          <Link href={"/"}>
            <a
              className={styles.logo}
              aria-label="Логотип компании, переход на главную страницу"
            >
              <Logo />
            </a>
          </Link>
        )}
        <nav className={styles.nav}>
          <ul className={cn("resetUl", styles.desktopNav)}>
            {navList.map(({ href, name }: NavInterface) => (
              <li key={href}>
                <Link href={href}>
                  <a
                    className={cn(styles.navLink, {
                      [styles.navLinkActive]: pathname === href,
                    })}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
