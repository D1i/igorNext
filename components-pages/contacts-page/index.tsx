import cn from "classnames";
import Head from "next/head";

import MainWrapper from "@components/main-wrapper";
import PageTitle from "@components/page-title";
import ContactForm from "@components/contact-form";

import styles from "./contacts-page.module.scss";

const breadcrumbs = [{ name: "Контакты" }];

const ContactsPage = (): JSX.Element => (
  <MainWrapper>
    <Head>
      <title>Контакты | Бюро по защите интеллектуальных прав</title>
      <meta
        name="description"
        content="Запишитесь на консультацию и специалисты Бюро свяжутся с Вами в ближайшее время. +7 (937) 177-02-10"
      />
      <meta
        name="keywords"
        content="интеллектуальное право, юрист, защита интеллектуальных прав"
      />
    </Head>
    <PageTitle title={"Контакты"} breadcrumbs={breadcrumbs} />
    <section className={cn("container", styles.section)}>
      <h2 className={styles.title}>Запишитесь на консультацию</h2>
      <div className={styles.form}>
        <ContactForm />
      </div>
    </section>
  </MainWrapper>
);

export default ContactsPage;
