/** @format */

import * as React from "react";
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import InputComp from "../components/InputComp";
import Buttoncomp from "../components/Buttoncomp";

const SubscribeScreen = () => {
  const [input, setInput] = React.useState("");
  const handleSubscribe = () => {
    console.log("worked", input);
    if (input.includes("@") && input.includes(".") && input.length > 0) {
      Alert.alert("Thanks for subscribing", "Stay tuned");
      setInput("");
    } else {
      Alert.alert("Please enter a valid email address");
    }
  };
  return (
    <View>
      <Image
        source={require("../img/greyLemon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Subscribe to our Newsletter four our</Text>
        <Text style={styles.text}>latest delicious recipes!</Text>
      </View>
      <View style={styles.inputWrapper}>
        <InputComp onChangeText={(val) => setInput(val)} value={input} />
      </View>
      <View style={styles.buttonWrapper}>
        <Buttoncomp
          backgroundColor={input.length > 2 ? "green" : "grey"}
          text={"Subscribe"}
          onPress={handleSubscribe}
        />
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    margin: 10,
    marginTop: 20,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textWrapper: {
    marginTop: 20,
  },
  inputWrapper: {
    marginTop: 20,
    borderRadius: 10,
    width: "100%",
    alignSelf: "center",
  },
  buttonWrapper: {
    borderRadius: 10,
  },
});
