import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import RNPickerSelect from "react-native-picker-select";
import { darkGreen } from "../LoginAndSignup/LandingPageConstants";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AddCost = () => {
  const [investment_value, setinvestment_value] = useState(0);
  const [price_per_kg, setprice_per_kg] = useState(0);
  const [additional_cost, setadditional_cost] = useState(0);
  const [area, setarea] = useState("");
  const [acres, setacres] = useState(0);
  const navigation = useNavigation();

  const submitPreddict = () => {
    const ob = {
        investment_value: parseFloat(investment_value),  // Convert to float
        price_per_kg: parseFloat(price_per_kg),  // Convert to float
        additional_cost: parseFloat(additional_cost),  // Convert to float
        area,  // No conversion needed since it's already a string
        acres: parseFloat(acres),  // Convert to float
      };
    axios.post('http://192.168.1.4:5000/predict/cost',ob).then((res)=>{
        console.log(res.data)
        navigation.navigate("PredictedCost", {
           result:res.data,
           area:area
          });
    }).catch((err)=>{
        console.log(err)
    })
  }
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{paddingBottom:60}}>
        <Text style={styles.subHedding}>Predict My Profit</Text>
        <ScrollView>
        <View >
          <View style={styles.formBox}>
            <Text style={styles.feildName}>Invenstment Cost :</Text>
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
              placeholder="Enter your invenstment cost"
              placeholderTextColor={"black"}
              keyboardType="numeric"
              onChangeText={setinvestment_value}
            ></TextInput>

            <Text style={styles.feildName}>Price Per KG :</Text>
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
              placeholder="Enter your 1KG price"
              placeholderTextColor={"black"}
              keyboardType="numeric"
              onChangeText={setprice_per_kg}
            ></TextInput>

            <Text style={styles.feildName}>Additional Cost :</Text>
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
              placeholder="Enter your additional cost"
              placeholderTextColor={"black"}
              keyboardType="numeric"
              onChangeText={setadditional_cost}
            ></TextInput>

            <Text style={styles.feildName}>Area :</Text>
            <RNPickerSelect
              items={[
                { label: "ampara", value: "ampara" },
                { label: "bakamuna", value: "bakamuna" },
                { label: "dehiaththakandiya", value: "dehiaththakandiya" },
                { label: "girithale", value: "girithale" },
                { label: "kandakatiya", value: "kandakatiya" },
                { label: "kanthale", value: "kanthale" },
                { label: "mahiyanganaya", value: "mahiyanganaya" },
                { label: "medirigiriya", value: "medirigiriya" },
                { label: "monaragala", value: "monaragala" },
                { label: "morawewa", value: "morawewa" },
                { label: "nikaweratiya", value: "nikaweratiya" },
                { label: "monagala", value: "monagala" },
                { label: "anganaya", value: "anganaya" },
              ]}
              onValueChange={(value) => setarea(value)}
              style={pickerSelectStyles}
              placeholder={{ label: "Select an option...", value: null }}
              value={area}
            />
            
            
            <Text style={styles.feildName}>Acres :</Text>
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
              placeholder="Enter your acres"
              placeholderTextColor={"black"}
              keyboardType="numeric"
              onChangeText={setacres}
            ></TextInput>
            <View style={{ paddingBottom: 100 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: darkGreen,
                  borderRadius: 10,
                  alignIbatems: "center",
                  paddingVertical: 10,
                  marginVertical: 10,
                }}
                onPress={submitPreddict}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Predict
                </Text>
              </TouchableOpacity>
              
            </View>
            
          </View>
         </View>
         <View style={{height:60}}></View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
};

export default AddCost;

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
    paddingTop: 30,
    paddingBottom: 20,
  },
  feildName: {
    paddingTop: 5,
    fontSize: 17,
  },
  formBox: {
    padding: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "rgb(220,220,220)",
  },
});
