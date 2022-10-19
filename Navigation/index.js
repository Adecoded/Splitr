import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
 const Stack=createStackNavigator();
export default function Navigation() {
  return (
 <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name='home' component={HomeScreen}/>
    <Stack.Screen name='details' component={DetailScreen}/>
</Stack.Navigator>
 </NavigationContainer>
  )
}
