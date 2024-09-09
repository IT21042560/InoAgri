import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { darkGreen, shadegreen } from "../LoginAndSignup/LandingPageConstants";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function Solutions(props) {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params.trans);

  // Retrieve and clean the answerGemini by removing the '*' characters
  // const answerGemini = route.params.data.recommendations.replace(/\*/g, "");
  let answerGemini = route.params.data.recommendations.replace(/\*/g, "");
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

  let answerGeminiTrans = route.params.data.trans.replace(/\*/g, "");
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

  const bulletPoints = [
    "Disease type",
    "Main reason for disease",
    "Severity level of disease",
    "What you have to do to get rid of the disease",
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bulletItem}>
      <FontAwesome name="envira" size={20} color={darkGreen} />
      <Text style={styles.bulletText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />

      <ScrollView>
        <View style={{ padding: 30 }}>
          <Text style={styles.mainHeading}>Solutions for Diseases</Text>
          <View style={{ alignSelf: "center" }}>
            <FontAwesome
              name="cogs"
              size={30}
              color={"#32cd32"}
              style={{
                padding: 10,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 20,
              textAlign: "center",
              color: "#1e4d2b",
            }}
          >
            Gemini AI Answer
          </Text>
          {/* Display the cleaned answerGemini */}
          <Text style={{ textAlign: "justify" }}>{answerGemini}</Text>
        </View>

        <View style={{ paddingBottom: 30, paddingHorizontal:30 }}>
          <View style={{ alignSelf: "center" }}>
            <FontAwesome
              name="language"
              size={30}
              color={"#32cd32"}
              style={{
                padding: 10,
              }}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 30,
              textAlign: "center",
              color: "#33705b",
            }}
          >
            Translated Answer
          </Text>
          {/* Display the cleaned answerGemini */}
          <Text style={{ textAlign: "justify", paddingBottom:60 }}>{answerGeminiTrans}</Text>
        </View>
      </ScrollView>
      {/* <FlatList
        ListHeaderComponent={
          <View style={{padding:10}}>
            <Text style={styles.mainHeading}>Solutions for Diseases</Text>

            <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:10, textAlign:'left', color:'#1e4d2b'}}>Gemini AI Answer</Text>
            {/* Display the cleaned answerGemini 
            <Text style={{ textAlign: "justify"}}>{answerGemini}</Text>
          </View>
        }
        data={bulletPoints}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.bulletList}
        ListFooterComponent={
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={{ paddingTop: 20 }}>
                <View style={{ width: 200 }}>
                  <Button
                    title="Translate To Sinhala"
                    onPress={() => {
                      navigation.navigate("TranslateToSinhala");
                    }}
                    color={"#33705b"}
                  />
                </View>
              </View>
            </View>
          </View>
        }
      /> */}
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
    marginTop: 0,
    marginBottom: 20,
    letterSpacing: 1.5,
    alignSelf: "center",
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
  },
  inputContainer: {
    height: 150,
    width: "100%",
    borderTopRightRadius: 100,
    marginTop: 5,
  },
});
