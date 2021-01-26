import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import AppText from '../component/AppText/AppText';
import colors from  '../config/color';
import { useNavigation } from '@react-navigation/native';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function DeckDetails({ route }) {

    useEffect(() => {
        Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
            if (statusObj.status !== 'granted') {
                return Permissions.askAsync(Permissions.NOTIFICATIONS);
            }
            return statusObj;
        }).then(statusObj => {
            if (statusObj.status !== 'granted') {
                return;
            }
        });
    },[]);

    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Good Morning!",
                body: 'It is time to have a quiz',
            },
            trigger: {
                seconds: 5
            }
        });

    };

    const navigation = useNavigation();
    const { title, number} = route.params;

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
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.number}>{`${number} cards`}</Text>
            </View>
            {/* <AppButton
                    title="Add Card"
                    onPress={ () => navigation.navigate('AddCard')}
                    color="secondary"
            /> */}
             <AppButton
                    title="Trigger Notification"
                    onPress={triggerNotificationHandler}
                    color="secondary"
            />
            <AppButton
                    title="Start Quiz"
                    onPress={ () => navigation.navigate('Quiz')}
                    color="primary"
            />
            <Text style={styles.text}
                onPress={() => console.log("Delete")}
            >
                Delete Deck
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        color:'black',
        fontSize:64,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:100
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
        marginVertical:25
    },
    number: {
        fontSize: 18,
        fontWeight: "100",
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color:'tomato',
        marginVertical:25
    }
})