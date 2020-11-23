import React from 'react';
import {HomeStack} from './HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStack} />
        <Tabs.Screen name="Classes" component={HomeStack} />
        <Tabs.Screen name="Dictionary" component={HomeStack} />
        <Tabs.Screen name="MyAccount" component={HomeStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
