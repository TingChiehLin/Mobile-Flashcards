import React from 'react'
import { ImageBackground, StyleSheet, View, Image} from 'react-native';

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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: 'blue',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
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