import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyAccountScreen} from '../Screens/MyAccountScreen';
import {AboutAppScreen} from '../Screens/AboutAppScreen';
import {ContactUsScreen} from '../Screens/ContactUsScreen';
import {LogInScreen} from '../Screens/LogInScreen';

const Stack = createStackNavigator();

export function MyAccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutAppScreen"
        component={AboutAppScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
