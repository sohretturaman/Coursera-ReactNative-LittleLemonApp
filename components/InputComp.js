/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const InputComp = ({ value, onChangeText }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Type your email.."
        onChangeText={onChangeText}
        value={value}
        keyboardType="email-address"
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    width: "80%",
    alignSelf: "center",
  },
  input: {
    padding: 5,
  },
});
