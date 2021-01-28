import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

const Quiz = () => {

    const [quizState, setQuizState] = useState('s');
    const [isQuiz, setIsQuiz] = useState(false);
    const [resultText, setresultText] = useState('0');

    const onQuizResult = () => (
        setresultText("1")
    )

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
                        onPress={ () => console.log("Back to Deck")}
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