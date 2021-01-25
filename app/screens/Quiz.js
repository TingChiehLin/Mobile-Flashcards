import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Quiz = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Quiz</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red'
    },
    text: {
        fontSize: 32
    }
})

export default Quiz