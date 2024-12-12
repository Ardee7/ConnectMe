import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { HomeScreen } from './screens/home';
import { ProfileScreen } from './screens/profile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function NavContainer(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
