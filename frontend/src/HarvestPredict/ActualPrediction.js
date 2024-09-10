import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";
import {
  darkGreen,
  green,
  shadegreen,
  fontgreen,
} from "../LoginAndSignup/LandingPageConstants";
import axios from "axios";

export default function ActualPrediction(props) {
  const navigation = useNavigation();

  const [pH, setpH] = useState(0);
  const [Acerage, setAcerage] = useState(0);
  const [Ca, setValueCa] = useState(0);
  const [Mg, setValueMg] = useState(0);
  const [K, setValueK] = useState(0);
  const [N, setValueN] = useState(0);
  const [P, setValueP] = useState(0);
  const [Zn, setValueZn] = useState(0);
  const [Urea, setValueUrea] = useState(0);
  const [TSP, setValueTSP] = useState(0);
  const [MOP, setValueMOP] = useState(0);
  const [CaNO3, setValueCaNO3] = useState(0);
  const [Rainfall, setRainfall] = useState(0);
  const [Temperature, setTemperature] = useState(0);
  const [Expected_Harvest, setExpectedHarvest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [predictedHarvest, setPredictedHarvest] = useState(null);

  const handleSubmit = () => {
    // Assuming you're using a state to manage the value of Expected_Harvest
    console.log("Expected_Harvest:", Expected_Harvest);
    
    const ob = {
      pH,
      Acerage,
      Ca,
      Mg,
      K,
      N,
      P,
      Zn,
      Urea,
      TSP,
      MOP,
      CaNO3,
      Rainfall,
      Temperature,
      "Expected Harvest": Expected_Harvest, // Ensure this is a plain value
    };
  
    axios
      .post("http://192.168.1.4:5000/submitData", ob)
      .then((res) => {
        Alert.alert("Success", "Form data submitted successfully!");
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.error("Error:", err);
        Alert.alert("Error", "Failed to submit form data");
      });
  };
  // Function to handle prediction
  const handlePredict = () => {
    const ob = {
      "pH":pH,
      "Acerage":Acerage,
      "Ca":Ca,
      "Mg":Mg,
      "K":K,
      "N":N,
      "P":P,
      "Zn":Zn,
      "Urea":Urea,
      "TSP":TSP,
      "MOP":MOP,
      "CaNO3":CaNO3,
      "Rainfall":Rainfall,
      "Temperature":Temperature,
      "Expected Harvest": Expected_Harvest,
    };

    console.log(ob);
    axios
      .post("http://192.168.1.4:5000/harvest/predict", ob)
      .then((res) => {
        setPredictedHarvest(res.data.predicted_harvest);
        Alert.alert(
          "Prediction",
          `Predicted Harvest: ${res.data.predicted_harvest}`
        );
      })
      .catch((err) => {
        console.error("Error:", err);
        Alert.alert("Error", "Failed to predict the harvest");
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("./assets/fertilizer1.jpeg")}
          />

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                letterSpacing: 1.5,
              }}
            >
              Actual Harvest Prediction
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                letterSpacing: 2,
              }}
            >
              Enter the details about the crop cultivation
            </Text>

            <View
              style={{
                backgroundColor: shadegreen,
                height: 1800,
                width: "100%",
                borderTopRightRadius: 100,
                paddingTop: 10,
                //alignItems: "flex-start",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: fontgreen,
                  fontSize: 18,
                  fontWeight: 900,
                  letterSpacing: 5,
                  paddingLeft: 10,
                }}
              >
                GHERKIN CULTIVATION DETAILS
              </Text>

              <View
                style={{
                  height: 700,
                  width: "100%",
                  borderTopRightRadius: 100,
                  //paddingLeft:30,
                  //alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={styles.subHeading}>pH value</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="pH value"
                  onChangeText={setpH}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Acerage</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Acerage"
                  onChangeText={setAcerage}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Calcium (Ca)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueCa}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Magnesium (Mg)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueMg}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Potassium (K)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueK}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Nitrogen (N)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueN}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Posporus (P)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueP}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Zinc (Zn)</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Amount"
                  onChangeText={setValueZn}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Urea</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  onChangeText={setValueUrea}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>TSP</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  onChangeText={setValueTSP}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>MOP</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  onChangeText={setValueMOP}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>CaNO3</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  onChangeText={setValueCaNO3}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Expected Rainfall</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Rainfall"
                  onChangeText={setRainfall}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Expected Temperature</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Temperature"
                  onChangeText={setTemperature}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <Text style={styles.subHeading}>Expected Harvest</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="Expected Harvest"
                  onChangeText={setExpectedHarvest}
                  keyboardType="numeric"
                  inputMode="numeric"
                ></TextInput>

                <View style={styles.buttonContainer}>
                  <NextButton
                    textColor="white"
                    bgColor={darkGreen}
                    btnLabel={"Submit"}
                    width={110}
                    onPress={handleSubmit}
                  />
                  <NextButton
                    textColor="white"
                    bgColor={isSubmitted ? darkGreen : "grey"}
                    btnLabel={"Predict"}
                    width={110}
                    disabled={!isSubmitted}
                    onPress={handlePredict}
                  />
                </View>
                <View style={styles.predictionCard}>
                  {predictedHarvest && (
                    <Text style={styles.predictionResult}>
                      Predicted Harvest: {predictedHarvest}
                    </Text>
                  )}
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
  subHeading: {
    textAlign: "left",
    fontSize: 13,
    fontWeight: "800",
    color: darkGreen,
    paddingLeft: 20,
    letterSpacing: 1.5,
  },
  mainHeading: {
    paddingTop: 12,
    textAlign: "left",
    fontSize: 22,
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
  textbox: {
    borderRadius: 15,
    color: darkGreen,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "rgb(220,220,220)",
    marginVertical: 10,
    padding: 15,
    marginLeft: 25,
  },
  dropdown: {
    height: 50,
    width: "80%",
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 100,
    marginVertical: 10,
    padding: 15,
  },
  predictionCard: {
    backgroundColor: "#ebfaeb",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    marginLeft: 40,
    alignItems: "center",
    width: 330,
    height: 150,
  },
  predictionText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  predictionResult: {
    fontSize: 18,
    fontWeight: "bold",
    color: darkGreen,
    textAlign: "center",
    marginTop: 20,
  },
});
