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
  Modal,
  Pressable,
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
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CusButton from './CustomButton';
const App = () => {

  const [name, setName] = useState('');
  const [submited, setSubmited] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressedhandler = () => {
    if (name.length > 3) {
      setSubmited(!submited);
    } else {
      setShowWarning(true);

    }

  }

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => {
          setShowWarning(false)
        }}
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.centered_view}>
          <View style={styles.warning_message}>
            <View style={styles.warning_title}>
              <Text>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text>The name must be longer then 3 char</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              android_ripple={{ color: '#fff' }}

            >
              <Text style={styles.text}>Ok</Text>
            </Pressable>
          </View>
        </View>


      </Modal>

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


      <CusButton onPressedFunction={onPressedhandler} title={submited ? 'Clear' : 'Submit'} />

      {submited ?
        <View style={styles.body}>
          <Text style={styles.text}>you are registered as {name}</Text>
          <Image style={styles.image} source={require('./assets/done.jpeg')} resizeMode='stretch' />
        </View>

        :
        // <Image style={styles.image} source={require('./assets/error.jpeg')} resizeMode='stretch' />
        <Image style={styles.image} source={{ uri: 'https://e7.pngegg.com/pngimages/1018/913/png-clipart-computer-icons-done-angle-rim-thumbnail.png' }} resizeMode='stretch' />
      }

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
    margin: 20,
    textAlign: 'center'
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


  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },

  warning_message: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20
  },


  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },

  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    margin: 10
  }


});

export default App;
