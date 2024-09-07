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
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function DiseasesDashboard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
            <Image
                source={require("./assets/DiseaseControlDashboard.gif")}
                style={{ width: "100%", height: 190 }}
              />
          {/* <Image
            style={{ width: "100%", height: 220 }}
            source={require("./assets/cover2.webp")}

          /> */}

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
                  name="lightbulb-o"
                  size={30}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding}>
                 Disease Identification and Control
                </Text>
                <View>
                  <Text
                    style={{
                      paddingTop: 5,
                      textAlign: "justify",
                      lineHeight: 24,
                      letterSpacing: -0.5,
                    }}
                  >
                    Welcome to the Disease Dashboard of our mobile app, tailored for gherkin growers to ensure the health and productivity of your crops. Here, you can effortlessly upload pictures of gherkin leaves, whether they are healthy or potentially diseased. Once you upload an image, our advanced system will analyze it and accurately identify any diseases present, providing you with precise predictions and detailed information about the health of your plants.
                  </Text>
                </View>
              </View>
              
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View></View>
            <View>
              {/* <LottieView
                source={require("./animations/Animation - 1719145590451.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200, }}
              /> */}
              <Image
                source={require("./assets/Cucumber.jpg")}
                style={{ width: "100%", height: 200 }}
              />
              <View
                style={{
                  height: "auto",
                  alignSelf: "center",
                  width: "80%",
                  paddingTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="leaf"
                  size={25}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text
                  style={{
                    textAlign: "justify",
                    lineHeight: 24,
                    letterSpacing: -0.5,
                  }}
                >
                  Identify gherkin leaves by clicking the button
                  below to open your camera and capture a clear image of the
                  leaf. Our intelligent system will analyze the image and
                  provide you with detailed information and effective solutions
                  to protect your crops.
                </Text>



                <View style={{ paddingTop: 20 }}>
                    <Button
                      title="Get Start"
                      onPress={() => {
                        // console.log("Button pressed");
                        navigation.navigate("PredictLeaf");
                      }}
                      color={"#33705b"}
                    />
                </View>
              </View>
            </View> 
          </View>


          <View style={{ paddingTop: 30 }}>
            <View></View>
            <View>
              {/* <LottieView
                source={require("./animations/Animation - 1719145590451.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200, }}
              /> */}
              {/* <Image
                source={require("./assets/Gherkin Leaf Detection.gif")}
                style={{ width: "100%", height: 150 }}
              /> */}
              <View
                style={{
                  height: "auto",
                  alignSelf: "center",
                  width: "80%",
                  paddingTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <FontAwesome
                  name="cube"
                  size={25}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                /> */}
                {/* <Text
                  style={{
                    textAlign: "justify",
                    lineHeight: 24,
                    letterSpacing: -0.5,
                  }}
                >
                  With our augmented reality (AR) feature, you can view and experience a 3D model of the identified pest right in your field. This immersive experience will help you understand the pest's characteristics and behavior better.
                </Text> */}

                {/* <View style={{ paddingTop: 20 }}>
                  <Button
                    title="AR View"
                    onPress={() => navigation.navigate("OpenPestCamara")}
                    color={"#33705b"}
                  />
                </View> */}
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            {/* <View style={{ justifyContent: "center" }}>
              <Text style={styles.subHedding}>The system identified categories</Text>
              <Text style={styles.alignSelf}>Detect the gherkin leaves firstly using object detection. If not do not allow to continue further process</Text>
            </View> */}
             <View style={{ justifyContent: "center" }}>
              <Text style={styles.subHedding}>The system identified categories</Text>
            </View>

            <View style={styles.imageGridContainer1}>
              <View style={styles.imageGridRow}>
              <View>
                  <Image
                    source={require("./assets/gherkinLeaf.jpg")}
                    style={{
                      width: 120,
                      height: 100,
                      marginLeft: 20,
                      marginRight: 10,
                    }}
                  />
                  <Text style={styles.gridText}>Gherkin Leaf</Text>
                </View>
              </View>
            </View>
          </View>


          <View style={{ paddingTop: 6 }}>
            {/* <View style={{ justifyContent: "center" }}>
              <Text style={styles.subHedding}>Second step: Identify the disease</Text>
            </View> */}

            <View style={styles.imageGridContainer1}>
              <View style={styles.imageGridRow}>
              <View>
                  <Image
                    source={require("./assets/FreshLeaf.png")}
                    style={{
                      width: 120,
                      height: 100,
                      marginLeft: 5,
                      marginRight: 7,
                    }}
                  />
                  <Text style={styles.gridText}>Healthy Leaf</Text>
                </View>

                <View>
                  <Image
                    source={require("./assets/DownyMildew.png")}
                    style={{
                      width: 100,
                      height: 100,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />
                  <Text style={styles.gridText}>Downy Mildew</Text>
                </View>

                <View>
                  <Image
                    source={require("./assets/GummyBlight.png")}
                    style={{
                      width: 125,
                      height: 100,
                      marginLeft: 5,
                      marginRight: 10,
                    }}
                  />
                  <Text style={styles.gridText}>Gummy Blight</Text>
                </View>
                <View>
                  {/* <Image
                    source={require("./assets/pest_3.png")}
                    style={styles.image}
                  /> */}
                  {/* <Text style={{ color: "#6a859f", fontWeight: "bold" }}>
                    Catepiller
                  </Text> */}
                </View>
              </View>

              <View style={styles.imageGridRow}>
                <View>
                  {/* <Image
                    source={require("./assets/pest_4.png")}
                    style={styles.image}
                  /> */}
                  {/* <Text
                    style={{
                      color: "#6a859f",
                      fontWeight: "bold",
                      marginLeft: 15,
                    }}
                  >
                    Thrips
                  </Text> */}
                </View>
                <View>
                  {/* <Image
                    source={require("./assets/pest_5.png")}
                    style={styles.image}
                  /> */}
                  {/* <Text style={styles.gridText}>Whiteflies</Text> */}
                </View>
              </View>
            </View>
          </View>

          <View></View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}
// export default DiseasesDashboard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
  subHedding: {
    textAlign: "center",
    fontSize: 19,
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
});



// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   Linking,
//   Alert,
// } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// import { Camera, CameraType } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Feather from "@expo/vector-icons/Feather";
// import * as Permissions from "expo-permissions";
// import Constants from "expo-constants";
// import Background from "../LoginAndSignup/Background";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import Button from "../PestControll/Button";

// export default function DiseasesDashboard(props) {
//   const [hasCamaraPermission, setHasCamaraPermission] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const camaraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       MediaLibrary.requestPermissionsAsync();
//       const camaraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCamaraPermission(camaraStatus.canAskAgain.status === "granted");
//     })();
//   }, []);

//   const getPermissionAsync = async () => {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== "granted") {
//         Alert.alert(
//           "Sorry, we need camera roll permissions to make this work!"
//         );
//       }
//     }
//   };

//   const takePicture = async () => {
//     if (camaraRef) {
//       try {
//         const data = await camaraRef.current.takePictureAsync();
//         console.log(data);
//         setImage(data.uri);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   if (hasCamaraPermission === true) {
//     return <Text>No access to camera</Text>;
//   }

//   const pickImage = async () => {
//     await getPermissionAsync();
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [9, 12],
//       quality: 1,
//     });

//     if (result.canceled) {
//       setImage(result.uri);
//       // Now send this image to your backend
//       // You can use fetch or any HTTP client to send the image to your Flask backend

//       // Convert the local image URI to a blob
//       console.log("Image selection cancelled");
//       return;
//     }

//     if (!result.uri) {
//       // Handle the case where result.uri is undefined
//       console.error("Image URI is undefined");
//       return;
//     }

//     // Proceed with further operations
//     setImage(result.uri);

//     const localUri = result.uri;
//     const filename = localUri.split("/").pop();
//     const match = /\.(\w+)$/.exec(filename);
//     const type = match ? `image/${match[1]}` : `image`;
//     const formData = new FormData();
//     formData.append("file", { uri: localUri, name: filename, type });

//     axios
//       .post("http://192.168.1.101:5000/upload", formData)
//       .then(() => {
//         console.log("giya");
//       })
//       .catch((err) => {
//         console.log("err");
//       });
//   };

//   const saveImgae = async () => {
//     if (image) {
//       try {
//         await MediaLibrary.createAssetAsync(image);
//         const myPestImg = new FormData();
//         myPestImg.append("image", image);
//         console.log(myPestImg);
//         axios
//           .post("http://192.168.1.101:5000/pest/try", myPestImg, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           })
//           .then((res) => {
//             console.log("Giya");
//           })
//           .catch((e) => {
//             console.log("error");
//           });
//         alert("picture Save!");
//         setImage(null);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const downloadImage = () => {
//     if (image) {
//       // Linking library helps to open the URL on the browser
//       Linking.openURL(image);
//     }
//   };

//   return (
//     <Background>
//       <View
//         style={{
//           backgroundColor: "#006A42",
//           height: 50,
//           width: "100%",
//           flexDirection: "row",
//           justifyContent: "space-between",
//         }}
//       >
//         <View style={{ padding: 10 }}>
//           <Feather name="menu" size={30} color="white" />
//         </View>
//         <View style={{ padding: 10 }}>
//           <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
//             Diseases Control
//           </Text>
//         </View>
//         <View style={{ paddingRight: 30, paddingTop: 10 }}>
//           <AntDesign
//             name="back"
//             size={25}
//             color="white"
//             onPress={() => props.navigation.navigate("Home")}
//           />
//         </View>
//       </View>

//       {!image ? (
//         <View style={{ marginLeft: 12, paddingTop: 10 }}>
//           <Camera
//             style={styles.camara}
//             type={type}
//             flashMode={flash}
//             ref={camaraRef}
//           >
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 paddingHorizontal: 30,
//               }}
//             >
//               {/* <Button
//                 icon={"retweet"}
//                 onpress={() => {
//                   setType(
//                     type === CameraType.back
//                       ? CameraType.front
//                       : CameraType.back
//                   );
//                 }}
//               /> */}
//               <Button
//                 icon={"flash"}
//                 color={
//                   flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
//                 }
//                 onpress={() => {
//                   setFlash(
//                     flash === Camera.Constants.FlashMode.off
//                       ? Camera.Constants.FlashMode.on
//                       : Camera.Constants.FlashMode.off
//                   );
//                 }}
//               />
//             </View>
//           </Camera>
//         </View>
//       ) : (
//         <View style={{ marginLeft: 10 }}>
//           <Image source={{ uri: image }} style={styles.camara} />
//         </View>
//       )}
//       {image ? (
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             paddingHorizontal: 50,
//           }}
//         >
//           <Button
//             title={"Re-Take"}
//             icon="retweet"
//             onpress={() => setImage(null)}
//           />
//           <Button title={"Save"} icon="check" onpress={saveImgae} />
//           <Button title="Download" icon="download" onPress={downloadImage} />
//         </View>
//       ) : (
//         <Button title={"Take a picture"} icon="camera" onpress={takePicture} />
//       )}

//       <View style={{ marginLeft: 60 }}>
//         <Button
//           title={"Pick an image from camera roll"}
//           onpress={pickImage}
//           color={"white"}
//           icon={"picasa"}
//         />
//         {image && (
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//         )}
//       </View>
//     </Background>
//   );
// }

// const styles = StyleSheet.create({
//   camara: {
//     height: 400,
//     width: 350,
//   },
// });
