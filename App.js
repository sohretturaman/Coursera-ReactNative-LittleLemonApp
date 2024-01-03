/** @format */

import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./src/components/LittleLemonHeader";
import MenuItems from "./src/components/MenuItems";
import Welcome from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { PaperProvider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Menu") {
            iconName = "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Menu" component={MenuItems} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen name="TabComp" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
