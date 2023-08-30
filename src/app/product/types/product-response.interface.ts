import { ProductInterface } from './product.interface';

export interface ProductResponseInterface {
  products: ProductInterface[];
  total: number;
  skip: number;
  limit: number;
}
