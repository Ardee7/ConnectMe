import Svg, { Path } from 'react-native-svg';

export function TagsBottomTabIcon({
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
      <Path d="m159-168-34-14q-31-13-41.5-45t3.5-63l72-156v278Zm160 88q-33 0-56.5-23.5T239-160v-240l106 294q3 7 6 13.5t8 12.5h-40Zm206-4q-32 12-62-3t-42-47L243-622q-12-32 2-62.5t46-41.5l302-110q32-12 62 3t42 47l178 488q12 32-2 62.5T827-194L525-84Zm-86-476q17 0 28.5-11.5T479-600q0-17-11.5-28.5T439-640q-17 0-28.5 11.5T399-600q0 17 11.5 28.5T439-560Zm58 400 302-110-178-490-302 110 178 490ZM319-650l302-110-302 110Z" />
    </Svg>
  );
}
