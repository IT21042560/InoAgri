import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function CostDashboard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <Image
            source={require("./assets/th.jpg")}
            style={{ width: "100%", height: 190 }}
          />

          <View style={{ paddingTop: 10,paddingBottom:60 }}>
            <View
              style={{
                height: "auto",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  height: "auto",
                  alignSelf: "center",
                  width: "90%",
                  paddingTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="money"
                  size={30}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding}>Profit or Loss Calculator</Text>
                <View>
                  <Text
                    style={{
                      paddingTop: 5,
                      textAlign: "justify",
                      lineHeight: 24,
                      letterSpacing: -0.5,
                    }}
                  >
                    Welcome to the Cost Prediction Dashboard of our mobile app,
                    designed specifically for gherkin farmers. Here, you can
                    easily input data related to your crop investments,
                    including expenses for land preparation, fertilizers, labor,
                    and more. Based on the data you provide, our advanced system
                    will analyze and predict the potential profitability of your
                    gherkin farming operations. Once you enter your expenses,
                    our system will calculate the predicted costs and possible
                    profits, giving you a clear picture of the financial outlook
                    of your farming activities. This feature helps you make
                    informed decisions and optimize your resources effectively.
                  </Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                  <Button
                    title="Get Start"
                    onPress={() => {
                      // console.log("Button pressed");
                      navigation.navigate("AddCost");
                    }}
                    color={"#33705b"}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
  subHedding: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#061f1e",
  },
  image: {
    width: 80,
    height: 90,
    marginLeft: 0,
    marginRight: 20,
  },
  imageGridContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imageGridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 10,
  },
  gridText: {
    textAlign: "center",
    color: "#6a859f",
    fontWeight: "bold",
  },
});
