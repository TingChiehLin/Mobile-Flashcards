import React from 'react'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/color';

import AddDeck from './AddDeck';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: colors.primary,
            activeTintColor: "white",
            inactiveBackgroundColor: '#eee',
            inactiveTintColor: "black"
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>
            }}
        />
        <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
}

export default function Home({ naigation }) {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}
