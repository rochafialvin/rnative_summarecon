import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// react navigation container
import { NavigationContainer } from '@react-navigation/native'

// react navigation stack
import { createStackNavigator } from '@react-navigation/stack'

// object stack
const Stack = createStackNavigator()

// component
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   view: {
      backgroundColor: 'red'
   },
   text : {
      color: 'white'
   }
})

export default App