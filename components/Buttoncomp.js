/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Buttoncomp = ({ backgroundColor, text, onPress }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.buttonWrapper, { backgroundColor: backgroundColor }]}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}> {text}</Text>
      </Pressable>
    </View>
  );
};

export default Buttoncomp;

const styles = StyleSheet.create({
  button: {
    color: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: 20,
    borderRadius: 10,
    padding: 5,
    width: "50%",
    alignSelf: "center",
    backgroundColor: "green",
  },
});
