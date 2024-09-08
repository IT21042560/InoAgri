import { StyleSheet, Text, View, Image, ScrollView, Linking } from "react-native";
import React from "react";
import Header from "../../Screen/Header/Index";
import Footer from "../../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

export default function ARIndex() {

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

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <View style={{ paddingBottom: 30 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("../assets/ar_ai.gif")}
          />
          <View style={{ paddingTop: 0 }}>
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
                  name="cube"
                  size={30}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding1}>Augmented Reality (AR)</Text>
              </View>
            </View>

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
                Augmented Reality (AR) is a technology that overlays digital
                content, such as 3D models, images, or information, onto the
                real world, enhancing the user's perception of their
                environment. By blending virtual elements with physical
                surroundings, AR provides an interactive and immersive
                experience, allowing users to explore and interact with digital
                objects in a way that feels natural and intuitive.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.imageGridContainer1}>
          <View style={styles.imageGridRow}>
            <View>
            <TouchableOpacity onPress={()=>openGitHubPage("Aphids")}>
              <Image
                source={require("../assets/pest_1.png")}
                style={{
                  width: 80,
                  height: 90,
                  marginLeft: 20,
                  marginRight: 0,
                }}
              />
              <Text style={styles.gridText}>Aphids</Text>
              </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity onPress={()=>openGitHubPage("Mites")}>
              <Image
                source={require("../assets/pest_2.png")}
                style={{
                  width: 80,
                  height: 90,
                  marginLeft: 30,
                  marginRight: 30,
                }}
              />
              <Text style={styles.gridText}>Mites</Text>
              </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity onPress={()=>openGitHubPage("Catepillars")}>
              <Image
                source={require("../assets/pest_3.png")}
                style={styles.image}
              />
              <Text style={{ color: "#6a859f", fontWeight: "bold" }}>
                Caterpillar
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.imageGridRow}>
            <View>
            <TouchableOpacity onPress={()=>openGitHubPage("Thrips")}>
              <Image
                source={require("../assets/pest_4.png")}
                style={styles.image}
              />
              <Text
                style={{
                  color: "#6a859f",
                  fontWeight: "bold",
                  marginLeft: 15,
                }}
              >
                Thrips
              </Text>
              </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity onPress={()=>openGitHubPage("whiteflies")}>
              <Image
                source={require("../assets/pest_5.png")}
                style={styles.image}
              />
              <Text style={styles.gridText}>Whiteflies</Text>
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
  subHedding1: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#061f1e",
  },
  imageGridContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingBottom:70
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
  image: {
    width: 80,
    height: 90,
    marginLeft: 0,
    marginRight: 20,
  },
});
