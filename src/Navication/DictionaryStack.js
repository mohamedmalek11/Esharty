import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DictionaryScreen} from '../Screens/DictionaryScreen';

const Stack = createStackNavigator();

export function DictionaryStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DictionaryScreen"
        component={DictionaryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}