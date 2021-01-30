import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useSelector, useDispatch } from 'react-redux';


Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        };
    }
});

const Quiz = ({ route }) => {
    const { title, questions } = route.params;
    const [ isQuizDone, setIsQuizDone ] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [totalCorrect, setTotalCorrect] = useState(0)
    const [totalIncorrect, setTotalIncorrect] = useState(0)

    const finish = () => {
        // dispatch(finishQuiz(state));
        setIsQuizDone(true);
        console.log('done');
    }

    const handleAnswer = (answer) => {
        console.log('-------------------');

        if (questions[currentQuestion].answer[currentQuestion].correct === answer) {
            setTotalCorrect(totalCorrect + 1);
        } else {
            setTotalIncorrect(totalIncorrect + 1)
        }

        setCurrentQuestion(currentQuestion + 1);

        if (currentQuestion === questions.length) {
            finish()
        }
    };

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
                seconds: time,
                repeats: false
            }
        });
    };

    if(isQuizDone) {
        triggerNotificationHandler(300)
    } 
   
    const quizResult = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Quiz Result</Text>
                <Text style={styles.resultText}>{
                `${
                    Math.round((totalCorrect) / (questions.length) * 100) 
                } %`
                }</Text>
                <View style={styles.buttonContainer}>
                    <AppButton
                        title="Restart Quiz"
                        onPress={ () => console.log("Restart Quiz")}
                        color="primary"
                    />
                    <AppButton
                        title="Back to Deck"
                        onPress={ () => setIsQuizDone(true)}
                        color="secondary"
                    />
                </View>
            </View>
        )
    }

    const quizComponent = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{questions[currentQuestion].question}
                </Text>
                <View style={styles.buttonContainer}>
                    <AppButton
                        title="O"
                        onPress={ () => 
                            handleAnswer(true)
                        }
                        color="primary"
                    />
                    <AppButton
                        title="X"
                        onPress={ () => handleAnswer(false)}
                        color="secondary"
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {isQuizDone ? quizResult() : quizComponent()}
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
        fontSize: 24,
        position: "absolute",
        top: 80,
        padding:40,
        lineHeight:32
    },
    resultText: {
        fontSize: 32,
        color: 'tomato'
    }
})

export default Quiz