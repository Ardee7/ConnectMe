import Svg, { Path } from 'react-native-svg';

export function NFCBottomTabIcon({
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
      <Path d="M280-280h400v-400H520q-33 0-56.5 23.5T440-600v52q-20 11-30 28t-10 40q0 33 23.5 56.5T480-400q33 0 56.5-23.5T560-480q0-23-11-40t-29-28v-52h80v240H360v-240h40v-80H280v400Zm-80 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
    </Svg>
  );
}
