import React, { useState, type FC } from "react";

import { createContext, useContext } from "react";
import type { ICartItem, ICartContext } from "../types/product.interface";

export interface IAppProps {
  children: React.ReactNode;
}
export const CartContext = createContext<ICartContext | null>(null);

export const AppState: FC<IAppProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (newProduct: ICartItem) => {
    const newList = cart.filter(
      (product) => product.productID !== newProduct.productID
    );
    const newCartItem = newProduct;
    setCart([...newList, newCartItem]);
  };

  const deleteFromCart = (product: ICartItem) => {
    const newCartItem = product;
    setCart([...cart, newCartItem]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppState;
