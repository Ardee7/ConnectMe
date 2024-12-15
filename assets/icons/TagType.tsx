import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export function TagTypeIcon(): JSX.Element {
  return (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#2D9C8F">
      <Path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h440q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H160Zm0-80h440l180-240-180-240H160v480Zm220-240Z" />
    </Svg>
  );
}
