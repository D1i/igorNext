import MainWrapper from "@components/main-wrapper";
import PageTitle from "@components/page-title";
import { BreadcrumbsInterface } from "@components/page-title/page-title.types";
import { LawyersPagesDataInterface } from "@mock-data/lawyers-pages-data";
import Image from "next/image";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

import styles from "./lawyer-page.module.scss";

// import A from "@public/ermolaeva-mariya-docs/1.jpg";
// import B from "@public/ermolaeva-mariya-docs/2.jpg";
// import C from "@public/ermolaeva-mariya-docs/3.jpg";
// import D from "@public/ermolaeva-mariya-docs/4.jpg";
// import F from "@public/ermolaeva-mariya-docs/6.jpg";
// import G from "@public/ermolaeva-mariya-docs/7.jpg";
// import H from "@public/ermolaeva-mariya-docs/8.jpg";
// import I from "@public/ermolaeva-mariya-docs/9.jpg";
// import J from "@public/ermolaeva-mariya-docs/10.jpg";
// import K from "@public/ermolaeva-mariya-docs/11.jpg";
// import L from "@public/ermolaeva-mariya-docs/12.jpg";
// import M from "@public/ermolaeva-mariya-docs/13.jpg";
// import N from "@public/ermolaeva-mariya-docs/14.jpg";
// import O from "@public/ermolaeva-mariya-docs/15.jpg";
// import P from "@public/ermolaeva-mariya-docs/16.jpeg";
// import useWindowSize from "@hooks/useWindowSize";

// function importAll(r: any) {
//   return r.keys().map(r);
// }

// const images = importAll(
//   require.context(
//     "../../public/ermolaeva-mariya-docs/",
//     false,
//     /\.(png|jpe?g|svg)$/
//   )
// );

// const images = [B, C, D, F, G, H, I, J, K, L, M, N, O, P, A];

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
        {/* {eMail === "info@ermolaeva-patent.ru" && (
          <div className={styles.carousel}>
            <h2 className={styles.title}>Сертификаты</h2>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={images.length}
              visibleSlides={isMobile ? 1 : 2}
            >
              <Slider>
                {images.map((element: any, i: number) => {
                  return (
                    <Slide key={i} index={i}>
                      <Image
                        layout="responsive"
                        className={styles.img}
                        src={element}
                        alt="Сертификат"
                      />
                    </Slide>
                  );
                })}
              </Slider>
              <div className={styles.buttons}>
                <ButtonBack
                  className={styles.back}
                  aria-label="Предыдущий отзыв"
                >
                  Назад
                </ButtonBack>
                <ButtonNext
                  className={styles.next}
                  aria-label="Следующий отзыв"
                >
                  Вперед
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        )} */}
      </section>
    </MainWrapper>
  );
}
