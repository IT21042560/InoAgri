import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ActivityIndicator,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PestContext from "./content/index";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Svg, {
  Circle,
  Rect,
  Ellipse,
  Polygon,
  Polyline,
  Path,
  Line,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import SpiderWeb from "./animations/SpiderWeb"; // Adjust the path as needed
import * as Speech from "expo-speech";

export default function PestAnswer() {
  const route = useRoute();
  const data = route.params;
  const predictedClass = data.res.inception_prediction.predicted_class;
  const objectType = data.res.yolo_prediction.object_type;
  // console.log(data.res.inception_prediction.predicted_class);
  // console.log(data.res.yolo_prediction.object_type);

  const [pestInfo, setPestInfo] = useState("");
  const [pestInfoYolo, setPestInfoYolo] = useState("");
  const [pestInfoIncep, setPestInfoIncep] = useState("");
  const [pest_names, setPestNames] = useState("");
  const [probability, setProbability] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const [chemical, setChemical] = useState([]);
  const navigation = useNavigation();



  let answerGemini = data.res.recommendations.replace(/\*/g, "");
  answerGemini = answerGemini.replace(/\s{2,}/g, " ");
  // Breaking into two paragraphs after "Best Practices to Prevent Mite Infestations"
  // Find all periods (.) in the text and their indexes
  const periodIndexes = [...answerGemini.matchAll(/\./g)].map(
    (match) => match.index
  );

  // Check if there are any periods found
  if (periodIndexes.length > 0) {
    // Calculate the middle index of the text
    const middleIndex = Math.floor(answerGemini.length / 2);

    // Find the period closest to the middle of the text
    const closestPeriodIndex = periodIndexes.reduce((prev, curr) => {
      return Math.abs(curr - middleIndex) < Math.abs(prev - middleIndex)
        ? curr
        : prev;
    });

    // Split the text at the closest period index and add a line break
    answerGemini =
      answerGemini.slice(0, closestPeriodIndex + 1) +
      "\n\n" +
      answerGemini.slice(closestPeriodIndex + 1);
  }

 let answerGeminiTrans = data.res.trans.replace(/\*/g, "");
  answerGeminiTrans = answerGeminiTrans.replace(/\s{2,}/g, " ");
  // Breaking into two paragraphs after "Best Practices to Prevent Mite Infestations"
  // Find all periods (.) in the text and their indexes
  const periodIndexes1 = [...answerGeminiTrans.matchAll(/\./g)].map(
    (match) => match.index
  );

  // Check if there are any periods found
  if (periodIndexes1.length > 0) {
    // Calculate the middle index of the text
    const middleIndex1 = Math.floor(answerGeminiTrans.length / 2);

    // Find the period closest to the middle of the text
    const closestPeriodIndex = periodIndexes1.reduce((prev, curr) => {
      return Math.abs(curr - middleIndex1) < Math.abs(prev - middleIndex1)
        ? curr
        : prev;
    });

    // Split the text at the closest period index and add a line break
    answerGeminiTrans =
      answerGeminiTrans.slice(0, closestPeriodIndex + 1) +
      "\n\n" +
      answerGeminiTrans.slice(closestPeriodIndex + 1);
  }



  const speak = (msg) => {
    Speech.speak(msg);
  };

  const openGitHubPage = (obj) => {
    if (obj == "Aphids") {
      const url = "https://it21042560.github.io/AR16/"; // Replace with your GitHub Pages URL
      Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
      );
    } else if (obj == "Thrips") {
      const url = "https://it21042560.github.io/AR13/"; // Replace with your GitHub Pages URL
      Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
      );
    } else if (obj == "Catepillars") {
      const url = "https://it21042560.github.io/AR11/"; // Replace with your GitHub Pages URL
      Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
      );
    } else if (obj == "Mites") {
      const url = "https://it21042560.github.io/AR14/"; // Replace with your GitHub Pages URL
      Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
      );
    } else if (obj == "whiteflies") {
      const url = "https://it21042560.github.io/AR15/"; // Replace with your GitHub Pages URL
      Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
      );
    }
  };

  useEffect(() => {
    if (
      data.res.inception_prediction.predicted_class ===
      data.res.yolo_prediction.object_type
    ) {
      setPestInfo(
        PestContext.find(
          (pest) =>
            pest.pest_name === data.res.inception_prediction.predicted_class
        )
      );
      if (data.res.inception_prediction.predicted_class === "Catterpillar") {
        setPestNames("Catepillars");
        axios
          .get(`http://192.168.1.4:5000/pest/chemical/Catepillars`)
          .then((res) => {
            setChemical(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setPestNames(data.res.inception_prediction.predicted_class);
        axios
          .get(
            `http://192.168.1.4:5000/pest/chemical/${data.res.inception_prediction.predicted_class}`
          )
          .then((res) => {
            setChemical(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      if (data.res.yolo_prediction.probability >= 0.9) {
        setProbability(data.res.yolo_prediction.probability);
        setPestInfoYolo(
          PestContext.find(
            (pest) => pest.pest_name === data.res.yolo_prediction.object_type
          )
        );
        setPestInfoIncep(
          PestContext.find(
            (pest) =>
              pest.pest_name === data.res.inception_prediction.predicted_class
          )
        );
        setPestNames(data.res.yolo_prediction.object_type);
        axios
          .get(
            `http://192.168.1.4:5000/pest/chemical/${data.res.yolo_prediction.object_type}`
          )
          .then((res) => {
            console.log(res.data);
            setChemical(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setShowButton(true);
      }
    }
  }, [predictedClass, objectType]);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <View style={{ paddingBottom: 30 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("../Screen/assets/pest_cover.png")}
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
                <FontAwesome
                  name="bolt"
                  size={30}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding1}>
                  Pest Prediction & Solutions
                </Text>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                paddingBottom: 10,
              }}
            >
              <Text>Uploaded Image</Text>
            </View>
            <Image
              style={{
                width: 300,
                height: 300,
                borderRadius: 10,
                alignSelf: "center",
              }}
              source={{ uri: data.imageUri }}
            />
            {data.res.inception_prediction.predicted_class ==
            data.res.yolo_prediction.object_type ? (
              <View style={{ paddingBottom: 60, paddingTop: 20 }}>
                <View style={StyleSheet.absoluteFill}>
                  <Svg
                    height="100%"
                    width="100%"
                    viewBox="0 0 100 100"
                    style={styles.svg}
                  >
                    <SpiderWeb size={350} strokeColor="#1cac78" />
                    <SpiderWeb size={390} strokeColor="#1cac78" />
                    <SpiderWeb size={300} strokeColor="#1cac78" />
                  </Svg>
                </View>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                  <Text style={styles.subHedding}>
                    Predict Result - {data.res.yolo_prediction.object_type}
                  </Text>

                  <View
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      width: "80%",
                      paddingTop: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                        fontFamily: "Roboto",
                      }}
                    >
                      {pestInfo.description}
                    </Text>
                  </View>
                </View>
              </View>
            ) : showButton == false ? (
              <View style={{ paddingTop: 20, paddingBottom: 70 }}>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                  <Text style={styles.subHedding}>
                    {" "}
                    Predict Result - {pestInfoYolo.pest_name}
                  </Text>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 10,
                  }}
                >
                  <Text style={styles.discrepancyText}>
                    The input image is not of sufficient quality to train the
                    model. It cannot accurately predict the exact answer for the
                    given image. Please try to re-enter a higher quality image
                    and try again. The probability for this input image is less
                    than {probability}.
                  </Text>
                  <View style={{ paddingTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                        paddingVertical: 10,
                      }}
                    >
                      {pestInfoYolo.description}
                    </Text>
                  </View>
                </View>

                {/* <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 10,
                  }}
                >
                  <Text style={styles.discrepancyText}>OR</Text>
                  <View style={{ paddingTop: 10 }}>
                    <Text>{pestInfoIncep.pest_name}</Text>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                        paddingVertical: 10,
                      }}
                    >
                      {pestInfoIncep.description}
                    </Text>
                  </View>
                </View> */}
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  width: "80%",
                  paddingTop: 10,
                }}
              >
                <Text style={{ color: "red", fontSize: 15 }}>
                  Incorrect or does not match the input image due to low
                  quality.
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("OpenPestCamara")}
                >
                  <Text style={styles.buttonText}>Try Again</Text>
                </TouchableOpacity>
              </View>
            )}

            {showButton == false ? (
              <View style={{ paddingBottom: 20, paddingTop: 20 }}>
                <View>
                  <Text style={styles.subHedding}>
                    Chemicals for avoid {pest_names}
                  </Text>
                  {/* <Text style={styles.subHedding}>Aviod {chemical[0].chemical_image}</Text> */}
                </View>
                <View>
                  {chemical.map((c) => (
                    <View style={{ paddingTop: 20 }}>
                      <Text style={styles.normalhe}>
                        Chemical Name - {c.chemical_name}
                      </Text>
                      <Text style={styles.normalText}>
                        MRL Level - {c.mrl_level}
                      </Text>
                      <Text style={styles.normalText}>
                        PHI Days - {c.phi_days}
                      </Text>
                      <Image
                        style={{
                          width: 200,
                          height: 200,
                          borderRadius: 30,
                          alignSelf: "center",
                        }}
                        source={{
                          uri: `http://192.168.1.4:5000/chemical_images/${c.chemical_image}`,
                        }}
                      />

                      <View style={{ width: "50%", alignSelf: "center", padding:20 }}>
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#00a550", // optional: add a background color
                            padding: 10,
                            borderRadius: 5,
                          }}
                          onPress={() => speak(c.avoid)}
                        >
                          <FontAwesome name="play" size={24} color="white" />
                          <Text
                            style={{
                              marginLeft: 10,
                              color: "white",
                              fontSize: 16,
                            }}
                          >
                            Speak
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>

                <View style={{ paddingBottom: 10, paddingTop: 30 }}>
                  <View>
                    <View
                      style={{
                        height: "auto",
                        alignSelf: "center",
                        width: "80%",
                        paddingTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome
                        name="cogs"
                        size={30}
                        color={"#33705b"}
                        style={{
                          padding: 10,
                        }}
                      />

                      <Text style={styles.subHedding1}>
                        AI Generator Answer for {pest_names}
                      </Text>

                      <Text
                        style={{
                          fontSize: 14,
                          textAlign: "justify",
                          letterSpacing: -0.5,
                          paddingVertical: 10,
                        }}
                      >
                        {answerGemini}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ paddingBottom: 40, paddingTop: 10 }}>
                  <View>
                    <View
                      style={{
                        height: "auto",
                        alignSelf: "center",
                        width: "80%",
                        paddingTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome
                        name="language"
                        size={30}
                        color={"#33705b"}
                        style={{
                          padding: 10,
                        }}
                      />

                      <Text style={styles.subHedding1}>
                        AI Generator Translated Answer for {pest_names}
                      </Text>

                      <Text
                        style={{
                          fontSize: 14,
                          textAlign: "justify",
                          letterSpacing: -0.5,
                          paddingVertical: 10,
                        }}
                      >
                        {answerGeminiTrans}
                      </Text>
                      <View style={{ width: "100%", alignSelf: "center"}}>
                        <TouchableOpacity
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#00a550", // optional: add a background color
                            padding: 10,
                            borderRadius: 5,
                          }}
                          onPress={() => speak(answerGeminiTrans)}
                        >
                          <FontAwesome name="play" size={24} color="white" />
                          <Text
                            style={{
                              marginLeft: 10,
                              color: "white",
                              fontSize: 16,
                            }}
                          >
                            Speak
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ paddingBottom: 60 }}>
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
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome
                        name="cube"
                        size={30}
                        color={"#33705b"}
                        style={{
                          padding: 10,
                        }}
                      />
                      <Text style={styles.subHedding1}>
                        AR view of {pest_names}
                      </Text>

                      <Text
                        style={{
                          fontSize: 14,
                          textAlign: "justify",
                          letterSpacing: -0.5,
                          paddingVertical: 10,
                        }}
                      >
                        This immersive experience is designed to help you
                        understand the pest's general characteristics and
                        behavior better. Please note that this is a prototype
                        view and may not display the actual textures or precise
                        details of the pest. The AR model serves as a visual aid
                        to provide a close representation, helping you get a
                        better grasp of the pest's appearance and form.
                      </Text>

                      <View style={{ paddingTop: 20 }}>
                        <Button
                          title="Try AR"
                          onPress={() => openGitHubPage(pest_names)}
                          color={"#33705b"}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
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
  subHedding1: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#061f1e",
  },
  subHedding: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#c46210",
  },
  normalhe: {
    textAlign: "left",
    fontSize: 15,
    marginLeft: 40,
    paddingBottom: 10,
    fontWeight: "bold",
    color: "#ff9f00",
  },
  normalText: {
    textAlign: "left",
    fontSize: 13,
    marginLeft: 40,
    color: "black",
  },
  discrepancyText: {
    fontSize: 18,
    color: "#d9534f",
    textAlign: "justify",
    letterSpacing: -0.8,
    fontWeight: "bold",
  },
  button: {
    width: 100, // Width of the button
    padding: 10, // Padding inside the button
    backgroundColor: "#006a4e", // Background color
    borderRadius: 5, // Rounded corners
    alignItems: "center", // Center the text
    justifyContent: "center", // Center the text vertically
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 80,
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 16, // Font size
  },
  svgBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
});
