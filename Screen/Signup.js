import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput,TouchableOpacity, Image, ScrollView} from 'react-native'
import React ,{useState}from 'react'
import { adddata, googlesignin, handelsignup } from '../Firebase';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [conPassword, setConPassword] = useState('');


    const checkPassword = (email, password, conPassword) => {
        if (password == conPassword) {
          handelsignup(email, password);
        } else {
          console.log(password, conPassword);
          alert('Passwords do not match');
        }
      };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style ={styles.name}>Cashflow</Text>
        <View style={styles.inputcontainer}>
            <TextInput placeholder="First Name" style={styles.input} onChangeText={setfName}/>
            <TextInput placeholder="Last Name" style={styles.input} onChangeText={setlName}/>
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail}/>
            <TextInput placeholder='Password' secureTextEntry style={styles.input} onChangeText={setPassword}/>
            <TextInput placeholder='Confirm Password' secureTextEntry style={styles.input} onChangeText={setConPassword} />
        </View>
        <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={() => checkPassword(email, password, conPassword)}>
                <Text >Signup</Text>
            </TouchableOpacity>
            <Text style={{margin:15}}>-----------------------   or   -----------------------</Text>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity onPress={() => googlesignin()}>
                <Image source={require('../assets/google.png')} style={{width: 50, height: 50}}/>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Signup

const styles = StyleSheet.create({
  name:{
    fontSize:20,
},  
container:{
    flex: 1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
inputcontainer:{
    width:'50%',
    alignItems:'center',
},
input:{
  margin: 10,
  backgroundColor:"white",
  paddingHorizontal:15,
  paddingVertical: 10,
  borderRadius:7,
  width:'100%'
},
buttoncontainer:{
    width:'50%',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 40,
},
button:{
    backgroundColor:"#5DADE2",
    width: '30%',
    padding:15,
    borderRadius:10,
    alignItems:'center',

}
})