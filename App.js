import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Platform} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/component/AppText';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddDeck" component={AddDeck} />
    <Stack.Screen name="DeckDetails" component={DeckDetails} />
  </Stack.Navigator>
)

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat': require('./app/assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./app/assets/fonts/Montserrat/Montserrat-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [outputText, setOutputText] = useState("Default Text");

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} 
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err)}
    />;
  }

  return (
    <NavigationContainer>
      <StackNavigator/>
      <WelcomeScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/* <SafeAreaView style={styles.container}>
<StatusBar style="auto" />
<Text>{outputText}</Text>
<View style={{ padding: 30 }}>
</View>
</SafeAreaView> */}

{/* <TextInput placeholder="Course Goal"/> */}
        {/* <Button color="orange" title="ADD" onPress={() =>{}}/>
        <Button color="orange" title="ADD" onPress={() => Alert.alert(
          "My title", "My message",
           [{text: "Yes", onPress: () => console.log("Yes")},
            {text: "No", onPress: () => console.log("No")}]
          )}/> */}
{/* <Button
  title="Click Me"
  onPress={()=>
    Alert.prompt("My title", "My message", text => console.log(text))
  }
>
</Button> 
*/}
{/* <Button title="Change Text" onPress={() => setOutputText('Text changed!')}/> */}

// Platform.OS === "android" ? StatusBar.currentHeight : 0,

//Dimensions.get("screen");

