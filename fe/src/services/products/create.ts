import { Product } from "@/entities/Product";
import { httpClient } from "../httpClient";

export async function createProduct(product: Product) {
  const { data } = await httpClient.post<Product>('/products', product);
  return data;
}