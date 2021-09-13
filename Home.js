import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Alert
} from 'react-native';
import GlobalStyle from './src/utils/GlobalStyle';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase({
    name: 'Main',
    location: 'default',
}, () => { }, error => { console.log(error); })

export default function Home({ navigation, route }) {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             let user = JSON.parse(value);
            //             setName(user.Name);
            //             setAge(user.Age);
            //             // navigation.navigate('Home');
            //         }
            //     })

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users", [], (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            setName(userName);
                            setAge(userAge);
                        }
                    }
                )
            })

        } catch (error) {
            console.log(error);
        }
    };



    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning', 'Please Enter Name')
        } else {
            try {
                // var user = {
                //     Name: name
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));

                db.transaction((tx) => {
                    db.executeSql(
                        "UPDATE Users SET Name=?", [name], () => {
                            Alert.alert('Success', 'Your data has been updated');
                        }, error => { console.log(error); }
                    )
                })


            } catch (e) {
                console.log(e);
            }
        }

    };


    const removeData = async () => {
        try {
            // await AsyncStorage.clear();
            db.transaction((tx) => {
                db.executeSql(
                    "DELETE FROM Users", [], () => {
                        navigation.navigate('Login');
                    }, error => { console.log(error) }
                )
            })



        } catch (e) {
            console.log(e);
        }

    };


    useEffect(() => {
        getData();
    }, [])



    return (
        <View style={styles.body}>
            <Text styles={[GlobalStyle.CustomFont, styles.text]}>Welcome {name}</Text>
            <Text styles={[GlobalStyle.CustomFont, styles.text]}>Welcome {age}</Text>
            <TextInput style={styles.input} placeholder="Enter Your Name" value={name} onChangeText={(value) => setName(value)}></TextInput>
            <Pressable
                style={styles.button}
                title="login"
                onPress={updateData}
                android_ripple={{ color: '#fff' }}

            >
                <Text style={styles.buttontext}>Update</Text>
            </Pressable>


            <Pressable
                style={styles.button2}
                title="login"
                onPress={removeData}
                android_ripple={{ color: '#fff' }}

            >
                <Text style={styles.buttontext}>Delete</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        margin: 10,
        fontFamily: 'DancingScript-Regular'
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#32a852',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    buttontext: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    button2: {
        width: 150,
        height: 40,
        backgroundColor: '#32a852',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 10
    }
});
