/** @format */

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Little lemon footer
        <Text style={headerStyles.innerText}> @Little Lemon</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#DF5F34",
  },
  headerText: {
    padding: 5,
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  innerText: {
    fontWeight: "bold",
  },
});
