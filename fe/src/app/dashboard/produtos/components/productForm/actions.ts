'use client'
import { Product } from "@/entities/Product";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface IProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  product: Product | null;
}

export default function useProductFormController({ isOpen, onClose, onSave, product }: IProductFormProps) {
  const [formData, setFormData] = useState<Product>(
    product || {
      id: 0,
      name: "",
      description: "",
      price: 0,
      quantity: undefined,
      image: "",
      registrationDate: "",
    }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setCharCount(product.description.length);
      if (product.image) {
        setImagePreview(product.image);
      }
    } else {
      setFormData({
        id: 0,
        name: "",
        description: "",
        price: 0,
        quantity: undefined,
        image: "",
        registrationDate: "",
      });
      setCharCount(0);
      setImagePreview(null);
    }
  }, [product]);

  const formatReal = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "image" && files) {
      handleImageUpload(files);
    } else {
      let newValue: string | number = value;
      if (name === "price") {
        newValue = value.replace(/[^\d]/g, "");
        newValue = parseFloat(newValue) / 100;
      } else if (name === "description") {
        setFormData({ ...formData, [name]: value });
        setCharCount(value.length);
      } else {
        setFormData({ ...formData, [name]: value });
      }
      setFormData({ ...formData, [name]: newValue });
    }
  };

  const handleImageUpload = (files: FileList) => {
    try {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
  
        const itemSize = new TextEncoder().encode(base64String).length;
  
        const storageLimit =  2 * 1024 * 1024;
        if (itemSize > storageLimit) {
          toast.error("A imagem é muito grande para ser armazenada, limite de 1mb");
          return;
        }
  
        try {
          localStorage.setItem("productImage", base64String);
          setFormData({ ...formData, image: base64String });
          setImagePreview(base64String);
        } catch (e) {
          if (e instanceof DOMException && e.name === "QuotaExceededError") {
            toast.error("A imagem é muito grande para ser armazenada no localStorage.");
          } else {
            throw e;
          }
        }
      };
      reader.readAsDataURL(file);
    } catch {
      toast.error("Erro ao subir imagem");
    }
  };
  

  const handleSubmit = () => {
    const missingFields: string[] = [];

    if (!formData.name) missingFields.push("Nome");
    if (!formData.description) missingFields.push("Descrição");
    if (!formData.price) missingFields.push("Preço");
    if (!formData.quantity) missingFields.push("Quantidade");
    if (!formData.image) missingFields.push("Imagem");

    if (missingFields.length > 0) {
      toast.error(`Os seguintes campos são obrigatórios: ${missingFields.join(", ")}`);
      return;
    }

    try {
      setIsLoading(true);

      const updatedProduct = {
        ...formData,
        price: parseFloat(formData.price.toString()),
        quantity: parseInt(formData.quantity!.toString(), 10),
      };

      onSave(updatedProduct);
      onClose();
    } catch {
      toast.error("Ops, algo deu de errado");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    isLoading,
    charCount,
    imagePreview,
    formatReal,
    handleChange,
    handleSubmit,
    formData
  };
}
