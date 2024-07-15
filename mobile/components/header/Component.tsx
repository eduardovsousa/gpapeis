import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import HomeIcon from '../icons/Home';
import MenuIcon from '../icons/Menu';
import ProductIcon from '../icons/Product';
import SettingsIcon from '../icons/Settings';
import StockIcon from '../icons/Stock';

const Header = () => {
  const state = useNavigationState(state => state);
  const currentRoute = state.routes[state.index].name;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderIcon = () => {
    switch (currentRoute) {
      case 'index':
        return <HomeIcon />;
      case 'produtos':
        return <ProductIcon />;
      case 'estoque':
        return <StockIcon />;
      case 'configuracoes':
        return <SettingsIcon />;
      case 'menu':
        return <MenuIcon />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {renderIcon()}
        <Text style={styles.title}>{currentRoute === 'index' ? 'Dashboard' : (currentRoute === 'configuracoes' ? 'Configurações' : capitalizeFirstLetter(currentRoute))}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#7652DB',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    height: 'auto',
  },
  title: {
    color: 'white',
    marginLeft: 8,
    fontSize: 18,
  },
});

export default Header;
