import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Navbar />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
})