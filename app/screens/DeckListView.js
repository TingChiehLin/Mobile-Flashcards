import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';
import Deck from '../component/Deck/Deck';

const DeckListView = (props) => { 
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
