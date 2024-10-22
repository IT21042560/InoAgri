import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Header from '../Screen/Header/Index';
import Footer from '../Screen/Footer/Index';
import { useRoute } from "@react-navigation/native";

const MyBarChart = () => {
    const route = useRoute();
    console.log(route.params);

    const screenWidth = Dimensions.get('window').width;

    // Default dataset values
    const defaultData = [
        0, 500, 1000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000
    ];

    // Area names corresponding to the bar chart labels
    const labels = [
        'ampara', 'bakamuna', 'dehiaththakandiya', 'girithale',
        'kandakatiya', 'kanthale', 'mahiyanganaya', 'medirigiriya',
        'monaragala', 'morawewa', 'nikaweratiya', 'monagala', 'anganaya'
    ];

    // Extracting total cost and area from route.params
    const { area, result: { Predicted_Profit } } = route.params;

    // Update the data if the area matches
    const updatedData = labels.map((label, index) => {
        return label === area ? Predicted_Profit : defaultData[index];
    });

    // Function to dynamically set bar color
    const getBarColor = (label) => {
        return label === area ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)';
    };

    return (
        <View style={styles.mainContainer}>
            <Header />
            <View>
                <Text style={styles.subHeading}>Bar Chart Compare</Text>

                {/* Wrapping BarChart inside ScrollView */}
                <ScrollView horizontal={true}>
                    <BarChart
                        data={{
                            labels: labels,
                            datasets: [
                                {
                                    data: updatedData, // Updated data based on the area
                                },
                            ],
                        }}
                        width={1500} // Increased width for horizontal scrolling
                        height={220}
                        yAxisLabel="$"
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1, index) => getBarColor(labels[index]), // Dynamic bar color
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                </ScrollView>
            </View>
            <Footer />
        </View>
    );
};

export default MyBarChart;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingTop: 30,
    },
    subHeading: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#061f1e",
        paddingBottom: 20,
        paddingTop: 30,
    },
});
