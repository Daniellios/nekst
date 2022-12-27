import React, { type FC, useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import styles from "../styles/Home.module.scss";
import Favorite from "./svg/Favorite";
import type { ICartContext, ICartItem } from "../types/product.interface";

interface IProductCartManager {
  productID: number;
}

const ProductCartManager: FC<IProductCartManager> = ({ productID }) => {
  const { addToCart } = useContext(CartContext) as ICartContext;

  const [productAmount, setProductAmount] = useState<number>(1);
  const [isInCart, setIsInCart] = useState<boolean>(false);

  const increaseProductAmount = () => {
    setProductAmount(productAmount + 1);
  };
  const decreaseProductAmount = () => {
    if (productAmount <= 1) setProductAmount(1);
    else {
      setProductAmount(productAmount - 1);
    }
  };

  const addProductToCart = () => {
    const newItem: ICartItem = {
      productID: productID,
      quantity: productAmount,
    };
    setIsInCart(!isInCart);
    addToCart(newItem);
  };

  return (
    <div className={styles.product__engage}>
      {isInCart ? (
        <button className={styles.product__cart_in} onClick={addProductToCart}>
          В корзинe
        </button>
      ) : (
        <div className={styles.product__cart_management}>
          <button
            className={styles.product__cart_add}
            onClick={addProductToCart}
          >
            В корзину
          </button>

          <div className={styles.product__amount}>
            <button
              className={styles.product__btn_amount}
              onClick={decreaseProductAmount}
            >
              <svg
                width="10"
                height="2"
                viewBox="0 0 10 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect opacity="0.3" width="10" height="2" fill="#2E2E33" />
              </svg>
            </button>
            <p>{productAmount}</p>
            <button
              className={styles.product__btn_amount}
              onClick={increaseProductAmount}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <rect y="4" width="10" height="2" fill="#2E2E33" />
                  <rect
                    x="6"
                    width="10"
                    height="2"
                    transform="rotate(90 6 0)"
                    fill="#2E2E33"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}

      <Favorite></Favorite>
    </div>
  );
};

export default ProductCartManager;
