import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./src/LoginAndSignup/LandingPage";
import Signup from "./src/LoginAndSignup/Signup";
import Login from "./src/LoginAndSignup/Login";
import { AuthContext } from "./src/Context/AuthContext";
import Home from "./src/Screen/Home/Home";
import PestDashboard from "./src/PestControll/PestDashboard";
import DiseasesDashboard from "./src/DiseasesControl/DiseasesDashboard";
import OpenCamara from "./src/PestControll/OpenCamara";
import PestAnswer from "./src/PestControll/PestAnswer";
import AddChemicals from "./src/PestControll/admin/AddChemicals";
import AddCost from "./src/CostPrediction/AddCost";
import PredictedCost from "./src/CostPrediction/PredictedCost";
import PredictLeaf from "./src/DiseasesControl/PredictLeaf";
import Result from "./src/DiseasesControl/Result";
import Reject from "./src/DiseasesControl/Reject";
import Solutions from "./src/DiseasesControl/Solutions";
import TranslateToSinhala from "./src/DiseasesControl/TranslateToSinhala";
import GetDisease from "./src/DiseasesControl/GetDisease";
import CostDashboard from "./src/CostPrediction/CostDashboard";
import ARIndex from "./src/PestControll/ar/Index";
import HarvestDashboard from "./src/HarvestPredict/HarvestDashboard";
import PredictHarvest from "./src/HarvestPredict/PredictHarvest";
import NextButton from "./src/HarvestPredict/NextButton";
import ActualPrediction from "./src/HarvestPredict/ActualPrediction";
import MyBarChart from "./src/CostPrediction/BarChartAnalysis";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PestDashboard" component={PestDashboard} />
          <Stack.Screen name="OpenPestCamara" component={OpenCamara} />
          <Stack.Screen name="PestAnswer" component={PestAnswer} />
          <Stack.Screen name="AddChemical" component={AddChemicals} />
          <Stack.Screen name="AR" component={ARIndex} />

          {/* Thilina */}
          <Stack.Screen name="AddCost" component={AddCost} />
          <Stack.Screen name="PredictedCost" component={PredictedCost} />
          <Stack.Screen name="CostDashboard" component={CostDashboard} />
          <Stack.Screen name="BarChart" component={MyBarChart} />

          {/* Disease Control */}
          <Stack.Screen
            name="DiseasesDashboard"
            component={DiseasesDashboard}
          />
          <Stack.Screen name="PredictLeaf" component={PredictLeaf} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Reject" component={Reject} />
          <Stack.Screen name="Solutions" component={Solutions} />
          <Stack.Screen
            name="TranslateToSinhala"
            component={TranslateToSinhala}
          />
          <Stack.Screen name="GetDisease" component={GetDisease} />

          {/* amalya */}
          <Stack.Screen name="HarvestDashboard" component={HarvestDashboard} />
          <Stack.Screen name="PredictHarvest" component={PredictHarvest} />
          <Stack.Screen name="NextButton" component={NextButton} />
          <Stack.Screen name="ActualPrediction" component={ActualPrediction} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
