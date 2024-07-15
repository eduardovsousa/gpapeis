import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useTheme } from "../ThemeContext";
import UploadIcon from "../icons/Upload";
import { Product } from "@/entities/Product";
import useProductFormController from "@/controllers/useProductFormController";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
  onCancel: () => void;
  existingProduct?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({
  onAddProduct,
  onCancel,
  existingProduct,
}) => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
    image,
    errors,
    handlePickImage,
    handleSubmit,
  } = useProductFormController({ existingProduct, onAddProduct });

  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";

  const dynamicStyles = {
    container: {
      padding: 20,
      backgroundColor: isDarkMode ? "#232323" : "#fff",
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    text: {
      color: isDarkMode ? "#fff" : "#bbb",
    },
    input: {
      borderWidth: 1,
      borderColor: isDarkMode ? "#323236" : "#eee",
      backgroundColor: isDarkMode ? "#323236" : "#fff",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      color: isDarkMode ? "#eee" : "#838282",
    },
    errorText: {
      color: isDarkMode ? "red" : "red",
    },
    buttonText: {
      color: "#fff",
    },
    textHeader: {
      color: isDarkMode ? "#fff" : "#bbb",
    }
  };

  return (
    <View style={[dynamicStyles.container]}>
      <View
        style={{ borderBottomWidth: 1, borderColor: "#eee", paddingBottom: 12 }}
      >
        <Text style={[styles.label, dynamicStyles.textHeader]}>
          Cadastrar Produto
        </Text>
      </View>

      <Text style={[styles.label, dynamicStyles.text, { paddingTop: 12 }]}>
        Nome
      </Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={[styles.input, dynamicStyles.input]}
      />
      {errors.name && (
        <Text style={dynamicStyles.errorText}>{errors.name}</Text>
      )}
      <Text style={[styles.label, dynamicStyles.text]}>Descrição</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, dynamicStyles.input]}
      />
      {errors.description && (
        <Text style={dynamicStyles.errorText}>{errors.description}</Text>
      )}
      <Text style={[styles.label, dynamicStyles.text]}>Preço</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={[styles.input, dynamicStyles.input]}
        keyboardType="numeric"
      />
      {errors.price && (
        <Text style={dynamicStyles.errorText}>{errors.price}</Text>
      )}
      <Text style={[styles.label, dynamicStyles.text]}>Quantidade</Text>
      <TextInput
        value={quantity}
        onChangeText={setQuantity}
        style={[styles.input, dynamicStyles.input]}
        keyboardType="numeric"
      />
      {errors.quantity && (
        <Text style={dynamicStyles.errorText}>{errors.quantity}</Text>
      )}
      <TouchableOpacity onPress={handlePickImage} style={{ marginBottom: 5 }}>
        <Text style={[styles.label, dynamicStyles.text]}>Foto do Produto</Text>
        {image ? (
          <View
            style={{
              borderRadius: 10,
              width: "100%",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                objectFit: "cover",
                marginBottom: 30,
              }}
            />
            <View
              style={{
                backgroundColor: "#7557E8",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                padding: 2,
                position: "absolute",
                bottom: 0,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  width: "auto",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  padding: 10,
                  fontSize: 16,
                }}
              >
                <UploadIcon
                  style={{ width: 28, height: 28, marginBottom: -18 }}
                />
                Selecione um arquivo
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "#7557E8",
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Text
              style={{
                color: "#fff",
                width: "auto",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                padding: 10,
                fontSize: 16,
              }}
            >
              <UploadIcon
                style={{ width: 28, height: 28, marginBottom: -18 }}
              />
              Selecione um arquivo
            </Text>
          </View>
        )}
      </TouchableOpacity>
      {errors.image && (
        <Text style={dynamicStyles.errorText}>{errors.image}</Text>
      )}
      <View
        style={[
          styles.buttonsContainer,
          {
            borderTopWidth: 1,
            borderColor: "#eee",
            padding: 10,
            marginTop: 20,
          },
        ]}
      >
        <TouchableOpacity
          onPress={onCancel}
          style={[styles.button, { backgroundColor: "#5a5a5a" }]}
        >
          <Text style={[styles.buttonText, dynamicStyles.buttonText]}>
            Voltar 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={[styles.buttonText, dynamicStyles.buttonText]}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#7557E8",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  buttonText: {
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20
  },
});

export default ProductForm;
