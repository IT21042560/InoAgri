import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
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
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function Result(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;

  const [temperature, settemperature] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [clickButton, setClickButton] = useState(false);

  const answer = data.res.disease_prediction[0];

  console.log(answer);

  const passtoGemini = async () => {
    const formData = new FormData();
    setClickButton(true);
    formData.append("image", {
      uri: data.imageUri,
      name: "photo.jpg",
      type: "image/jpeg",
    });
    formData.append("disease_name", "downy mildew");
    formData.append("temperature", temperature);
    formData.append("humidity", humidity);

    try {
      const response = await fetch(
        "http://192.168.1.4:5000/predict/leaf_disease",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        // Alert.alert("Success", "Photo uploaded successfully");
        setClickButton(false);
        navigation.navigate("Solutions", { data: responseData });
      } else {
        // Alert.alert("Error", "Failed to upload photo");
      }
    } catch (error) {
      Alert.alert("Error", `Cannot identify entered image`);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      {clickButton === true ? (
        <View style={{ paddingTop: 50 }}>
          <ActivityIndicator size="large" color="#1cac78" />
        </View>
      ) : (
        <View style={{ paddingBottom: 130 }}>
          <ScrollView>
            {/* <Image
              style={{ width: "100%", height: 160 }}
              source={require("./assets/Gherkin Leaf Detection.gif")}
            /> */}

            <Image
              source={require("./assets/diseaseCover.png")}
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
                Identify the healthy and disease infected leaves. Here, you can
                clearly identify the Downy Mildew and Gummy Blight as diseases
                and healthy leaves. upload pictures of gherkin leaves, whether
                they are healthy or potentially diseased.
              </Text>

              {/* <FlatList
                data={bulletPoints}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.bulletList}
              /> */}
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
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  padding: 20,
                  color: "green",
                }}
              >
                Predicted Answer : {answer}
              </Text>

              <Text style={styles.feildName}>Temperature</Text>
              <TextInput
                style={{
                  borderRadius: 10,
                  color: "#100c08",
                  paddingHorizontal: 10,
                  width: "90%",
                  backgroundColor: "rgb(220,220,220)",
                  marginVertical: 10,
                  padding: 15,
                }}
                placeholder="Temperature"
                placeholderTextColor={"black"}
                keyboardType="numeric"
                onChangeText={settemperature}
              ></TextInput>

              <Text style={styles.feildName}>Humidity</Text>
              <TextInput
                style={{
                  borderRadius: 10,
                  color: "#100c08",
                  paddingHorizontal: 10,
                  width: "90%",
                  backgroundColor: "rgb(220,220,220)",
                  marginVertical: 10,
                  padding: 15,
                }}
                placeholder="Humidity"
                placeholderTextColor={"black"}
                keyboardType="numeric"
                onChangeText={sethumidity}
              ></TextInput>
              <View style={{ paddingTop: 20 }}>
                <Button
                  title="SOLUTIONS"
                  onPress={passtoGemini}
                  color={"#33705b"}
                />
              </View>

              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  {/* <View style={styles.buttonContainer}>
                    <NextButton
                      textColor="white"
                      width={150}
                      bgColor={darkGreen}
                      btnLabel={"Predict ..."}
                      page="CultivationDetails"
                    />
                  </View> */}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
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
  feildName: {
    paddingTop: 5,
    fontSize: 17,
  },
});
