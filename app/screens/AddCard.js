import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import AppButton from '../component/AppButton/AppButton';
import { useSelector, useDispatch } from 'react-redux';

const AddCard = ({ route }) => {
    const { title, questions } = route.params;
    const [questionName, setQuestionName] = useState('');
    const [answerName, setAnswerName] = useState('');

    const cardQuestionTitle = title;
    const cardQuestionQuestions = questions;
    console.log('------cardQuestionTitle--------',cardQuestionTitle);
    console.log('------cardQuestionQuestions--------',cardQuestionQuestions);

    const dispatch = useDispatch();

    const saveCard = () => {

    }

    // if(!questionName || !answerName) {
    //     Alert.alert('Invalid Title Name','Please Enter all the fields', [{text: 'Okay', style: 'destructive'}])
    //     return
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is your question?</Text>
            <TextInput
                clearButtonMode="always"
                keyboardType="default"
                maxLength={30}
                onChangeText={text => setQuestionName(text)}
                placeholder="Please Type Any Question"
                style={styles.input}
            />
            <Text style={styles.text}>What is your answer?</Text>
            <TextInput
                clearButtonMode="always"
                keyboardType="default"
                maxLength={30}
                onChangeText={text => setAnswerName(text)}
                placeholder="Please Type Any Answer"
                style={styles.input}
            />
            <View style={styles.buttonsContainer}>
                <AppButton
                        title="Submit"
                        onPress={ () => console.log("Submit")}
                        color="primary"

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 50,
    },
    buttonsContainer: {
        alignSelf: 'center',
        marginVertical: 80
    },
    text: {
        fontSize: 24,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 50, 
        width: '90%',
        maxWidth: 300,
        height:30
    },
})

export default AddCard