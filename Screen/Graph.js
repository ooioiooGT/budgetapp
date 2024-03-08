import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'

const Graph = () => {
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
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