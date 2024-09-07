import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import { Button } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {
  darkGreen,
  shadegreen,
  fontgreen,
} from "../LoginAndSignup/LandingPageConstants";
// import PredictLeaf from './src/DiseasesControl/PredictLeaf'; // Adjust the path as necessary
//  import NextButton from "./NextButton";

export default function PredictLeaf(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          {/* <Image
              style={{ width: "100%", height: 160 }}
              source={require("./assets/Gherkin Leaf Detection.gif")}
            /> */}

          <Image
            source={require("./assets/Gherkin Leaf Detection2.gif")}
            style={{ width: "100%", height: 160 }}
          />
          <View
            style={{
              height: "auto",
              alignSelf: "center",
              width: "80%",
              paddingTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>

          <View style={{ alignItems: "center" }}>
            {/* <Text style={styles.mainHeading}>
                Gherkin Leaf Detection
              </Text> */}

            <Text style={styles.subHeading}>
              To detect the Gherkin leaves, you need to insert the clear image
              of leaves...
            </Text>

            <View style={{ paddingTop: 20 }}>
              <Button
                title="Open Camera"
                onPress={() => navigation.navigate("GetDisease")}
                color={"#33705b"}
              />
            </View>

            <View style={{ paddingTop: 20 }}>
              <Button
                title="Upload Image"
                onPress={() => navigation.navigate("Reject")}
                color={"#33705b"}
              />
            </View>

            <View style={{ paddingTop: 20 }}>
              <Button
                title="RESULT"
                onPress={() => {
                  // console.log("Button pressed");
                  navigation.navigate("Result");
                }}
                color={"#33705b"}
              />
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
  mainHeading: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  subHeading: {
    color: "black",
    fontSize: 15,
    padding: 10,
    lineHeight: 25,
    textAlign: "center",
  },
  bulletList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bulletText: {
    marginLeft: 10,
    color: "black",
    fontSize: 15,
  },
  formContainer: {
    backgroundColor: shadegreen,
    height: 80,
    width: "100%",
    borderTopRightRadius: 100,
    //addingTop: 10,
  },
  inputContainer: {
    height: 150,
    width: "100%",
    borderTopRightRadius: 100,
    marginTop: 5,
  },
  iconStyle: {
    padding: 10,
  },
  formTitle: {
    color: fontgreen,
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 5,
    paddingLeft: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
