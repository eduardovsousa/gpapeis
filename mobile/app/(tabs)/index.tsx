import { Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@/components/ThemeContext";
import { useEffect } from "react";
import { Product } from "@/entities/Product";

const DashboardScreen = () => {
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";

  const containerStyle: {} = {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  };

  const textStyle = {
    color: isDarkMode ? "white" : "black",
    fontSize: 16,
  };

  const backgroundColor = isDarkMode ? "#323236" : "#eee";

  const defaultProducts: Product[] = [
    {
      id: 1,
      name: "Papel Sulfite A4",
      description: "Pacote com 500 folhas",
      price: 15.0,
      quantity: 10,
      registrationDate: new Date().toLocaleDateString("pt-BR"),
      image:
        "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
    },
    {
      id: 2,
      name: "Envelope Carta",
      description: "Pacote com 100 envelopes",
      price: 20.0,
      quantity: 5,
      registrationDate: new Date().toLocaleDateString("pt-BR"),
      image:
        "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
    },
  ];

  const checkAndInitializeProducts = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem("products");
      if (!storedProducts) {
        await AsyncStorage.setItem("products", JSON.stringify(defaultProducts));
        console.log("Produtos padrão adicionados ao AsyncStorage");
      }
    } catch (error) {
      console.error("Erro ao verificar o AsyncStorage:", error);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      await AsyncStorage.setItem("products", JSON.stringify(defaultProducts));
    } catch (error) {
      console.error("Erro ao limpar o AsyncStorage:", error);
    }
  };

  useEffect(() => {
    checkAndInitializeProducts();
  }, []);

  return (
    <View style={[containerStyle, { backgroundColor }]}>
      <Text style={textStyle}>Página de dashboard</Text>
      <TouchableOpacity
        onPress={clearStorage}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "#7652DB",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Limpar AsyncStorage
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: isDarkMode ? "#fff" : "#232323",
          fontSize: 10,
          marginTop: 10,
        }}
      >
        *Ao limpar o AsyncStorage, será recadastrado itens automáticamente
      </Text>
    </View>
  );
};

export default DashboardScreen;
