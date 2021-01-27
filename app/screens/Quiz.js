import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

const Quiz = () => {

    const [quizState, setQuizState] = useState('s');
    const [isQuiz, setIsQuiz] = useState(true);


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
            {quizComponent()}
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
    }
})

export default Quiz