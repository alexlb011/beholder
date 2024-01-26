import { Product } from "./Product";
export interface Order {
  client_name: string;
  client_payMode: string;
  client_withdrawalMode: string;
  client_numberfone?: string;
  client_adress?: string;
  client_products: Product[];
}
