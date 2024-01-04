/** @format */

import * as React from "react";
import { Button, Image, View, StyleSheet, Text, Pressable } from "react-native";
import Buttoncomp from "../components/Buttoncomp";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  const handleSubscribe = () => {
    navigation.navigate("Subscribe");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../img/littleLemon.png")}
          resizeMode="contain"
          style={{ width: "100%", height: 400, marginTop: 50 }}
        />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={styles.text}>Little Lemon , your local</Text>
          <Text style={styles.text}> Meditarranean Bistro </Text>
        </View>
      </View>
      <View>
        <Buttoncomp
          text={"Newsletter"}
          backgroundColor={"green"}
          onPress={handleSubscribe}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    justifyContent: "space-around",
    backgroundColor: "white",
    flex: 1,
  },
  imageWrapper: {
    padding: 5,
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});
