export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface ProductItemCart {
  product: Product;
  quantity: number;
}

