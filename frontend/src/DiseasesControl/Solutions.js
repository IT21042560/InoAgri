import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import React from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {
  darkGreen,
  shadegreen,
} from "../LoginAndSignup/LandingPageConstants";
import { useRoute } from "@react-navigation/native";

export default function Solutions(props) {
  const navigation = useNavigation();
  const route = useRoute();

  // Retrieve and clean the answerGemini by removing the '*' characters
  const answerGemini = route.params.data.recommendations.replace(/\*/g, "");
  console.log(answerGemini);

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
      <FlatList
        ListHeaderComponent={
          <View style={{ alignItems: "center" }}>
            <Text style={styles.mainHeading}>Solutions for Diseases</Text>
            <Text style={styles.subHeading}>
              Here you can get all solutions regarding diseases...
            </Text>
            <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:10}}>Gemini Answer</Text>
            {/* Display the cleaned answerGemini */}
            <Text>{answerGemini}</Text>
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
      />
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
  },
  inputContainer: {
    height: 150,
    width: "100%",
    borderTopRightRadius: 100,
    marginTop: 5,
  },
});
