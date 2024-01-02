/** @format */

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Welcome to
        <Text style={headerStyles.innerText}> Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#DF5F34",
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  innerText: {
    fontWeight: "bold",
  },
});
