import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/entities/Product";
import { useTheme } from "@/components/ThemeContext";

const useProductsController = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [menuVisibleItem, setMenuVisibleItem] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isAddingProduct, setIsAddingProduct] = useState<boolean>(false);

  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";

  useEffect(() => {
    loadProducts();
  }, [refreshing]);


  const dynamicStyles = {
    container: {
      backgroundColor: isDarkMode ? "#323236" : "#fff",
      flex: 1,
      display: "flex" as "flex",
      flexDirection: "row" as "row",
      alignItems: "center" as "center",
      justifyContent: "space-between" as "space-between",
      padding: 10,
      paddingTop: 30,
      paddingBottom: 30,
      margin: 4,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  };

  const keyExtractor = (item: Product) => item.id.toString();

  const backgroundColor = isDarkMode ? "#323236" : "#eee";

  const handleAddNewProduct = () => {
    setSelectedProduct(null);
    setIsAddingProduct(true);
  };

  const loadProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem("products");
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));
      setIsAddingProduct(false);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      setProducts(updatedProducts);
      await AsyncStorage.setItem("products", JSON.stringify(updatedProducts));
      setSelectedProduct(null);
      setIsAddingProduct(false);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  };

  const handleCancelAddProduct = () => {
    setIsAddingProduct(false);
  };

  const handleMenuClick = (productId: number) => {
    if (menuVisibleItem === productId) {
      setMenuVisibleItem(null);
    } else {
      setMenuVisibleItem(productId);
    }
    setSelectedProduct(products.find((p) => p.id === productId) || null);
  };

  const handleEdit = (productId: number) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setSelectedProduct(productToEdit);
      setIsAddingProduct(true);
    }
    setMenuVisibleItem(null);
  };

  const handleDelete = (productId: number) => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja excluir este produto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              const updatedProducts = products.filter(
                (product) => product.id !== productId
              );
              setProducts(updatedProducts);
              await AsyncStorage.setItem(
                "products",
                JSON.stringify(updatedProducts)
              );
            } catch (error) {
              console.error("Erro ao excluir produto:", error);
            }
            setMenuVisibleItem(null);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const storedProducts = await AsyncStorage.getItem("products");
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [refreshing]);

  return {
    products,
    selectedProduct,
    menuVisibleItem,
    refreshing,
    isAddingProduct,
    setSelectedProduct,
    setIsAddingProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleCancelAddProduct,
    handleMenuClick,
    handleEdit,
    handleDelete,
    onRefresh,
    dynamicStyles,
    keyExtractor,
    backgroundColor,
    handleAddNewProduct,
    isDarkMode
  };
};

export default useProductsController;
