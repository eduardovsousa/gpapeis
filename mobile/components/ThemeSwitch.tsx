import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MoonIcon from './icons/Moon';
import SunIcon from './icons/Sun';
import { useTheme } from './ThemeContext';

const ThemeSwitch = () => {
  const { colorScheme, toggleTheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';
  const [isOn, setIsOn] = useState(isDarkMode);

  const offset = useSharedValue(isOn ? 1 : 0);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleTheme();
    offset.value = withSpring(isOn ? 0 : 1, {
      stiffness: 700,
      damping: 30,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 32 }],
    };
  });

  return (
    <View style={[styles.container, isOn ? styles.containerDark : styles.containerLight]}>
      <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
        <Animated.View style={[styles.circle, { backgroundColor: isDarkMode ? '#323236' : 'white' }, animatedStyle]}>
          {isOn ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    borderRadius: 20,
    padding: 4,
  },
  containerLight: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  containerDark: {
    backgroundColor: '#323236',
    width: 80,
  },
  switchContainer: {
    flex: 1,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeSwitch;
