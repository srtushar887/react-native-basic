import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';



export default function ScreenA({ navigation }) {

    const onPressedhandler = () => {
        // navigation.navigate('Screen_B');
        // navigation.openDrawer();
        navigation.toggleDrawer();
    };


    return (
        <View style={styles.body}>
            <Text styles={styles.text}>Screen A</Text>
            <Pressable
                onPress={onPressedhandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text styles={styles.text}>Toggle Drawer</Text>
            </Pressable>
        </View>
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
