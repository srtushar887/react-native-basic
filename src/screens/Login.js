import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
    Button,
    Alert,

} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import CusButton from "../../CustomButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import SQLite from 'react-native-sqlite-storage';


const db = SQLite.openDatabase({
    name: 'Main',
    location: 'default',
}, () => { }, error => { console.log(error); })


export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        createTable(),
            getData();
    }, []);


    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    };



    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }

            //     })

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users", [], (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })


        } catch (error) {
            console.log(error);
        }
    };






    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning', 'Please Enter Your Data')
        } else {
            try {
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                await db.transaction(async (tx) => {
                    // await tx.executeSql(
                    //     "INSERT INTO Users (Name, age) VALUES ('" + Name + "','" + age + "')"
                    // );

                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)", [name, age]
                    );

                })
                navigation.navigate('Home');
            } catch (e) {
                console.log(e);
            }
        }

    };

    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={require('../../assets/done.jpeg')} />
            <Text style={styles.text}>Async Storage</Text>
            <TextInput style={styles.input} placeholder="Enter Your Name" onChangeText={(value) => setName(value)}></TextInput>
            <TextInput style={styles.input} placeholder="Enter Your Age" onChangeText={(value) => setAge(value)}></TextInput>
            <Pressable
                style={styles.button}
                title="login"
                onPress={setData}
                android_ripple={{ color: '#fff' }}

            >
                <Text style={styles.buttontext}>Submit</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },

    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },

    text: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 130
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10

    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: '#32a852',
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttontext: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 5
    }
})