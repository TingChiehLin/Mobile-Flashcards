import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import { TextInput } from 'react-native';

const AddDeck = () => {
    const [deckTitleName, setdeckTitleName] = useState('');

    return (
        <View style={styles.addDeckContainer}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                clearButtonMode="always"
                keyboardType="characters"
                maxLength={30}
                onChangeText={text => setdeckTitleName(text)}
                placeholder="Deck Title"
                style={styles.input}
            />
            <AppButton
                    title="Submit"
                    onPress={ () => console.log("Start Quiz")}
                    color="primary"
            />
        </View>
    )
}

export default AddDeck

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '600',
        textAlign:'center',
        marginVertical: 20
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 20,
        width:300
    },
    addDeckContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    }
})