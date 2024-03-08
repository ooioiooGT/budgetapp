import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Screen/Signup';
import {useEffect, useState} from "react";
import { FIREBASE_auth } from './Firebase';
import { onAuthStateChanged } from "firebase/auth";
import Home from './Screen/Home';
import Login from './Screen/Login';
import Transaction from './Screen/Transaction';
import Goal from './Screen/Goal';
import Graph from './Screen/Graph';
import Profile from './Screen/Profile';







export default function App() {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_auth, (currentUser) => {
      setUser(currentUser);
    });
   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ?(
          <>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Transaction" component={Transaction} options={{headerShown: false}}/>
          <Stack.Screen name="Goal" component={Goal} options={{headerShown: false}}/>
          <Stack.Screen name="Graph" component={Graph} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
          </>
        ):(
          <>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

