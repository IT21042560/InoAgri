import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { darkGreen } from "../LoginAndSignup/LandingPageConstants";

export default function PredictedCost() {
  const route = useRoute();
  console.log(route.params);
  const profitStatus = route.params.result.Is_Profitable;
  const predictedProfit = route.params.result.Predicted_Profit;
  const totalCost = route.params.result.Total_Cost;
  console.log(profitStatus);
  const navigation = useNavigation();

  const submitPreddict = () => {
    navigation.navigate("BarChart", {
      result: route.params.result,
      area:route.params.area
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <View>
          <View>
            <Text style={styles.subHedding}>Predicted Result</Text>

            <View style={{ padding: 20 }}>
              <Text
                style={{ color: "#555555", fontSize: 20, fontWeight: "bold" }}
              >
                {" "}
                P or L Statement :{" "}
              </Text>
              {profitStatus === true ? (
                <View
                  style={{
                    backgroundColor: "#00fa9a",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#013220",
                      fontSize: 20,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    Profit{" "}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: "#ff6347",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#8b0000",
                      fontSize: 20,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    Loss
                  </Text>
                </View>
              )}
            </View>

            <View
              style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}
            >
              <Text
                style={{ color: "#555555", fontSize: 20, fontWeight: "bold" }}
              >
                {" "}
                Amount :{" "}
              </Text>
              {profitStatus === true ? (
                <View
                  style={{
                    backgroundColor: "#00fa9a",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#013220",
                      fontSize: 20,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    RS : {parseFloat(predictedProfit).toFixed(2)}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: "#ff6347",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#8b0000",
                      fontSize: 20,
                      fontWeight: "bold",
                      alignSelf: "center",
                    }}
                  >
                    RS : {parseFloat(predictedProfit).toFixed(2)}
                  </Text>
                </View>
              )}
            </View>

            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Text
                style={{ color: "#555555", fontSize: 20, fontWeight: "bold" }}
              >
                {" "}
                Total Cost :{" "}
              </Text>
              <View
                style={{
                  backgroundColor: "#c0c0c0",
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  RS : {parseFloat(totalCost).toFixed(2)}
                </Text>
              </View>
            </View>

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
  subHedding: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#061f1e",
    paddingBottom: 20,
    paddingTop: 30,
  },
});
