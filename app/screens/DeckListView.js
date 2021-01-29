import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Deck from '../component/Deck/Deck';
import { useSelector, useDispatch } from 'react-redux';
import { _deck_result } from '../store/actions';
import { useNavigation } from '@react-navigation/native';

const DeckListView = (props) => { 
    //const [deckArray, setDeckArray] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const decks = useSelector(
        state => state.decks.availableDecks
    )

    useEffect(() => {
        dispatch(_deck_result());
    },[])

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return <ScrollView style={styles.container}>
                {
                    Object.values(decks).sort().map((deck,index) => (
                        <Deck 
                            key={index} 
                            title={deck.title} 
                            number={deck.questions.length} 
                            color={getRandomColor()} 
                        />
                    ))
                }
            </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default DeckListView
