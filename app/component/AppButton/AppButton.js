import React from 'react'
import { Touchable } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../config/color';
import AppText from '../AppText/AppText';

export default function AppButton({title, onPress, color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
            <AppText>{title}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width:300,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})