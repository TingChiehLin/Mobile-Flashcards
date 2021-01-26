import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Quiz = () => {

    const [quizState, setQuizState] = useState('s');
    const [isQuiz, setIsQuiz] = useState(true);


    const quizComponent = () => {
        return (
            <View>
                <Text style={styles.text}>Test</Text>
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
    text: {
        fontSize: 24
    }
})

export default Quiz