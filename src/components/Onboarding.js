import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default function Board({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper autoplay={true}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../assets/images/img-1.jpg")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../assets/images/img-2.jpg")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../assets/images/img-3.jpg")}
          />
        </View>
      </Swiper>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Meu painel</Text>
        </View>
        <View style={styles.subTItleContainer}>
          <Text style={styles.subtitle}>Acesse, ou se inscreva.</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.signupContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signup}>Registrar-se</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            title="Login"
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slide: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: width,
    height: height,
  },
  textContainer: {
    position: "absolute",
    top: "45%",
    width: "100%",

    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.90)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subTItleContainer: {
    fontSize: 32,
    color: "#fff",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textShadowColor: "rgba(0, 0, 0, 0.90)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 22,
    color: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    fontWeight: "bold",
    color: "#3b55e6",
  },
  loginContainer: {
    width: 180,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    fontWeight: "bold",
    color: "#3b55e6",
    backgroundColor: "transparent",
  },
});
