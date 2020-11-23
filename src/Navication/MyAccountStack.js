import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyAccountScreen} from '../Screens/MyAccountScreen';

const Stack = createStackNavigator();

export function MyAccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}