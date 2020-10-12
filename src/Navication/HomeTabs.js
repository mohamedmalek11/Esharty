import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Main" component={HomeStack} />
      <Tabs.Screen name="Classes" component={HomeStack} />
      <Tabs.Screen name="Dictionary" component={HomeStack} />
      <Tabs.Screen name="MyAccount" component={HomeStack} />
    </Tabs.Navigator>
  );
}
