import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';
import Deck from '../component/Deck/Deck';
import { useSelector, useDispatch } from 'react-redux';
import { deck_result } from '../store/actions';

const DeckListView = (props) => { 
    // const [deckArray, setDeckArray] = useState([]);

    const decks = useSelector(
        state => state.decks.availableDecks
    )
    const dispatch = useDispatch()
    const deck_result = () => _deck_result();
    console.log(deck_result);
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
