'use client'
import { Product } from "@/entities/Product";
import { DataGridTypes } from "devextreme-react/cjs/data-grid";
import { useEffect, useState } from "react";

interface ITableController {
  products: Product[];
  onSelectProduct: (product: Product | null) => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

export default function useTableController({ onDeleteProduct, onEditProduct, onSelectProduct, products }: ITableController) {
  const [isMounted, setIsMounted] = useState(!products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const allowedPageSizes: (DataGridTypes.PagerPageSize | number)[] = [
    10, 20, 30,
  ];

  const handleMenuClick = (product: Product) => {
    setSelectedProduct(product);
    setMenuVisible(!menuVisible);
  };

  const handleEdit = () => {
    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
      onEditProduct(selectedProduct);
    }
    setMenuVisible(false);
  };

  const handleDelete = () => {
    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
      onDeleteProduct(selectedProduct.id);
    }
    setMenuVisible(false);
  };

  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  function formatPrice({ value }: { value: number }) {
    if (typeof value !== "number") return "";
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatQuantity({ value }: { value: any }) {
    return `${value} Und.`;
  }

  function formatDate({ value }: { value: string }) {
    const date = new Date(value);
    return date.toLocaleDateString("pt-BR");
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isMounted,
    allowedPageSizes,
    onSelectProduct,
    handleMenuClick,
    handleEdit,
    handleDelete,
    formatPrice,
    formatQuantity,
    formatDate,
    menuVisible,
    selectedProduct,
    truncateString
  }
}