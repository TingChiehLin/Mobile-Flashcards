import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import AppText from '../component/AppText/AppText';
import colors from  '../config/color';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { _add_cardtodeck, _delete_Deck } from '../store/actions';

export default function DeckDetails({ route }) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { title, number} = route.params;
    const decks = useSelector(
        state => state.decks.availableDecks
    )
    const deckID = decks[title];
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{`${number} cards`}</Text>
            </View>
            <AppButton
                    title="Add Card"
                    onPress={ () => navigation.navigate('AddCard',{
                        title: deckID.title,
                        questions: deckID.questions
                    })}
                    color="secondary"
            />
            <AppButton
                    title="Start Quiz"
                    onPress={ () => navigation.navigate('Quiz',{
                        title: deckID.title,
                        questions: deckID.questions
                    })}
                    color="primary"
            />
            <Text style={styles.text}
                onPress={() => {
                 dispatch(_delete_Deck(deckID.title))
                 navigation.navigate('Home')
                }}
            >
                Delete Deck
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        color:'black',
        fontSize:64,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:100
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
        marginVertical:25
    },
    number: {
        fontSize: 18,
        fontWeight: "100",
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color:'tomato',
        marginVertical:25
    }
})