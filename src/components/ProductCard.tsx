import React, { type FC } from "react";
import type { IProduct } from "../types/product.interface";
import ProductCardCart from "./ProductCardCart";
import { calculatePrice } from "../utils/calculatePrice";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Tag, { TagStyle } from "./svg/Tag";
import ProductaCardReview from "./ProductaCardReview";

const ProductCard: FC<IProduct> = ({
  id,
  price,
  category,
  description,
  image,
  rating,
  title,
}) => {
  return (
    <div key={id} className={styles.product__card}>
      {rating.count >= 300 ? (
        <div className={styles.product__card_hit}>
          <Tag style={TagStyle.red} title="Хит"></Tag>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.product__card_image}>
        <Image src={image} width={220} height={220} alt={title}></Image>
      </div>

      <div className={styles.product__card_info}>
        {/* CATERGOTY AND REVIEW */}
        <div className={styles.product__ratings}>
          <p className={styles.product__category}>{category}</p>

          <ProductaCardReview {...rating}></ProductaCardReview>
        </div>

        {/* DESCRIPTION AND PRICE */}
        <div className={styles.product__info}>
          <p className={styles.product__description}>{description}</p>

          <span className={styles.product__price}>
            {calculatePrice(price)} ₽
            <span className={styles.product__price_qty}> /шт.</span>
          </span>
        </div>

        <ProductCardCart productID={id}></ProductCardCart>
      </div>
    </div>
  );
};

export default ProductCard;
