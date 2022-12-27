import React, { type FC } from "react";
import styles from "../styles/Home.module.scss";
import calculateRating from "../utils/calculateRating";
import RatingStar from "./svg/RatingStar";
import { calculateReviews } from "../utils/calculateReviews";
import Link from "next/link";

interface IProductCardReview {
  category: string;
  rate: number;
  count: number;
}

const ProductCardReview: FC<IProductCardReview> = ({ rate, category }) => {
  return (
    <div className={styles.product__ratings}>
      <p className={styles.product__category}>{category}</p>

      {rate ? (
        <div className={styles.product__reviews}>
          <div>
            {calculateRating(rate).map((isRed: boolean, idx: number) => {
              return <RatingStar key={idx} isRed={isRed}></RatingStar>;
            })}
          </div>

          <Link href={"/"} className={styles.product__reviews_amount}>
            {calculateReviews(rate)}
          </Link>
        </div>
      ) : (
        <div className={styles.product__reviews}> </div>
      )}
    </div>
  );
};

export default ProductCardReview;
