import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/products';

export function useFetchProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.fetchProducts,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productService.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
}
