import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Login'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
              screenOptions={{headerShown: false}}

      
      >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})