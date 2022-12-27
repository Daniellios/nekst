import React, { type FC } from "react";
import type { IRating } from "../types/product.interface";
import styles from "../styles/Home.module.scss";
import calculateRating from "../utils/calculateRating";
import RatingStar from "../svg/RatingStar";
import { calculateReviews } from "../utils/calculateReviews";
import Link from "next/link";

const ProductaCardReview: FC<IRating> = ({ rate }) => {
  return (
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
  );
};

export default ProductaCardReview;
