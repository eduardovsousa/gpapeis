import { useState, useEffect } from "react";
import { Product } from "@/entities/Product";
import * as ImagePicker from "expo-image-picker";

interface UseProductFormControllerProps {
  existingProduct?: Product | null;
  onAddProduct: (product: Product) => void;
}

const useProductFormController = ({
  existingProduct,
  onAddProduct,
}: UseProductFormControllerProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (existingProduct) {
      setName(existingProduct.name);
      setDescription(existingProduct.description);
      setPrice(existingProduct.price.toFixed(2).replace(".", ","));
      setQuantity(existingProduct.quantity!.toString());
      setImage(existingProduct.image);
    }
  }, [existingProduct]);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = "O nome é obrigatório.";
    if (!description) newErrors.description = "A descrição é obrigatória.";
    if (!price) newErrors.price = "O preço é obrigatório.";
    if (!quantity) newErrors.quantity = "A quantidade é obrigatória.";
    if (!image) newErrors.image = "A imagem é obrigatória.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct: Product = {
      id: existingProduct
        ? existingProduct.id
        : Math.floor(Math.random() * 10000),
      name,
      description,
      price: parseFloat(price.replace(",", ".")),
      quantity: parseInt(quantity),
      registrationDate: new Date().toLocaleDateString("pt-BR"),
      image,
    };

    onAddProduct(newProduct);
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setImage("");
    setErrors({});
  };

  return {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    image,
    setImage,
    errors,
    handlePickImage,
    handleSubmit,
  };
};

export default useProductFormController;
