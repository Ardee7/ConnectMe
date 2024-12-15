import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function HomeBottomTabIcon({
  isFocused = false
}: {
  isFocused: boolean;
}): JSX.Element {
  return (
    <Svg
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill={`${isFocused ? '#2D9C8F' : '#4A4A4A'}`}>
      <Path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </Svg>
  );
}
