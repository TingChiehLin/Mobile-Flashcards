import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import Color from '../config/color.js';
import { AntDesign } from '@expo/vector-icons';
import AppText from '../component/AppText';
import AppButton from '../component/AppButton/AppButton';
import SvgUri from 'react-native-svg-uri';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <Text style={styles.tagline}>Flash to see your answer !</Text>
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Start"
                    onPress={ () => navigation.navigate('Home')}
                    color="secondary"
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        position:'absolute',
        bottom: 50,
    },
    button: {
        width: 500,
        height: 100,
        borderRadius: 10
    },
    background: {
        flex:1,
        resizeMode: "cover", 
        alignItems: "center"
    },
    logoContainer: {
        alignItems:'center',
        marginVertical: 50,
    },
    logo: {
        position: "absolute",
        width: 200,
        height: 200,
        marginVertical: 50,
    },
    tagline: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 150,
    }
})