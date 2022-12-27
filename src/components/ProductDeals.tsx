import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../styles/Deal.module.scss";
import Tag, { TagStyle } from "../svg/Tag";

const ProductDeals = () => {
  return (
    <div className={styles.deal}>
      <div className={styles.deal__top}>
        <h1 className={styles.deal__title}>Всё для комфортной работы</h1>
        <Image
          src={"/arrow.png"}
          width={40}
          height={16}
          alt="right pointong arrow"
        ></Image>
      </div>

      <div className={styles.deal__bottom}>
        <div className={styles.deal__banner_first}>
          <div className={styles.deal__banner_img}>
            <Image
              src={"/deal-image1.png"}
              width={167}
              height={140}
              alt="-25 % на товары для кабинета"
            ></Image>
          </div>
          <div className={styles.deal__banner_description}>
            <Tag style={TagStyle.yellow} title="-25%"></Tag>
            <div className={styles.deal__banner_text}>
              <p>на товары для кабинета</p>
              <Link href={"/"}>Выбрать</Link>
            </div>
          </div>
        </div>

        <div className={styles.deal__banner_second}>
          <div className={styles.deal__banner_description}>
            <Tag style={TagStyle.yellow} title="10%"></Tag>

            <div className={styles.deal__banner_text}>
              <p>Скидка на перифирию</p>
              <Link href={"/"}>Выбрать</Link>
            </div>
          </div>

          <div className={styles.deal__banner_img}>
            <Image
              src={"/deal-image2.png"}
              width={185}
              height={140}
              alt="10 скидка на перифирию для компьютера"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeals;
