import Head from "next/head";
import MainWrapper from "@components/main-wrapper";
import Banner from "@components/banner";
import Description from "@components/description";
import Statistic from "@components/statistic";
import OurServices from "@components/our-services";
import Reviews from "@components/reviews";
import OurTeam from "@components/our-team";

const MainPage = (): JSX.Element => (
  <>
    <Head>
      <title>Бюро по защите интеллектуальных прав</title>
      <meta
        name="description"
        content="Бюро по защите интеллектуальных прав. Предлагаем Вам полный комплекс профессиональных услуг в сфере интеллектуальной собственности."
      />
      <meta
        name="keywords"
        content="интеллектуальное право, юрист, защита интеллектуальных прав"
      />
    </Head>
    <MainWrapper>
      <Banner />
      <Description title={"Наши преимущества"} />
      <Statistic />
      <OurServices />
      <Reviews />
      <OurTeam />
    </MainWrapper>
  </>
);

export default MainPage;
