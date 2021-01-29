import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        };
    }
});

const Quiz = () => {
    const [quizState, setQuizState] = useState('s');
    const [isQuiz, setIsQuiz] = useState(false);
    const [resultText, setresultText] = useState('0');

    const onQuizResult = () => (
        setresultText("1")
    )

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

    if(!isQuiz) {
        triggerNotificationHandler(300)
    } 

    const quizResult = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Quiz Result</Text>
                <Text style={styles.resultText}>{`${resultText} %`}</Text>
                <View style={styles.buttonContainer}>
                    <AppButton
                        title="Restart Quiz"
                        onPress={ () => console.log("Restart Quiz")}
                        color="primary"
                    />
                    <AppButton
                        title="Back to Deck"
                        onPress={ () => setIsQuiz(true)}
                        color="secondary"
                    />
                </View>
            </View>
        )
    }

    const quizComponent = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Test</Text>
                <View style={styles.buttonContainer}>
                    <AppButton
                        title="O"
                        onPress={ () => console.log("Correct")}
                        color="primary"
                    />
                    <AppButton
                        title="X"
                        onPress={ () => console.log("wrong")}
                        color="secondary"
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {isQuiz ? quizResult() : quizComponent()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer: {
        position: "absolute",
        bottom: 50
    },
    text: {
        fontSize: 32,
        position: "absolute",
        top: 80
    },
    resultText: {
        fontSize: 32,
        color: 'tomato'
    }
})

export default Quiz