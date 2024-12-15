import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './navigations/bottomTabs';
import { LoginScreen } from './screens/login';
import { useAtom } from 'jotai';
import { isAuthorized } from './atoms/Authorizations';
import { navigationTheme } from './styles/theme';
import { LoaderScreen } from './components/loader';

const Stack = createStackNavigator();

export default function NavContainer(): ReactElement {
  const [authorized] = useAtom<boolean>(isAuthorized);

  return (
    <NavigationContainer theme={navigationTheme}>
      <LoaderScreen />
      <Stack.Navigator>
        {authorized ? (
          <Stack.Screen
            name="bottom"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
