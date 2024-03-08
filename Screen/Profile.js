import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Navbar from '../Components/Navbar'
import { handleSignOut } from '../Firebase'

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSignOut()} style={styles.signout}>
        <Text>SignOut</Text>
      </TouchableOpacity>
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
    signout:{
        position: 'absolute',
        top: 30,
        right: 20,
        backgroundColor:'red',
        padding: 10,
        borderRadius: 5
    }
})