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
  const [name, setName] = useState('tusher');
  const [session, setSession] = useState({number : 6,title:'state'})
  const [curent, setCurent] = useState(true);

  

const onClickHandler= ()=>{
  setName('SRT');
  setSession({number:7,title:'Style'});
  setCurent(false);

}

 return(
    <View style={styles.body}>
       <Text style={styles.text}>Programming With {name}</Text> 
       <Text style={styles.text}>This session state is  {session.number} and about is {session.title}</Text> 
       <Text style={styles.text}>{curent ? 'current session ' : 'next session'}</Text> 
       <Button title='update state' onPress={onClickHandler}></Button>
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
