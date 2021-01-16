import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Platform} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/component/AppText';

export default function App() {

  const [outputText, setOutputText] = useState("Default Text");

  return (
    <View>
      <WelcomeScreen/>
      {/* <AppText>I love</AppText> */}
    </View>
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

