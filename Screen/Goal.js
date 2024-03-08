import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'

const Goal = () => {
  return (
    <View style={styles.container}>
      <Text>Goal</Text>
      <Navbar />
    </View>
  )
}

export default Goal

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})