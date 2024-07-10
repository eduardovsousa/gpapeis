import { useTheme } from '@/components/ThemeContext';
import { Text, View } from 'react-native';

const ProdutosScreen = () => {
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';

  const containerStyle: {} = {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 16,
  };

  const backgroundColor = isDarkMode ? '#222' : '#fff';

  return (
    <View style={[containerStyle, { backgroundColor }]}>
      <Text style={textStyle}>Página de produtos</Text>
    </View>
  );
};

export default ProdutosScreen;
