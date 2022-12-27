import React, { type FC } from "react";

import { createContext, useContext } from "react";
import { type ICart } from "../types/product.interface";

export interface IAppProps {
  children: React.ReactNode;
}
export const CartContext = createContext<ICart[]>([]);

export const AppState: FC<IAppProps> = ({ children }) => {
  return <CartContext.Provider value={[]}>{children}</CartContext.Provider>;
};

export function useAppContext() {
  return useContext(CartContext);
}
