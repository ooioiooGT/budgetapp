import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import DropDownPicker from 'react-native-dropdown-picker'
import { category } from '../Components/Data'


const Transaction = () => {
 const [amount, setAmount] = useState('');

  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
      <DropDownPicker 
      
      items={category} 
      placeholder='Select a Category'
      >

      </DropDownPicker>
      <TextInput placeholder='Amount' onChangeText={setAmount}></TextInput>
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