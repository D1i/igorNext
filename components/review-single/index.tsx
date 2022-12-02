import Image from "next/image";

import styles from "./review-single.module.scss";

import Quotes from "@public/icons/quotes.png";
import { ReviewSinglePropsInterface } from "./review-single.types";

const ReviewSingle = ({
  firstname,
  lastname,
  position,
  description,
  company,
}: ReviewSinglePropsInterface): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.imageQuotes}>
        <Image src={Quotes} alt={"Кавычки"} width={25} height={25} />
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.personInfo}>
        <span className={styles.name}>
          {firstname} {lastname}
        </span>
        <span>{company}</span>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default ReviewSingle;
