import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import NavContainer from './src';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <NavContainer />
    </SafeAreaView>
  );
}

export default App;
