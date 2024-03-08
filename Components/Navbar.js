import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
        <Image source={require('../assets/list.png')} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Goal')}>
        <Image source={require('../assets/target.png')} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
        <Image source={require('../assets/graph.png')} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/user.png')} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        position: 'absolute',
        bottom: 30,
    },
    icon:{
        width: 50,
        height:50,
    }
})