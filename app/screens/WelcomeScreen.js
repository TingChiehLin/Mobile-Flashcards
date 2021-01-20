import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import Color from '../config/color.js';
import { AntDesign } from '@expo/vector-icons';
import AppText from '../component/AppText';
import AppButton from '../component/AppButton/AppButton';
import Logo from '../assets/logo.svg';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.tagline}>Flash to see your answer !</Text>
            </View>
            {/* <AntDesign name="right" size={24} color="black" /> */}
            {/* <AppText>Welcome to Flash Card Game !</AppText> */}
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
        padding: 20,
        width: 300,
        position:'absolute',
        bottom: 20,
        alignSelf:'center',
    },
    button: {
        width: 500,
        height: 100,
        borderRadius: 10
    },
    background: {
        flex:1,
        resizeMode: "cover",
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
        fontSize: 25,
        fontWeight: "600",
    }
})