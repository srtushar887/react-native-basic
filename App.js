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
  RefreshControl,
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
 
  const [Items,setItems] = useState([
    {ket:1,'item':'item 1'},
    {ket:2,'item':'item 2'},
    {ket:3,'item':'item 3'},
    {ket:4,'item':'item 4'},
    {ket:5,'item':'item 5'},
    {ket:6,'item':'item 6'},
    {ket:7,'item':'item 7'},
    {ket:8,'item':'item 8'},
    {ket:9,'item':'item 9'},
    {ket:10,'item':'item 10'},
    {ket:11,'item':'item 11'},
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = ()=>{
    setRefreshing(true);
    setItems([...Items,{ket:12,item:'item 12'}]);
    setRefreshing(false)
  }



 return(
  <ScrollView 
  horizontal={false} 
  style={styles.body}
  refreshControl={
    <RefreshControl 
    refreshing={Refreshing}
    onRefresh={onRefresh}
    />
  }
  >
  {Items.map((name)=>{
     return <View style={styles.item} key={name.ket}>
       <Text style={styles.text} >{name.item}</Text>
      </View>
    })}
  </ScrollView>
 );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#ffffff',
  },
  item:{
    margin:10,
    backgroundColor:'#4ae1fa',
    justifyContent:'center',
    alignItems:'center'
  },

  text:{
    color:'#fff',
    fontSize:35,
    fontStyle:'italic',
    margin:10,
  
  },


});

export default App;
