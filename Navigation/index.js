import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ActivityScreen from "../screens/ActivityScreen";
import Details from "../screens/Details";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import Splash from "../screens/Splash";
import SplashScreen from "../screens/SplashScreen";
import SplitScreen from "../screens/SplitScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="splashtwo" component={Splash} />
        <Stack.Screen name="splashone" component={SplashScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Split" component={SplitScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
