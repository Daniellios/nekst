export interface ICartContext {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
}

export interface ICartItem {
  productID: number;
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
