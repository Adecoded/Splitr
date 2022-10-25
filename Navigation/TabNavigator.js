import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import ActivityScreen from "../screens/ActivityScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import SplitScreen from "../screens/SplitScreen";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{backgroundColor:'#FFFFFF',height:90,alignItems:'center'},
        tabBarLabelStyle:{marginBottom:20,color:'#151515',fontSize:12,fontWeight:'500',lineHeight:15}
      }}
    >
      <Tab.Screen
          options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/darkHouse.png")
                  : require("../assets/House.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
        name="TabHome"
        component={HomeScreen}
      />

      <Tab.Screen
          options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/glassdark.png")
                  : require("../assets/glasslight.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/coindark.png")
                  : require("../assets/Coins.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
        name="Split"
        component={SplitScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/belldark.png")
                  : require("../assets/Bell.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
        name="Activity"
        component={ActivityScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/userdark.png")
                  : require("../assets/User.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
