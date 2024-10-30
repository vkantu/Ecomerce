export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}