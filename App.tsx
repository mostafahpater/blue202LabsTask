/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex:1}}>
      <StatusBar />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


export default App;
