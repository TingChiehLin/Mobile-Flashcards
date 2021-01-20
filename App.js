import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Platform} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/component/AppText';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNavgator from './app/navigation/AppNavgator';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import decksReducer from './app/store/reducers/decks';

const rootReducer = combineReducers({
  decks: decksReducer
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <NavigationContainer>
        <AppNavgator/>
      </NavigationContainer>
    </Provider>
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

