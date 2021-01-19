import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import Color from '../config/color.js';
import { AntDesign } from '@expo/vector-icons';
import AppText from '../component/AppText';
import AppButton from '../component/AppButton/AppButton';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/splash.png")}/>
                <Text style={styles.tagline}>Flash to see your answer !</Text>
            </View>
            {/* <AntDesign name="right" size={24} color="black" /> */}
            {/* <AppText>Welcome to Flash Card Game !</AppText> */}
            <View style={styles.buttonsContainer}>
                <AppButton
                    title="Start"
                    onPress={ () => console.log("Start")}
                />
                <AppButton
                    title="Start"
                    onPress={ () => navigation.navigate('Home')}
                    color="secondary"
                />
            </View>
            {/* <Button
                style={styles.button}
                title="Click Me"
                onPress={ ()=>
                    console.log("Start")
                }
            > 
            </Button>*/}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    button: {
        width: 300,
        height: 100,
        borderRadius: 10
    },
    background: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center"
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
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})