import Svg, { Path } from 'react-native-svg';

interface IMoonIconProps {

  onPress?: () => void;
}

export default function MoonIcon({ onPress }: IMoonIconProps) {

  return (
    <Svg
      viewBox="0 0 14 15"
      fill="black"
      onPress={onPress}
    >
      <Path
        d="M7 1.5C6.20435 2.29565 5.75736 3.37478 5.75736 4.5C5.75736 5.62522 6.20435 6.70435 7 7.5C7.79565 8.29565 8.87478 8.74264 10 8.74264C11.1252 8.74264 12.2044 8.29565 13 7.5C13 8.68669 12.6481 9.84673 11.9888 10.8334C11.3295 11.8201 10.3925 12.5892 9.2961 13.0433C8.19975 13.4974 6.99335 13.6162 5.82946 13.3847C4.66558 13.1532 3.59648 12.5818 2.75736 11.7426C1.91825 10.9035 1.3468 9.83443 1.11529 8.67054C0.88378 7.50666 1.0026 6.30026 1.45673 5.2039C1.91085 4.10754 2.67989 3.17047 3.66658 2.51118C4.65328 1.85189 5.81331 1.5 7 1.5Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

