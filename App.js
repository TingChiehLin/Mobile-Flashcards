import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Platform} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/component/AppText';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppNavgator from './app/navigation/AppNavgator';

import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';

import decksReducer from './app/store/reducers/decks';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  decks: decksReducer,
});

//Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState());
      return result;
    }
  }
}

//configure Redux Dev Tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//applyMiddleware => connect to store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));

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
          {/* <SafeAreaView style={{ flex: 1 }}> */}
            <AppNavgator/>
          {/* </SafeAreaView> */}
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
