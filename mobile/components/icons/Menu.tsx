import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IMenuIconProps {
  color?: string;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function MenuIcon({ color, focused, style }: IMenuIconProps) {
  const colorScheme = useColorScheme();
  const defaultColor = color || (colorScheme === 'dark' ? 'white' : 'black');
  const strokeColor = focused ? 'white' : defaultColor;

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 25 25"
      fill={focused ? "white" : strokeColor}
      style={style}>
      <Path
        d="M4.5 12.596H20.5"
        stroke={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 6.59599H20.5"
        stroke={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 18.596H20.5"
        stroke={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
