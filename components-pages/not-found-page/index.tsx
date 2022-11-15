import styles from "./not-found.module.scss";
import cn from "classnames";
import MainWrapper from "@components/main-wrapper";
import Head from "next/head";

const style = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const NotFoundPage = (): JSX.Element => {
  return (
    <MainWrapper style={style}>
      <Head>
        <title>
          Страница не найдена | Бюро по защите интеллектуальных прав
        </title>
        <meta
          name="description"
          content="Бюро по защите интеллектуальных прав. Предлагаем Вам полный комплекс профессиональных услуг в сфере интеллектуальной собственности."
        />
        <meta
          name="keywords"
          content="интеллектуальное право, юрист, защита интеллектуальных прав"
        />
      </Head>
      <h1 className={cn("container", styles.error)}>404</h1>
    </MainWrapper>
  );
};

export default NotFoundPage;
