import React from 'react'
import { Text } from 'react-native'

import styles from './style';

function AppText({children}) {
    return (
        <div>
            <Text style={styles.text}>{children}</Text>
        </div>
    )
}

export default AppText
