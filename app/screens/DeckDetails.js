import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

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
        <View>
            <View styles={styles.titleContainer}>
                <Text>{title}</Text>
                <Text>{number}</Text>
            </View>
            <AppButton
                    title="Add Card"
                    onPress={ () => console.log("Add Card")}
                    color="white"
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
    titleContainer: {

    }
})