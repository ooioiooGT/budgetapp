import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [conPassword, setConPassword] = useState('');
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})