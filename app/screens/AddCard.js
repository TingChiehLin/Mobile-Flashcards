import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import AppButton from '../component/AppButton/AppButton';

const AddCard = () => {
    const [questionName, setQuestionName] = useState('');
    const [answerName, setAnswerName] = useState('');

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