import * as React from "react";
import { StatusBar } from "expo-status-bar";
import WeatherApp from "./weatherapp";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Search from "./searchpage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WeatherProvider } from "./context";

// const WeatherContext = React.createContext();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
      <WeatherProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WeatherApp" component={WeatherApp} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </WeatherProvider>
  );
}
