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
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../../Screen/Header/Index";
import Footer from "../../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { darkGreen } from "../../LoginAndSignup/LandingPageConstants";
import axios from "axios";

export default function AddChemicals(props) {
  const navigation = useNavigation();
  const [pickedImage, setPickedImage] = useState(null);
  const [chemical_name, setChemicalName] = useState("");
  const [pest_name, setPestName] = useState([""]);
  const [mrl_level, setMERLLevel] = useState("");
  const [phi_days, setPHIDays] = useState("");
  const [chemical_image, setChemicalImage] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      setChemicalImage(result.assets[0].fileName);
      // Pass the photo to the backend
      const formData = new FormData();
      formData.append("image", {
        uri: result.assets[0].uri,
        name: result.assets[0].fileName,
        type: "image/jpeg",
      });

      try {
        const response = await fetch(
          "http://192.168.1.4:5000/upload_chemical_img",
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
          console.log(responseData.file_path);
        } else {
          Alert.alert("Error", "Failed to upload photo");
        }
      } catch (error) {
        Alert.alert("Error", `An error occurred: ${error.message}`);
      }
    }
  };

  const addPestNameField = () => {
    setPestName([...pest_name, ""]);
  };

  const removePestNameField = (index) => {
    const newPestNames = pest_name.filter((_, i) => i !== index);
    setPestName(newPestNames);
  };

  const handlePestNameChange = (text, index) => {
    const newPestNames = pest_name.map((name, i) =>
      i === index ? text : name
    );
    setPestName(newPestNames);
  };

  const SubmitChemical = () => {
    const ob = {
      chemical_name,
      pest_name,
      mrl_level,
      phi_days,
      chemical_image,
    };

    axios
      .post("http://192.168.1.101:5000/pest/chemical", ob)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Text style={styles.subHedding}>Add New Chemical</Text>
            <Text style={styles.feildName}>Chemical Name :</Text>
            <TextInput
              style={{
                borderRadius: 10,
                color: "#100c08",
                paddingHorizontal: 10,
                width: "100%",
                backgroundColor: "rgb(220,220,220)",
                marginVertical: 10,
                padding: 15,
              }}
              placeholder="name of the chemical"
              placeholderTextColor={"black"}
              onChangeText={setChemicalName}
            ></TextInput>

            <Text style={styles.fieldName}>Pest Names :</Text>
            {pest_name.map((name, index) => (
              <View key={index} style={styles.pestNameContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder={`Pest name ${index + 1}`}
                  placeholderTextColor={"black"}
                  onChangeText={(text) => handlePestNameChange(text, index)}
                  value={name}
                />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removePestNameField(index)}
                >
                  <FontAwesome name="minus" size={20} color="red" />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              style={styles.addButton}
              onPress={addPestNameField}
            >
              <Text style={styles.addButtonText}>Add Pest</Text>
            </TouchableOpacity>

            <Text style={styles.feildName}>MRL Level :</Text>
            <TextInput
              style={{
                borderRadius: 10,
                color: "#100c08",
                paddingHorizontal: 10,
                width: "100%",
                backgroundColor: "rgb(220,220,220)",
                marginVertical: 10,
                padding: 15,
              }}
              placeholder="level of the MRL"
              placeholderTextColor={"black"}
              onChangeText={setMERLLevel}
            ></TextInput>

            <Text style={styles.feildName}>PHI Days :</Text>
            <TextInput
              style={{
                borderRadius: 10,
                color: "#100c08",
                paddingHorizontal: 10,
                width: "100%",
                backgroundColor: "rgb(220,220,220)",
                marginVertical: 10,
                padding: 15,
              }}
              placeholder="Days of the PHI"
              placeholderTextColor={"black"}
              onChangeText={setPHIDays}
            ></TextInput>

            <Text style={styles.feildName}>Chemical Image :</Text>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <FontAwesome
                name="upload"
                size={20}
                color={"black"}
                style={{
                  padding: 10,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: darkGreen,
                borderRadius: 10,
                alignIbatems: "center",
                paddingVertical: 10,
                marginVertical: 10,
              }}
              onPress={SubmitChemical}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ADD
              </Text>
            </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#061f1e",
    paddingBottom: 20,
    paddingTop: 10,
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
  feildName: {
    paddingTop: 20,
    fontSize: 17,
  },
  button: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: "black",
  },
  fieldName: {
    paddingTop: 20,
    fontSize: 17,
  },
  textInput: {
    borderRadius: 10,
    color: "#100c08",
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "rgb(220,220,220)",
    marginVertical: 10,
    padding: 15,
  },
  pestNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    marginLeft: 10,
  },
});
