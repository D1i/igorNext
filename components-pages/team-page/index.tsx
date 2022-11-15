import { FC } from "react";

import MainWrapper from "@components/main-wrapper";
import OurTeam from "@components/our-team";
import PageTitle from "@components/page-title";
import Head from "next/head";

const breadcrumbs = [{ name: "Наша команда" }];

const TeamsPage: FC = (): JSX.Element => (
  <MainWrapper>
    <Head>
      <title>Наша команда | Бюро по защите интеллектуальных прав</title>
      <meta
        name="description"
        content="Команда Бюро состоит из профессиональных юристов специализирующихся в области интеллектуальной собственности, и успешно осуществляет деятельность с 2016 года."
      />
      <meta
        name="keywords"
        content="интеллектуальное право, юрист, защита интеллектуальных прав"
      />
    </Head>
    <PageTitle title={"Наша команда"} breadcrumbs={breadcrumbs} />
    <OurTeam />
  </MainWrapper>
);

export default TeamsPage;
