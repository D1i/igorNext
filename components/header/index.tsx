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
import {Header as NewHeader} from "@components-pages/main-page-new/blocks";

const Header = (): JSX.Element => {
  const { pathname } = useRouter();
  const pathMainPage = pathname === "/";

  return (
    <NewHeader />
  );
};

export default Header;
