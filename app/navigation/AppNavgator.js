import React from 'react'
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from '../screens/WelcomeScreen';
import DeckDetails from '../screens/DeckDetails';
import Quiz from '../screens/Quiz';
import AddCard from '../screens/AddCard';
import DeckListView from "../screens/DeckListView"
import AddDeck from "../screens/AddDeck"

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return  <Tab.Navigator
                screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if (route.name === 'Home' ) {
                        tabBarVisible = false
                    }

                    if (route.name === 'DeckListView') {
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
                <Tab.Screen name="DeckListView" component={stackNavigator} />
                <Tab.Screen name="Add Deck" component={addDeckNav} />
        </Tab.Navigator>
}

const Stack = createStackNavigator();
const stackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown: false,
          tabBarVisible: false,
        }}/>
        <Stack.Screen name="Home" component={DeckListView} />
        <Stack.Screen name="DeckDetails" component={DeckDetails} />
        <Stack.Screen name="AddCard" component={AddCard}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
    </Stack.Navigator>
)

const AddDeckStack = createStackNavigator();
const addDeckNav = () => (
  <AddDeckStack.Navigator>
     <AddDeckStack.Screen name="Add Deck"  component={AddDeck}/>
  </AddDeckStack.Navigator>
)
const AppNavgator = () => (
    <TabNavigator />
)
export default AppNavgator;