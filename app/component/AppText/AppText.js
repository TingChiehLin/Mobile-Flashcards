import React from 'react'
import { Text, View } from 'react-native'
import styles from './style';

function AppText({children}) {
    return (
        <View>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default AppText
