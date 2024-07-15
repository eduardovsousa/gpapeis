import { Text, View } from "react-native";

import { useTheme } from "@/components/ThemeContext";
import ThemeSwitch from "@/components/ThemeSwitch";

const ConfiguracoesScreen = () => {
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === "dark";
  const backgroundColor = isDarkMode ? "#323236" : "#eee";

  const containerStyle = {
    flex: 1,
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "start" as "flex-start",
    backgroundColor: backgroundColor,
    padding: 20,
  };

  const borderStyle = {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    borderColor: backgroundColor,
    backgroundColor: isDarkMode ? "#424242" : "white",
    width: "100%" as "100%",
    marginBottom: 10,
    display: "flex" as "flex",
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    justifyContent: "space-between" as "space-between",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  };

  const textStyle = {
    color: isDarkMode ? "white" : "black",
    marginRight: 10,
    flex: 1,
  };

  return (
    <View style={containerStyle}>
      <View style={borderStyle}>
        <Text style={textStyle}>Trocar tema</Text>
        <ThemeSwitch />
      </View>
    </View>
  );
};

export default ConfiguracoesScreen;
