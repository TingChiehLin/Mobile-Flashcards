import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/color';

const Deck = ({title, number, color, navigation}) => {
    return (
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('DeckDetails')}
        >
            <View style={[styles.deck, color]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        color: colors.white,
        marginVertical:10
    },
    number: {
        fontSize: 24,
        fontWeight: '100',
        color: colors.white
    },
    deck: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 15,
        backgroundColor:'purple',
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
    }   
})

export default Deck