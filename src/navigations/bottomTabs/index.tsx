import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/home';
import { ProfileScreen } from '../../screens/profile';
import { MoreScreen } from '../../screens/more';
import { NFCScreen } from '../../screens/nfc';
import { HomeBottomTabIcon } from '../../../assets/icons/Home';
import { View } from 'react-native';
import { MoreBottomTabIcon } from '../../../assets/icons/More';
import { TagsBottomTabIcon } from '../../../assets/icons/Tags';
import { NFCBottomTabIcon } from '../../../assets/icons/NFC';

const BottomTab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <HomeBottomTabIcon isFocused={focused} />
        }}
      />
      <BottomTab.Screen
        name="NFC"
        component={NFCScreen}
        options={{
          tabBarIcon: ({ focused }) => <NFCBottomTabIcon isFocused={focused} />
        }}
      />
      <BottomTab.Screen
        name="Tags"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TagsBottomTabIcon isFocused={focused} />
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => <MoreBottomTabIcon isFocused={focused} />
        }}
      />
    </BottomTab.Navigator>
  );
};
