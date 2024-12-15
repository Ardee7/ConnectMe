import { useAtom } from 'jotai';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isAuthorized } from '../../atoms/Authorizations';

export const MoreScreen = () => {
  const [, setAuthorized] = useAtom(isAuthorized); 

  const handleLogout = () => {
    // Simulate logout logic (e.g., clearing user data, tokens, etc.)
    setAuthorized(false); // Set the state to false to log out
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button mode="contained" onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};
