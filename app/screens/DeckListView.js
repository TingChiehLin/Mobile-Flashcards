import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/color';
import Deck from '../component/Deck/Deck';
import AppButton from '../component/AppButton/AppButton';
import { useSelector, useDispatch } from 'react-redux';
import { _deck_result } from '../store/actions';
import { useNavigation } from '@react-navigation/native';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        };
    }
});

const DeckListView = (props) => { 
    //const [deckArray, setDeckArray] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const decks = useSelector(
        state => state.decks.availableDecks
    )

    //const deckId = props.navigation.getParm('deckId');
    //const selectedDeck = decks.find(deck => deck.id ===deckId);
    //props.navigation.setParams({deckTitle: selectedDeck.title});
    
    const [timeValue, setTimeValue] = useState(86400);

    useEffect(() => {

    },[])

    useEffect(() => {
        dispatch(_deck_result());
    },[])

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

    useEffect(() => {

        const backgroundSubscription = Notifications.addNotificationReceivedListener(response => {
            console.log(response)
        });

        const foregroundSubscription =  Notifications.addNotificationReceivedListener(notification => {
            console.log(notification);
        });

        return () => {
            foregroundSubscription.remove();
            backgroundSubscription.remove();
        };
    },[]);

    const triggerNotificationHandler = (time) => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Good Morning!",
                body: 'It is time to have a quiz',
            },
            trigger: {
                seconds: time
            }
        });
    };

    triggerNotificationHandler(86400)

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return <View style={styles.container}>
        {/* <AppButton
                title="Trigger Notification"
                onPress={triggerNotificationHandler}
                color="secondary"
        /> */}
        {
            Object.values(decks).map((deck,index) => (
                <Deck key={index} title={deck.title} number={deck.questions.length} color={getRandomColor()} />
            ))
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default DeckListView
