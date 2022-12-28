export interface IAppContext {
  cart: ICartItem[];
  favorites: IFavoriteItem[];
  addToCart: (product: ICartItem) => void;
  addToFavorite: (product: IFavoriteItem) => void;
}

export interface IFavoriteItem {
  productID: number;
  productName: string;
  productImg: string;
}

export interface ICartItem {
  productID: number;
  productName: string;
  productImg: string;
  quantity: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
