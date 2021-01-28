import React from 'react'
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';
import DeckDetails from '../screens/DeckDetails';
import Quiz from '../screens/Quiz';
import AddCard from '../screens/AddCard';

const Stack = createStackNavigator();

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'DeckDetails':
      return 'Deck Details';
    case 'AddCard':
      return 'Add Card';
    case 'AddCard':
      return 'Add Card';
  }
}

const AppNavgator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} option={({ route }) => ({
            headerTitle: getHeaderTitle(route)
        })}/>
        <Stack.Screen name="DeckDetails" component={DeckDetails} option={({ route }) => ({
            headerTitle: getHeaderTitle(route)
        })}/>
        <Stack.Screen name="AddCard" component={AddCard}
            option={({ route }) => ({
                headerTitle: getHeaderTitle(route)
        })}/>
        <Stack.Screen name="Quiz" component={Quiz} option={({ route }) => ({
            headerTitle: getHeaderTitle(route)
        })}/>
    </Stack.Navigator>
)

export default AppNavgator;

// const StackNavigator = () => (
//     <Stack.Navigator 
//       initialRouteName="Welcome"
//       screenOptions={{
//         headerStyle: { backgroundColor: colors.primary },
//         headerTintColor: "white",
//       }}
//     >
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen 
//         name="Home" 
//         component={Home}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="AddDeck" component={AddDeck} ptions={{ title: 'Add Deck' }}/>
//       <Stack.Screen name="DeckDetails" component={DeckDetails} options={{ title: 'Deck Details'}}/>
//     </Stack.Navigator>
//   )
  