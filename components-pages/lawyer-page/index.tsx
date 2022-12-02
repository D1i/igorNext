import MainWrapper from "@components/main-wrapper";
import PageTitle from "@components/page-title";
import { BreadcrumbsInterface } from "@components/page-title/page-title.types";
import { LawyersPagesDataInterface } from "@mock-data/lawyers-pages-data";
import Image from "next/image";

import styles from "./lawyer-page.module.scss";


export default function LawyerPage({
  title,
  description,
  photo,
  pageTitle,
  subtitle,
  tel,
  eMail,
}: LawyersPagesDataInterface): JSX.Element {
  const breadcrumbs: BreadcrumbsInterface[] = [
    { name: "Наша команда", href: "/team" },
    { name: title },
  ];
  // const { width } = useWindowSize();
  // const isMobile = width < 768;
  return (
    <MainWrapper>
      <PageTitle title={pageTitle} breadcrumbs={breadcrumbs} isTitle={false} />
      <section className={"container"}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.subtitle}>{subtitle}</div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className={styles.contacts}>
              <a href={`tel: ${tel}`}>{tel}</a>
              <a href={`mailto: ${eMail}`}>{eMail}</a>
            </div>
          </div>
          <div className={styles.images}>
            <Image
              className={styles.img}
              layout="responsive"
              width={640}
              height={768}
              src={photo}
              alt="Ермолаева Мария"
            />
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
