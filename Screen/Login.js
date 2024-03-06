import {TouchableOpacity , KeyboardAvoidingView,StyleSheet, Text, View, TextInput} from 'react-native'
import React ,{useState} from 'react'
import { handellogin} from '../Firebase';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();
    const [email, setEamil] = useState();
    const [password, setPassword] = useState();



  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style ={styles.name}>Cashflow</Text>
        <View style={styles.inputcontainer}>
            <TextInput placeholder="Email" style={styles.input} onChangeText={setEamil}></TextInput>
            <TextInput placeholder='Password' secureTextEntry style={styles.input} onChangeText={setPassword}></TextInput>
        </View>
        <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={() =>handellogin(email, password)}>
                <Text >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')} >
                <Text >Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Login

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
        flexDirection:'row',
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