import React, { useState, type FC } from "react";

import { createContext } from "react";
import type { ICartItem, ICartContext } from "../types/product.interface";

export interface IAppProps {
  children: React.ReactNode;
}

// ФУНКЦИОНАЛ КОРЗИНЫ, НЕ стал делать отдельный интефейс для этого, можно посмотреть в Console log
export const CartContext = createContext<ICartContext | null>(null);

export const AppState: FC<IAppProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  console.log(cart);

  const addToCart = (newProduct: ICartItem) => {
    const isInCart = cart.find(
      (product) => product.productID === newProduct.productID
    );
    if (isInCart) {
      const newList = cart.filter(
        (product) => product.productID !== newProduct.productID
      );
      setCart([...newList]);
    } else {
      const newCartItem = newProduct;
      setCart([...cart, newCartItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
