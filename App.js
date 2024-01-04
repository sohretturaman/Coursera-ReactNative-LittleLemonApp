/** @format */

import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./src/components/LittleLemonHeader";
import MenuItems from "./src/components/MenuItems";
import Welcome from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import { PaperProvider } from "react-native-paper";
//import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ drawerPosition: "right" }}>
        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Menu" component={MenuItems} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
