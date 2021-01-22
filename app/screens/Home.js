import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../config/color';
import AddDeck from './AddDeck';
import { Ionicons } from '@expo/vector-icons';
import DeckDetails from './DeckDetails';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return  <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Deck Detail') {
                    if(Platform.OS === 'ios') {
                        iconName = focused
                        ? 'ios-file-tray-stacked'
                        : 'ios-file-tray-stacked-outline';
                    } else {
                        iconName = focused
                        ? 'file-tray-stacked'
                        : 'file-tray-stacked-outline';
                    }
                    } else if (route.name === 'Add Deck') {
                    if(Platform.OS === 'ios') {
                        iconName = focused
                        ? 'ios-add'
                        : 'ios-add-outline';
                    } else {
                        iconName = focused
                        ? 'add'
                        : 'add-outline';
                    }
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Deck Detail" component={DeckDetails} />
                <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
}

export default function Home({ naigation }) {
    return (
        <View>
            <TabNavigator/>
        </View>
    )
}



