import cn from "classnames";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import styles from "./reviews.module.scss";

import { IReviews, mockReviews } from "../../mock-data/reviews";
import { ReviewsPropsTypes } from "./reviews.types";
import ReviewSingle from "@components/review-single";
import ScalesImg from "@components/scales-img";
import useWindowSize from "@hooks/useWindowSize";

function generateHeight(width: number) {
  if (width > 1170) {
    return 35;
  } else if (width > 1030) {
    return 45;
  } else if (width > 925) {
    return 55;
  } else if (width > 825) {
    return 65;
  } else {
    return 70;
  }
}

const Reviews = ({ className }: ReviewsPropsTypes) => {
  const { width } = useWindowSize();
  return (
    <section className={cn(styles.section, className)}>
      <div className={cn("container", styles.container)}>
        <h2>Отзывы</h2>
        <ScalesImg />
        <div className={styles.reviewsContainer}>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={generateHeight(width)}
            visibleSlides={1}
            totalSlides={mockReviews.length}
          >
            <Slider>
              {mockReviews.map((element: IReviews, i) => (
                <Slide key={element.company} index={i} className={styles.slide}>
                  <ReviewSingle
                    description={element.description}
                    firstname={element.firstName}
                    lastname={element.lastName}
                    position={element.position}
                    company={element.company}
                  />
                </Slide>
              ))}
            </Slider>
            <div className={styles.buttons}>
              <ButtonBack className={styles.back} aria-label="Предыдущий отзыв">
                Предыдущий отзыв
              </ButtonBack>
              <ButtonNext className={styles.next} aria-label="Следующий отзыв">
                Следующий отзыв
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
