import { StyleProp, useColorScheme, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IHomeIconProps {
  color?: string;
  focused?: boolean;
  style?: StyleProp<ViewStyle>;
}

const HomeIcon = ({ color, focused, style }: IHomeIconProps) => {
  const colorScheme = useColorScheme();
  const defaultColor = color || (colorScheme === 'dark' ? 'white' : 'black');
  const strokeColor = focused ? 'white' : defaultColor;

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 25 25"
      fill='transparent'
      style={style}
    >
      <Path
        d="M4 9.12378L13 2.12378L22 9.12378V20.1238C22 20.6542 21.7893 21.1629 21.4142 21.538C21.0391 21.9131 20.5304 22.1238 20 22.1238H6C5.46957 22.1238 4.96086 21.9131 4.58579 21.538C4.21071 21.1629 4 20.6542 4 20.1238V9.12378Z"
        stroke={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 22.1238V12.1238H16V22.1238"
        stroke={focused ? "white" : strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
