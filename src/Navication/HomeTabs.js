import React from 'react';
import {HomeStack} from './HomeStack';

const Tabs = createBottomTabNavigator();

export function HomeTabs(props) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Classes" component={HomeStack} />
      <Tabs.Screen name="Dictionary" component={HomeStack} />
      <Tabs.Screen name="MyAccount" component={HomeStack} />
    </Tabs.Navigator>
  );
}
