/** @format */

import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./src/components/LittleLemonHeader";
import LittleLemonFooter from "./src/components/LittleLemonFooter";
import MenuItems from "./src/components/MenuItems";
import Welcome from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Welcome />

        {/* <LittleLemonHeader />

        <MenuItems /> */}
      </View>
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
