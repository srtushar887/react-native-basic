/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  Alert,
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
  ToastAndroid,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
  const [submited, setSubmited] = useState(false);

  const onPressedhandler = () => {
    if (name.length > 3) {
      setSubmited(!submited);
    } else {
      // Alert.alert('Warning','The name should be more three 3 chat',[
      //   {text:'Do no show again',onPress:()=>console.warn('ok pressed'),style:'destructive'},
      //   {text:'Cancel',onPress:()=>console.warn('ok pressed'),style:'destructive'},
      //   {text:'ok',onPress:()=>console.warn('ok pressed'),style:'destructive'},
      // ],{cancelable:true})

      ToastAndroid.show('The name should be more three 3 chat', ToastAndroid.LONG)

    }

  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name</Text>
      <TextInput
        //  multiline
        style={styles.input}
        placeholder='e.g Jhon'
        onChangeText={(value) => setName(value)}
        keyboardType='default'
      //  maxLength={2}
      // editable={false}
      // secureTextEntry
      ></TextInput>

      {/* <Button style={styles.button}
   title={submited ? 'Clear' : 'Submit'}
   onPress={onPressedhandler}
   color="#00f"
   ></Button> */}

      <TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressedhandler}
        activeOpacity={0.9}
        underlayColor='#dddddd'
      >
        <Text style={styles.text}>{submited ? 'Clear' : 'Submit'}</Text>
      </TouchableWithoutFeedback>


      {submited ?
        <Text style={styles.text}>you are registered as {name}</Text>
        : null}

    </View>
  )

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },

  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20
  },

  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },

  button: {
    width: 150,
    height: 70,
    backgroundColor: '#00ff00',
    alignItems: 'center'
  },



});

export default App;
