import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoursesScreen} from '../Screens/CoursesScreen';

const Stack = createStackNavigator();

export function CoursesStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}