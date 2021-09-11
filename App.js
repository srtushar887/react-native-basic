/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { forUIKit } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import { createDrawerNavigator } from '@react-navigation/drawer';




const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
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
        <Drawer.Screen name="Screen_A" component={ScreenA} options={{
          title: 'Screen_A Title',
          drawerIcon: ({ focused }) => {
            <FontAwesome5 name="asymmetrik" size={focused ? 25 : 20} />
          }
        }}></Drawer.Screen>
        <Drawer.Screen name="Screen_B" component={ScreenB} options={{
          title: 'Screen_B Title',
          drawerIcon: ({ focused }) => {
            <FontAwesome5 name="btc" size={focused ? 25 : 20} />
          }
        }}
          initialParams={{ ItemName: 'Item form Drawer', ItemId: 12 }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}





export default App;
