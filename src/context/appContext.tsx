import React, { useState, type FC } from "react";

import { createContext } from "react";
import type {
  ICartItem,
  IAppContext,
  IFavoriteItem,
} from "../types/product.interface";

export interface IAppProps {
  children: React.ReactNode;
}

// ФУНКЦИОНАЛ КОРЗИНЫ и избранного сделал но,
//  НЕ стал делать отдельный интефейс для этого, можно посмотреть в Console log

export const AppContext = createContext<IAppContext | null>(null);

export const AppState: FC<IAppProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

  console.log("CART", cart);
  console.log("FAVORITES", favorites);

  const addToFavorite = (newFavorite: IFavoriteItem) => {
    const isInCart = favorites.find(
      (product) => product.productID === newFavorite.productID
    );
    if (isInCart) {
      const newList = favorites.filter(
        (product) => product.productID !== newFavorite.productID
      );
      setFavorites([...newList]);
    } else {
      const newFavoriteItem = newFavorite;
      setFavorites([...favorites, newFavoriteItem]);
    }
  };

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
    <AppContext.Provider value={{ cart, addToCart, favorites, addToFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
