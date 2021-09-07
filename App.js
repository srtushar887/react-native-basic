/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { forUIKit } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'asymmetrik';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';

            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#555';
            }

            return (
              <FontAwesome5 name={iconName} size={size} color={color} />
            )

          }
        })}
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: '#694fad' }}

      >
        <Tab.Screen name="Screen_A" component={ScreenA} options={{ tabBarBadge: 3 }}></Tab.Screen>
        <Tab.Screen name="Screen_B" component={ScreenB}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}





export default App;
