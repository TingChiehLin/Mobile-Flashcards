import React from 'react';
import { View, StyleSheet } from 'react-native';

const Deck = props => {
    return 
        <View style={{...styles.deck, ...props.style}}>
            {props.children}
        </View>
};

const styles = StyleSheet.create({
    deck: {
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,

    }
})