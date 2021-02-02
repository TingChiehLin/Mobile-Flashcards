import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Deck from '../component/Deck/Deck';
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

    const isQuizDone = useSelector(
        state => state.decks.quizDone
    )

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

    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Good Morning!",
                body: 'It is time to have a quiz',
            },
            trigger
        });
    };

    const trigger = new Date(Date.now() + 60 * 60 * 1000);
    trigger.setMinutes(0);
    trigger.setSeconds(0);

    if(!isQuizDone) {
        console.log("Notification");
        triggerNotificationHandler()
    } else {
        trigger.setMinutes(0);
        trigger.setSeconds(0);    
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    return <ScrollView style={styles.container}>
                {
                    Object.values(decks).sort().map((deck,index) => (
                        <Deck 
                            key={index} 
                            title={deck.title} 
                            number={deck.questions.length} 
                            color={getRandomColor()} 
                        />
                    ))
                }
            </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
})

export default DeckListView
