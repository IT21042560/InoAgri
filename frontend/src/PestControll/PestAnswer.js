import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ActivityIndicator,
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
        console.log("come");
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
                <Text style={{color:'red', fontSize:15}}>
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
              <View style={{ paddingBottom: 100 }}>
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
                    </View>
                  ))}
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
