import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IStockIconProps {
  color?: string;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function StockIcon({ color, focused, style }: IStockIconProps) {
  const colorScheme = useColorScheme();
  const defaultColor = color || (colorScheme === 'dark' ? 'white' : 'black');
  const strokeColor = focused ? 'white' : defaultColor;

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 25 25"
      fill="white"
      style={style}
    >
      <Path
        d="M22 3.21472H4C3.44772 3.21472 3 3.66244 3 4.21472V7.21472C3 7.76701 3.44772 8.21472 4 8.21472H22C22.5523 8.21472 23 7.76701 23 7.21472V4.21472C23 3.66244 22.5523 3.21472 22 3.21472Z"
       fill={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 8.21472V19.2147C5 19.7452 5.21071 20.2539 5.58579 20.6289C5.96086 21.004 6.46957 21.2147 7 21.2147H19C19.5304 21.2147 20.0391 21.004 20.4142 20.6289C20.7893 20.2539 21 19.7452 21 19.2147V8.21472"
       fill={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 12.2147H15"
       fill={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

