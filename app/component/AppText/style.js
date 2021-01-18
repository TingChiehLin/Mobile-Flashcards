import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: "white",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Montserrat"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})

export default styles;
