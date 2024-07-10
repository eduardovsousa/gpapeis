import { Product } from "@/entities/Product";

export async function fetchProducts() {
  const products = localStorage.getItem('products');
  if (products) {
    return JSON.parse(products) as Product[];
  }
  return [];
}
