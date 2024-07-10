import { httpClient } from "../httpClient";

export async function deleteProduct(id: number) {
  const { data } = await httpClient.delete<void>(`/products/${id}`);
  return data;
}
