import { Product } from "@/entities/Product";
import { httpClient } from "../httpClient";

export async function updateProduct(product: Product) {
  const { data } = await httpClient.put<Product>(`/products/${product.id}`, product);
  return data;
}