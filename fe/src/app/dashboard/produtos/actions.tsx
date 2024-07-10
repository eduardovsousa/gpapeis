import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Product } from "@/entities/Product";

export default function useProductsController() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAdd = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = () => {
      setIsModalOpen(true);
  };

  const handleDelete = () => {
      const updatedProducts = products.filter(
        (product) => product.id !== selectedProduct!.id
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setSelectedProduct(null);
      toast.success("Produto deletado com sucesso");
  };

  const handleSave = (product: Product) => {
    let updatedProducts;
    if (selectedProduct) {
      updatedProducts = products.map((p) =>
        p.id === selectedProduct.id ? product : p
      );
    } else {
      const newId =
        products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      updatedProducts = [
        ...products,
        {
          ...product,
          id: newId,
          registrationDate: new Date().toISOString().split("T")[0],
        },
      ];
    }
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsModalOpen(false);
    toast.success(
      selectedProduct
        ? "Produto atualizado com sucesso"
        : "Produto criado com sucesso"
    );
  };

  return {
    products,
    selectedProduct,
    isModalOpen,
    isMounted,
    setSelectedProduct,
    setIsModalOpen,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
  };
}
