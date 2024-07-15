import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  RefreshControl,
} from "react-native";

import ProductForm from "@/components/ProductForm/Component";
import useProductsController from "@/controllers/useProductsController";
import { Product } from "@/entities/Product";

const ProdutosScreen = () => {
  const {
    dynamicStyles,
    isDarkMode,
    handleMenuClick,
    menuVisibleItem,
    handleEdit,
    handleDelete,
    backgroundColor,
    isAddingProduct,
    selectedProduct,
    handleUpdateProduct,
    handleAddProduct,
    handleCancelAddProduct,
    handleAddNewProduct,
    products,
    keyExtractor,
    refreshing,
    onRefresh,
  } = useProductsController();

  const renderItem = ({ item }: { item: Product }) => (
    <View style={[dynamicStyles.container]}>
      <View style={{ flex: 0.18 }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      </View>
      <View style={{ flex: 0.8, marginLeft: 10, gap: 4 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: isDarkMode ? "#fff" : "#323236",
            }}
          >
            {item.name.length > 12
              ? `${item.name.substring(0, 9)}...`
              : item.name}
          </Text>
          <Text
            style={{ fontSize: 10, color: isDarkMode ? "#fff" : "#323236" }}
          >
            Data de cadastro: {item.registrationDate}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          style={{ fontSize: 10, color: isDarkMode ? "#fff" : "#323236" }}
        >
          {item.description.length > 100
            ? `${item.description.substring(0, 97)}...`
            : item.description}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 10, color: isDarkMode ? "#fff" : "#323236" }}
          >
            Valor: R$ {item.price.toFixed(2).replace(",", ".")}
          </Text>
          <Text
            style={{ fontSize: 10, color: isDarkMode ? "#fff" : "#323236" }}
          >
            Quantidade: {item.quantity} Und.
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.15 }}>
        <TouchableOpacity
          onPress={() => handleMenuClick(item.id)}
          style={{
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -55,
              right: 0,
              padding: 10,
              display: "flex",
            }}
          >
            <Text
              style={{
                color: isDarkMode ? "#fff" : "#323236",
              }}
            >
              .
            </Text>
            <Text
              style={{
                color: isDarkMode ? "#fff" : "#323236",
                marginTop: -10,
              }}
            >
              .
            </Text>
            <Text
              style={{
                color: isDarkMode ? "#fff" : "#323236",
                marginTop: -10,
              }}
            >
              .
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {menuVisibleItem === item.id && (
        <View
          style={{
            position: "absolute",
            right: 20,
            top: 30,
            zIndex: 10,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          }}
        >
          <TouchableOpacity
            onPress={() => handleEdit(item.id)}
            style={{
              backgroundColor: isDarkMode ? "#323236" : "#fff",
              padding: 10,
            }}
          >
            <Text
              style={{ color: isDarkMode ? "#fff" : "#323236", fontSize: 12 }}
            >
              Editar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={{
              backgroundColor: isDarkMode ? "#323236" : "#fff",
              padding: 10,
            }}
          >
            <Text
              style={{ color: isDarkMode ? "#fff" : "#323236", fontSize: 12 }}
            >
              Excluir
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor, padding: 20 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      {isAddingProduct ? (
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ProductForm
              onAddProduct={
                selectedProduct ? handleUpdateProduct : handleAddProduct
              }
              onCancel={handleCancelAddProduct}
              existingProduct={selectedProduct}
            />
          </ScrollView>
        </View>
      ) : (
        <>
          <TouchableOpacity
            onPress={handleAddNewProduct}
            style={{
              position: "absolute",
              top: 10,
              right: 25,
              borderWidth: 2,
              borderColor: "#7557E8",
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 5,
              zIndex: 10,
            }}
          >
            <Text
              style={{ color: isDarkMode ? "#fff" : "#7557E8", fontSize: 20 }}
            >
              +
            </Text>
          </TouchableOpacity>
          <Text style={{ color: isDarkMode ? "white" : "black", fontSize: 10 }}>
            *Arraste a tela para baixo caso precise atualizar
          </Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            style={{ paddingTop: 30 }}
          />
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default ProdutosScreen;
