import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
// import { LinearGradient } from "expo";
import WeatherApp from "./weatherapp";
// import Screens from "./screen";
import Search from "./searchpage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WeatherApp" component={WeatherApp} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
    // <WeatherApp />
    // <Search />
  );
}
