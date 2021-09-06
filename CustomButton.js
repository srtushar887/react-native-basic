import React from "react";
import {
    TouchableWithoutFeedback,
    Text,
    StyleSheet,
} from 'react-native';

const CusButton = (props) => {
    return (
        <TouchableWithoutFeedback
            style={styles.button}
            onPress={props.onPressedFunction}
            activeOpacity={0.9}
            underlayColor='#dddddd'
        >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },

    button: {
        width: 150,
        height: 70,
        backgroundColor: '#00ff00',
        alignItems: 'center'
    },
});


export default CusButton;