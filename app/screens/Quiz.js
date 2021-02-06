import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import { _finishQuiz } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Quiz = ({ route }) => {
    const { title, questions } = route.params;
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [totalCorrect, setTotalCorrect] = useState(0)
    const [totalIncorrect, setTotalIncorrect] = useState(0)
    const [tip, setTip] = useState(false)
    const [isQuizDone, setisQuizDone] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const finish = () => {
        dispatch(_finishQuiz(!isQuizDone));
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setTotalCorrect(0)
        setTotalIncorrect(0)
    }

    console.log('questions: -------',questions.length);
    console.log('currentQuestion: -------',currentQuestion);
    console.log('question: -------',questions);

    const handleAnswer = (answer) => {
        
        if(questions[currentQuestion].correct === answer) {
            setTotalCorrect(currentQuestion + 1);
            setTip(false)
        } else {
            setTotalIncorrect(currentQuestion + 1);
            setTip(false)
        }
        

        if ((currentQuestion) === questions.length) {
            finish()
        }
        setCurrentQuestion(currentQuestion + 1);
    };

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
                        onPress={ () => handleRestart()}
                        color="primary"
                    />
                    <AppButton
                        title="Back to Home"
                        onPress={ () => navigation.navigate('Home')}
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
                <Text style={styles.tip}>{tip ? questions[currentQuestion].answerName : ""}</Text>
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
                        onPress={ () => 
                            handleAnswer(false)
                        }
                        color="secondary"
                    />
                    <AppButton
                        title="Tip"
                        onPress={ () => 
                            setTip(true)
                        }
                        color="black"
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {currentQuestion === questions.length ? quizResult() : quizComponent()}
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
    tip: {
        fontSize: 16,
        padding:40,
        color: 'tomato'
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