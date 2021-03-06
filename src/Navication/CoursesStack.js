import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CoursesScreen} from '../Screens/CoursesScreen';
import {CourseDetailsScreen} from '../Screens/CourseDetailsScreen';
import {CourseWatchScreen} from '../Screens/CourseWatchScreen';

const Stack = createStackNavigator();

export function CoursesStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseDetailsScreen"
        component={CourseDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CourseWatchScreen"
        component={CourseWatchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}