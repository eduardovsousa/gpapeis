import { Tabs } from 'expo-router';
import { StyleSheet, useColorScheme, View } from 'react-native';

import Header from '@/components/header/Component';
import HomeIcon from '@/components/icons/Home';
import MenuIcon from '@/components/icons/Menu';
import ProductIcon from '@/components/icons/Product';
import SettingsIcon from '@/components/icons/Settings';
import StockIcon from '@/components/icons/Stock';
import { Colors } from '@/constants/Colors';

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const tabBarActiveTintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveTintColor,
        header: () => <Header />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.selectedScreen : null}>
              <HomeIcon color={color} focused={focused} />
            </View>
          ),
          tabBarLabelStyle: { color: colorScheme === 'dark' ? 'white' : 'black' }
        }}
      />
      <Tabs.Screen
        name="produtos"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.selectedScreen : null}>
              <ProductIcon color={color} focused={focused} />
            </View>
          ),
          tabBarLabelStyle: { color: colorScheme === 'dark' ? 'white' : 'black' }
        }}
      />
      <Tabs.Screen
        name="estoque"
        options={{
          title: 'Estoque',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.selectedScreen : null}>
              <StockIcon color={color} focused={focused} />
            </View>
          ),
          tabBarLabelStyle: { color: colorScheme === 'dark' ? 'white' : 'black' }
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.selectedScreen : null}>
              <SettingsIcon color={color} focused={focused} />
            </View>
          ),
          tabBarLabelStyle: { color: colorScheme === 'dark' ? 'white' : 'black' }
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.selectedScreen : null}>
              <MenuIcon color={color} focused={focused} />
            </View>
          ),
          tabBarLabelStyle: { color: colorScheme === 'dark' ? 'white' : 'black' }
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  selectedScreen: {
    backgroundColor: '#7652DB',
    width: 40,
    height: 40,
    padding: 25,
    margin: 'auto',
    textAlign: 'center',
    borderRadius: 100,
    transform: [{ translateY: -8 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
