import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import Color from '../config/color.js';
import { AntDesign } from '@expo/vector-icons';
import AppText from '../component/AppText';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/favicon.png")}/>
            </View>
            {/* <AntDesign name="right" size={24} color="black" /> */}
            <AppText>Welcome to Flash Card Game !</AppText>
            <Button
                style={styles.button}
                title="Click Me"
                onPress={ ()=>
                    console.log("Start")
                }
            >
            </Button>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 100,
        borderRadius: 10
    },
    background: {
        flex:1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems:'center'
    },
    logo: {
        top: 70,
        position: "absolute",
        width: 100,
        height: 100,
    }
})