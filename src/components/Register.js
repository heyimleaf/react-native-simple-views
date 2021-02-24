import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function OptionOne({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Essa é a opção 1 {"\n"}</Text>
      <Button
        onPress={() => navigation.navigate("Opção 2")}
        title="Ir para opção 2"
      />
    </View>
  );
}

function OptionTwo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Essa é a opção 2 {"\n"}</Text>
      <Button onPress={() => navigation.goBack()} title="Voltar para opção 1" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Register() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Opção 1" component={OptionOne} />
      <Drawer.Screen name="Opção 2" component={OptionTwo} />
    </Drawer.Navigator>
  );
}
