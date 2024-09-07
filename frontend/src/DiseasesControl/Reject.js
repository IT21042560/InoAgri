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
  
  export default function Reject(props) {
    const navigation = useNavigation();
    return (
      <View style={styles.mainContainer}>
        <Header />
        <View style={{ paddingBottom: 130 }}>
          <ScrollView>
              <Image
                  source={require("./assets/Reject.jpg")}
                  style={{ width: "100%", height: 190 }}
                />
  
            <View style={{ paddingTop: 10 }}>
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
                  {/* <FontAwesome
                    name="lightbulb-o"
                    size={30}
                    color={"#33705b"}
                    style={{
                      padding: 10,
                    }}
                  /> */}
                  <Text style={styles.subHedding}>
                   Object Detection Fail
                  </Text>
                  <View>
                    <Text
                      style={{
                        paddingTop: 5,
                        textAlign: "justify",
                        lineHeight: 24,
                        letterSpacing: -0.5,
                      }}
                    >
                      Identify the healthy and disease infected leaves. Here, you can clearly identify the Downy Mildew and Gummy Blight as diseases and healthy leaves. upload pictures of gherkin leaves, whether they are healthy or potentially diseased.
                    </Text>
                  </View>
                </View>
                
              </View>
            </View>
  
            <View style={{ paddingTop: 20 }}>
              <View></View>
              <View>
                {/* <LottieView
                  source={require("./animations/Animation - 1719145590451.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200, }}
                /> */}
                {/* <Image
                  source={require("./assets/Cucumber.jpg")}
                  style={{ width: "100%", height: 200 }}
                /> */}
                <View
                  style={{
                    height: "auto",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome
                    name="leaf"
                    size={25}
                    color={"#33705b"}
                    style={{
                      padding: 10,
                    }}
                  />
                 
  
                  <View style={{ paddingTop: 20 }}>
                      <Button
                        title="Back"
                        onPress={() => {
                          // console.log("Button pressed");
                          navigation.navigate("DiseasesDashboard");
                        }}
                        color={"#33705b"}
                      />
                  </View>
                </View>
              </View> 
            </View>
  
  
            <View style={{ paddingTop: 30 }}>
              <View></View>
              <View>
                {/* <LottieView
                  source={require("./animations/Animation - 1719145590451.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200, }}
                /> */}
                {/* <Image
                  source={require("./assets/Gherkin Leaf Detection.gif")}
                  style={{ width: "100%", height: 150 }}
                /> */}
                <View
                  style={{
                    height: "auto",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                </View>
              </View>
            </View>
  
            <View style={{ paddingTop: 10 }}>
              {/* <View style={{ justifyContent: "center" }}>
                <Text style={styles.subHedding}>The system identified categories</Text>
                <Text style={styles.alignSelf}>Detect the gherkin leaves firstly using object detection. If not do not allow to continue further process</Text>
              </View> */}
            </View>
  
  
            <View style={{ paddingTop: 6 }}>
              {/* <View style={{ justifyContent: "center" }}>
                <Text style={styles.subHedding}>Second step: Identify the disease</Text>
              </View> */}
  
              <View style={styles.imageGridContainer1}>
                <View style={styles.imageGridRow}>
        
                  <View>
                    {/* <Image
                      source={require("./assets/pest_3.png")}
                      style={styles.image}
                    /> */}
                    {/* <Text style={{ color: "#6a859f", fontWeight: "bold" }}>
                      Catepiller
                    </Text> */}
                  </View>
                </View>
  
               
              </View>
            </View>
  
            <View></View>
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