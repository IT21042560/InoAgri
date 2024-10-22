import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#014421",
        opacity: 0.9,
        height: 60,
        padding: 2,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        source={require("../../LoginAndSignup/assets/hjs_logo.png")}
        style={{ width: 35, height: 35, marginLeft: 25 }}
      />
      </TouchableOpacity>
      <Text
        style={{
          color: "#ed9121",
          marginLeft: 60,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        INO AGRI FARM
      </Text>
      <TouchableOpacity style={{marginHorizontal:30}} onPress={() => navigation.navigate("AddChemical")}>
      <FontAwesome
        name="bars"
        size={25}
        color={"white"}
        style={{ marginLeft: "auto", paddingRight: 10 }}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
