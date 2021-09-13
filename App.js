/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Login from './src/screens/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { forUIKit } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        drawerPosition="right"
        drawerType="slide"
        overlayColor="#00000090"
        edgWidth={100}
        hideStatusBar={false}
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleColor: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}





export default App;
