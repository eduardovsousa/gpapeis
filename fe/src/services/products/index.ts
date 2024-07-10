import { createProduct } from './create';
import { deleteProduct } from './delete';
import { fetchProducts } from './get'
import { updateProduct } from './update';

export const productService = {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};