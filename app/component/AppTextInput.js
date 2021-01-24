import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../config/color';

const AppTextInput = () => {
    return (
        <View style={styles.container}>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 18,
        // fontFamily: Platform.OS
    }
});

export default AppTextInput;