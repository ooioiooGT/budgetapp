import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'

const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
      <Navbar />
    </View>
    
  )
}

export default Transaction

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})