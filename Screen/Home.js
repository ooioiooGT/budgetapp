import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <View style={styles.container}>
      
      <Text>Home</Text>
      <Navbar />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
})