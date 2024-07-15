import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider as ThemeProviderNative } from '@react-navigation/native';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  colorScheme: Theme;
  textColor: string; 
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'light',
  textColor: 'black',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const nativeColorScheme = useNativeColorScheme();
  const [colorScheme, setColorScheme] = useState<Theme>(nativeColorScheme || 'light');

  useEffect(() => {
    const loadTheme = async () => {
      const theme = (await AsyncStorage.getItem('theme')) as Theme;
      if (theme) {
        setColorScheme(theme);
      } else {
        setColorScheme(nativeColorScheme || 'light');
      }
    };
    loadTheme();
  }, [nativeColorScheme]);

  useEffect(() => {
    if (colorScheme) {
      AsyncStorage.setItem('theme', colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    setColorScheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <ThemeContext.Provider value={{ colorScheme, textColor, toggleTheme }}>
      <ThemeProviderNative value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProviderNative>
    </ThemeContext.Provider>
  );
};
