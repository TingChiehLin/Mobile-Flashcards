import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';
import DeckDetails from '../screens/DeckDetails';
import AddDeck from '../screens/AddDeck';

const Stack = createStackNavigator();

const AppNavgator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home}/>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen}/> */}
    </Stack.Navigator>
)

export default AppNavgator;