import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';



export default function ScreenB({ navigation, route }) {

    const { ItemName, ItemId } = route.params;

    const onPressedhandler = () => {
        navigation.navigate('Screen_A', { Message: 'Message from B' });
        // navigation.goBack();
        // navigation.setParams({ ItemId: 14 });
    };

    return (
        <View style={styles.body}>
            <Text styles={styles.text}>Screen B</Text>
            <Pressable
                onPress={onPressedhandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text styles={styles.text}>Go Back</Text>
                <Text styles={styles.text}>{ItemName}</Text>
                <Text styles={styles.text}>{ItemId}</Text>
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
