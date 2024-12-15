import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};
