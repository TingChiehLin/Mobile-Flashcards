import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import colors from  '../config/color';

export default function DeckDetails({ title, number, onPress}) {

    // useEffect(() => {
    //     registerForPushNotifications();
    // }, []);

    // const registerForPushNotifications = async () => {
    //     try {
    //         const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //         if (!permission.granted) return;
    
    //         const token = await Notifications.getExpoPushTokenAsync();
    //         console.log(token);
    //     } catch (error) {
    //         console.log('Error getting a push token', error);
    //     }
    // }

    return (
        <View style={styles.container}>
            <View styles={styles.titleContainer}>
                <Text>{title}</Text>
                <Text>{number}</Text>
            </View>
            <AppButton
                    title="Add Card"
                    onPress={ () => console.log("Add Card")}
                    color="secondary"
            />
            <AppButton
                    title="Start Quiz"
                    onPress={ () => console.log("Start Quiz")}
                    color="primary"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer: {
        color:'black',
        fontSize:32,
        padding: 15,
        marginVertical:35,
    }
})