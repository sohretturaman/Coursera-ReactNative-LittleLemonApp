/** @format */

import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  Pressable,
} from "react-native";

const Welcome = () => {
  const colorSchema = useColorScheme();
  const navigation = useNavigation();
  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorSchema === "dark" ? "#495E57" : "#fff" },
      ]}
    >
      <Image
        style={styles.logo}
        source={require("../img/LittleLemonLogo.png")}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Menu");
        }}
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
      <Text style={styles.subtitle}>Colors Scheme : {colorSchema}</Text>
      {/*  <Image
        style={styles.image}
        source={require("../img/Picture1.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture2.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture3.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture4.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#F4CE14",
  },
  subtitle: {
    fontSize: 16,
    padding: 10,
    color: "#333333",
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#BCB9AA",
    padding: 10,
    margin: 10,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Welcome;
