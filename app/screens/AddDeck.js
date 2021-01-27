import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddDeck = () => {
    const navigation = useNavigation();
    const [deckTitleName, setdeckTitleName] = useState('');

    return (
        <View style={styles.addDeckContainer}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                clearButtonMode="always"
                keyboardType="default"
                maxLength={30}
                onChangeText={text => setdeckTitleName(text)}
                placeholder="Deck Title"
                style={styles.input}
            />
            <View style={styles.button}>
                <AppButton
                        title="Submit"
                        onPress={ () => {
                            navigation.navigate('Home')}
                        }
                        color="primary"
                />
            </View>
        </View>
    )
}

export default AddDeck

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '600',
        textAlign:'center',
        marginVertical: 25
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 50,
        width: '80%',
        minWidth: 300
    },
    addDeckContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    button: {
        marginTop: 75,
    }
})