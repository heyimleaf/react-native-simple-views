import * as React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function FirstSection() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Opção login 1</Text>
    </View>
  );
}

function SecondSection() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Opção login 2</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Login() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Opção 1") {
            return (
              <Ionicons
                name={
                  focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Opção 2") {
            return (
              <Ionicons
                name={
                  focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Opção 1" component={FirstSection} />
      <Tab.Screen name="Opção 2" component={SecondSection} />
    </Tab.Navigator>
  );
}
