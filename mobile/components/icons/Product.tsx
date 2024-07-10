import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IProductIconProps {
  color?: string;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function ProductIcon({ color, focused, style }: IProductIconProps) {
  const colorScheme = useColorScheme();
  const defaultColor = color || (colorScheme === 'dark' ? 'white' : 'black');
  const strokeColor = focused ? 'white' : defaultColor;

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 25 25"
      fill="none"
      style={style}
    >
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M2.86365 6.2778H6.86365"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M2.86365 10.2778H6.86365"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M2.86365 14.2778H6.86365"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M2.86365 18.2778H6.86365"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M18.8636 2.2778H6.86365C5.75908 2.2778 4.86365 3.17323 4.86365 4.2778V20.2778C4.86365 21.3824 5.75908 22.2778 6.86365 22.2778H18.8636C19.9682 22.2778 20.8636 21.3824 20.8636 20.2778V4.2778C20.8636 3.17323 19.9682 2.2778 18.8636 2.2778Z"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M10.3636 8.2778H15.3636"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M10.3636 12.2778H16.8636"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke={focused ? "white" : strokeColor}
        d="M10.3636 16.2778H14.8636"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
