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
    {key:1,name:'item 1'},
    {key:2,name:'item 2'},
    {key:3,name:'item 3'},
    {key:4,name:'item 4'},
    {key:5,name:'item 5'},
    {key:6,name:'item 6'},
    {key:7,name:'item 7'},
    {key:8,name:'item 8'},
    {key:9,name:'item 9'},
    {key:10,name:'item 10'},
    {key:11,name:'item 11'},
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = ()=>{
    setRefreshing(true);
    setItems([...Items,{key:12,name:'item 12'}]);
    setRefreshing(false)
  }



 return(


  <FlatList
    // horizontal
    data={Items}
    keyExtractor={(item,index)=>index}
    renderItem={({item})=>(
      <View style={styles.item}>
        <Text style={styles.text} >{item.name}</Text>
       </View>
    )}
     refreshControl={
    <RefreshControl 
    refreshing={Refreshing}
    onRefresh={onRefresh}
    />
     }

  />


  // <ScrollView 
  // horizontal={false} 
  // style={styles.body}
  // refreshControl={
  //   <RefreshControl 
  //   refreshing={Refreshing}
  //   onRefresh={onRefresh}
  //   />
  // }
  // >
  // {Items.map((name)=>{
  //    return <View style={styles.item} key={name.ket}>
  //      <Text style={styles.text} >{name.item}</Text>
  //     </View>
  //   })}
  // </ScrollView>
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
