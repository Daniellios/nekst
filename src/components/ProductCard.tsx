import React, { type FC } from "react";
import type { IProduct } from "../types/product.interface";
import ProductCartManager from "./ProductCartManager";
import { calculatePrice } from "../utils/calculatePrice";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Tag, { TagStyle } from "./svg/Tag";
import ProductCardReview from "./ProductCardReview";

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
    <div className={styles.product__card}>
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
        <ProductCardReview {...rating} category={category}></ProductCardReview>

        {/* DESCRIPTION AND PRICE */}
        <div className={styles.product__info}>
          <p className={styles.product__description}>{description}</p>

          <span className={styles.product__price}>
            {calculatePrice(price)} ₽
            <span className={styles.product__price_qty}> /шт.</span>
          </span>
        </div>

        <ProductCartManager productID={id}></ProductCartManager>
      </div>
    </div>
  );
};

export default ProductCard;
