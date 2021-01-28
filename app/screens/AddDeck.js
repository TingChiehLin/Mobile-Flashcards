import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { _save_deck } from '../store/actions/decks';
import { useSelector, useDispatch } from 'react-redux';

const AddDeck = ({ route }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // const { title, number} = route.params;
    const [deckTitleName, setdeckTitleName] = useState('');
    
    const titleChangeHandler = value => {
        setdeckTitleName(value);
    }

    const saveDeckTitle = () => {
        if(deckTitleName === '') {
            Alert.alert('Invalid Title Name','Please Type any Title Name', [{text: 'Okay', style: 'destructive'}])
            return
        }
        dispatch(_save_deck(deckTitleName));
    }

    // useEffect(() => {
    
    // },[])

    return (
        <View style={styles.addDeckContainer}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <TextInput
                clearButtonMode="always"
                keyboardType="default"
                maxLength={30}
                onChangeText={titleChangeHandler}
                placeholder="Deck Title"
                style={styles.input}
            />
            <View style={styles.button}>
                <AppButton
                    title="Submit"
                    onPress={ () => {
                        saveDeckTitle()
                        navigation.navigate('Home')
                        console.log("Home")
                    }}
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
        width: '90%',
        minWidth: 300,
        height:30
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