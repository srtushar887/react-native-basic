/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({ navigation }) {

  const onPressedhandler = () => {
    navigation.navigate('Screen_B');
  };


  return (
    <View style={styles.body}>
      <Text styles={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressedhandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text styles={styles.text}>Go To Screen B</Text>
      </Pressable>
    </View>
  )
}


function ScreenB({ navigation }) {

  const onPressedhandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text styles={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressedhandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text styles={styles.text}>Go Back</Text>
      </Pressable>
    </View>
  )
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen name="Screen_A" component={ScreenA} options={{
          header: () => null
        }}></Stack.Screen>
        <Stack.Screen name="Screen_B" component={ScreenB}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10
  }
});


export default App;
