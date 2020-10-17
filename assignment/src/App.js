/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import details from './details';
import capitial from './capitial';



const Stack = createStackNavigator();

function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={homeScreen}/>
        <Stack.Screen name="details" component={details}/>
        <Stack.Screen name="capitial" component={capitial}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default App ;


