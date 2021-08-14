/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
 return(
    <View style={styles.body}>
       <Text style={styles.text}>Programming With SRT</Text> 
       <Button title='youtube chanel' onPress={()=>{Linking.openURL('https://www.facebook.com/')}}></Button>
    </View>
 );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#0000ff',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontStyle:'italic',
    margin:10
  }
});

export default App;
