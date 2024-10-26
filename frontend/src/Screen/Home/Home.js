import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import { LinearGradient } from "expo-linear-gradient";

const Home = (props) => {
  const { UserLogOut } = useContext(AuthContext);

  return (
    <LinearGradient colors={["#e0f7fa", "#a7ffeb"]} style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Welcome to Ino Agri</Text>
        
        <Text style={styles.description}>
          Empowering gherkin farmers with innovative tools for healthier crops, higher yields, and smarter decisions. Using advanced AI and machine learning, our app offers essential insights into your crops’ well-being and financial potential.
        </Text>
        
        <Image
          source={require("../assets/gg.jpg")}
          style={styles.image}
        />

        <Text style={styles.sectionTitle}>Key Features:</Text>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🪲</Text>
          <Text style={styles.featureText}>
            <Text style={styles.boldText}>Pest Identification:</Text> Easily identify pests impacting your gherkin crops for timely interventions.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🦠</Text>
          <Text style={styles.featureText}>
            <Text style={styles.boldText}>Disease Detection:</Text> Detect diseases early to protect your yield and maintain crop health.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📅</Text>
          <Text style={styles.featureText}>
            <Text style={styles.boldText}>Harvest Prediction:</Text> Get precise predictions on the best times to harvest for optimal results.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💰</Text>
          <Text style={styles.featureText}>
            <Text style={styles.boldText}>Cost Prediction:</Text> Plan ahead with accurate cost forecasts to optimize your resources.
          </Text>
        </View>

        <Text style={styles.finalNote}>
          Start your journey towards smarter, sustainable farming today. Together, we can transform agriculture for a better tomorrow!
        </Text>
      </ScrollView>
      <Footer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#004d40",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    paddingTop:40
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#004d40",
    marginVertical: 15,
    lineHeight: 22,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#004d40",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00796b",
    marginVertical: 15,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  featureIcon: {
    fontSize: 28,
    marginRight: 10,
    color: "#00796b",
  },
  featureText: {
    fontSize: 16,
    color: "#004d40",
    flex: 1,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: "bold",
    color: "#004d40",
  },
  finalNote: {
    textAlign: "center",
    fontSize: 16,
    color: "#004d40",
    marginTop: 20,
    lineHeight: 24,
    fontStyle: "italic",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#004d40",
  },
});

export default Home;
