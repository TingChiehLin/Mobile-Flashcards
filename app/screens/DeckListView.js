import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';
import Deck from '../component/Deck/Deck';

const DeckListView = () => {
    return <View>
        <Deck title={"Udacity"} number={35}/>
        <Deck />
        <Deck />
    </View>
}

const styles = StyleSheet.create({

})

export default DeckListView
