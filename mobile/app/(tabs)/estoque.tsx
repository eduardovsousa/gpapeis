import { Text, View } from 'react-native';
import { useTheme } from '@/components/ThemeContext';

const EstoqueScreen = () => {
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

  const backgroundColor = isDarkMode ? '#323236' : '#eee';

  return (
    <View style={[containerStyle, { backgroundColor }]}>
      <Text style={textStyle}>Página de estoque</Text>
    </View>
  );
};

export default EstoqueScreen;
