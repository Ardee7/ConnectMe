import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import NavContainer from './src';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import { Provider as AtomProvider } from 'jotai';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AtomProvider>
        <PaperProvider theme={theme}>
          <NavContainer />
        </PaperProvider>
      </AtomProvider>
    </SafeAreaView>
  );
}

export default App;
