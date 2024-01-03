/** @format */

import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./src/components/LittleLemonHeader";
import LittleLemonFooter from "./src/components/LittleLemonFooter";
import MenuItems from "./src/components/MenuItems";
import Welcome from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerStyle: { backgroundColor: "#FBDABB" } }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: "Home",
              headerTitleAlign: "center",
              header: LittleLemonHeader,
            }}
          />
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
