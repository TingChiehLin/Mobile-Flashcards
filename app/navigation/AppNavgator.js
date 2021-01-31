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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Add Deck':
      return 'Add New Deck';
    case 'DECKLISTVIEW':
      return 'ALL DECKS';
    case 'DeckDetails':
      return 'Deck Details';
  }
}
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return  <Tab.Navigator
                screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                  
                    if (route.name === 'Home') {
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
                <Tab.Screen 
                  name="Home" 
                  component={DeckListView}
                />
                <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
}
const Stack = createStackNavigator();
const AppNavgator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
             headerShown: false
        }}/>
        <Stack.Screen name="Home" options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
        })} component={TabNavigator} />
        <Stack.Screen name="DeckDetails" component={DeckDetails} />
        <Stack.Screen name="AddCard" component={AddCard}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
    </Stack.Navigator>
)
export default AppNavgator;