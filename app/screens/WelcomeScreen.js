import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import color from '../config/color.js';
import { AntDesign } from '@expo/vector-icons'; 

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/favicon.png")}/>
                <Text></Text>
            </View>
            <View style={styles.loginButton}></View>
            <AntDesign name="right" size={24} color="black" />
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: color.primary
    },
    logoContainer: {
        top: 70,
        position: "absolute",
        alignItems:'center'
    },
    logo: {
        width: 100,
        height: 100,
    }
})