import React from 'react';
import {CompletedScreen, InProgressScreen, QueueScreen} from '@features';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Queue"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          marginTop: insets.top,
        },
      }}>
      <Tab.Screen
        name="Queue"
        component={QueueScreen}
        options={{tabBarLabel: 'Queue'}}
      />
      <Tab.Screen
        name="In Progress"
        component={InProgressScreen}
        options={{tabBarLabel: 'In Progress'}}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{tabBarLabel: 'Completed'}}
      />
    </Tab.Navigator>
  );
};
export default TopBarNavigator;
