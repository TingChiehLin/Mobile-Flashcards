import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';
import Deck from '../component/Deck/Deck';
import { useSelector } from 'react-redux';

const DeckListView = (props) => { 
    const decks = useSelector(state => state.decks.availableDecks)
    return <View style={styles.container}>
        <Deck title={"Udacity"} number={35} color={{backgroundColor:'blue'}} />
        <Deck color={{backgroundColor: 'red'}}/>
        <Deck />
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default DeckListView
