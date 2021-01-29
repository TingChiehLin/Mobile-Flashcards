import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/color';
import { useNavigation } from '@react-navigation/native';

const Deck = ({title, number, color}) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('DeckDetails', {
                title,
                number
            })}
        >
            <View style={[styles.deck, {backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{number}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        color: colors.black,
        marginVertical:10,
        fontWeight: 'bold'
    },
    number: {
        fontSize: 24,
        fontWeight: '200',
        color: colors.black
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