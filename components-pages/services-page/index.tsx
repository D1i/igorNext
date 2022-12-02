import MainWrapper from "@components/main-wrapper";
import OurServices from "@components/our-services";
import PageTitle from "@components/page-title";
import Head from "next/head";

const breadcrumbs = [{ name: "Услуги" }];

const ServicesPage = (): JSX.Element => (
  <MainWrapper>
    <Head>
      <title>Услуги | Бюро по защите интеллектуальных прав</title>
      <meta
        name="description"
        content="Оказываем услуги по охране, защите и регистрации объектов интеллектуальной собственности. Представляем Ваши права в СИП и иных судах, ППС, УФАС, Полиции."
      />
      <meta
        name="keywords"
        content="интеллектуальное право, юрист, защита интеллектуальных прав"
      />
    </Head>
    <PageTitle title={"Услуги"} breadcrumbs={breadcrumbs} />
    <OurServices />
  </MainWrapper>
);

export default ServicesPage;
