import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Input from '../../app/component/Input';

const CreateNewDeck = props => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
            style={styles.screen}
        >
            <View>
                <Input style={style.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false}
                />
            </View>
        </TouchableWithoutFeedback>
    )   
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {

    }
})

export default CreateNewDeck