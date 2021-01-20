import React from 'react'
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
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
  