import React from 'react';
import {HomeStack} from './HomeStack';
import {CoursesStack} from './CoursesStack';
import {MyAccountStack} from './MyAccountStack';
import {DictionaryStack} from './DictionaryStack';
import {NavigationContainer} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Ulitis/Colors';
import {Strings} from '../Ulitis/Strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Courses') {
              iconName = 'play';
            } else if (route.name === 'Dictionary') {
              iconName = 'book';
            } else if (route.name === 'MyAccount') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.yellow,
          inactiveTintColor: Colors.Dark,
          labelStyle: {fontSize: scale(12)},
          iconStyle: {fontSize: scale(90)},
          style: {
            margin: scale(15),
            marginTop: scale(10),
            borderTopWidth: 0,
            marginHorizontal: 0,
            direction: 'rtl',
          },
        }}
        initialRouteName={'Home'}>
        <Tabs.Screen
          name="Home"
          component={HomeStack}
          options={{tabBarLabel: Strings.TabsHome}}
        />
        <Tabs.Screen
          name="Courses"
          component={CoursesStack}
          options={{tabBarLabel: Strings.TabsCourses}}
        />
        <Tabs.Screen
          name="Dictionary"
          component={DictionaryStack}
          options={{tabBarLabel: Strings.TabsDictionary}}
        />
        <Tabs.Screen
          name="MyAccount"
          component={MyAccountStack}
          options={{tabBarLabel: Strings.TabsAccount}}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
