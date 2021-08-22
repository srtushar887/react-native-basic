/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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
  
  const [name, setName] = useState('');
  
 return(
   <View style={styles.body}>
     <Text style={styles.text}>Please write your name</Text>
     <TextInput 
    //  multiline
     style={styles.input}
     placeholder='e.g Jhon'
     onChangeText={(value)=>setName(value)}
     keyboardType='default'
    //  maxLength={2}
    // editable={false}
    // secureTextEntry
     ></TextInput>
      <Text style={styles.text}>{name}</Text>
   </View>
 )

};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    alignItems:'center'
  },

  text:{
      color:'#000000',
      fontSize:20,
      margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20
  }
  


});

export default App;
