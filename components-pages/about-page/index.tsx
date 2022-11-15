import Head from "next/head";
import AboutText from "@components/about-text";
import MainWrapper from "@components/main-wrapper";
import PageTitle from "@components/page-title";
import Reviews from "@components/reviews";
import Statistic from "@components/statistic";

import styles from "./about-page.module.scss";

const breadcrumbs = [{ name: "О нас" }];

const AboutPage = (): JSX.Element => (
  <MainWrapper>
    <Head>
      <title>О нас | Бюро по защите интеллектуальных прав</title>
      <meta
        name="description"
        content="Наши специалисты имеют профильное образование по направлению «интеллектуальная собственность» и регулярно повышают свою квалификацию."
      />
      <meta
        name="keywords"
        content="интеллектуальное право, юрист, защита интеллектуальных прав"
      />
    </Head>
    <PageTitle title={"О нас"} breadcrumbs={breadcrumbs} />
    <AboutText className={styles.aboutText} />
    <Statistic />
    <Reviews className={styles.about} />
  </MainWrapper>
);

export default AboutPage;
