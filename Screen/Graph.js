import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'
import { PieChart } from 'react-native-chart-kit'

const Graph = () => {
  const width = (Dimensions.get("screen").width)/2
  const height = Dimensions.get("screen").height 
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = [
    {
      name: "Food",
      population: 450,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Auto",
      population: 360,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Bill",
      population: 1000,
      color: "rgba(131, 0, 234, 10)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
      <PieChart
        data={data}
        width={width}
        height={300}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}

      />
      <Navbar />
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})