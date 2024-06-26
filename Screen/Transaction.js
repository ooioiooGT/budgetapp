import { StyleSheet, Text, View,TextInput, Button, Platform } from 'react-native';
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { category } from '../Components/Data';


const Transaction = () => {
 const [amount, setAmount] = useState('');
 const [showPicker, setShowPicker] = useState(false);
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(null);
 const [items, setItems] = useState(category);
 const [date, setDate] = useState(new Date());

 const toggleDatePicker = () => {
  setShowPicker(!showPicker);
};

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  const formattedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  setShowPicker(Platform.OS === 'ios'); // Hide picker on iOS when done
  setDate(formattedDate);
};

const handleCancelDate = () => {
  setShowPicker(false);
  // Reset input fields or any other necessary state
};

const handleConfirmDate = () => {
  setShowPicker(false);
  // Handle date confirmation logic
};

return (
  <View style={styles.container}>
    <Text>Transaction</Text>
  <View style={styles.amount}>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="calendar"
          value={date}
          onChange={onChange}
        />
      )}

      {!showPicker && (
        <TextInput
          placeholder="Sat Aug 21 2004"
          value={date.toLocaleDateString()} // Convert date to string for display
          editable={false}
          onTouchStart={toggleDatePicker}
        />
      )}

      {showPicker && (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Button title="Cancel Date" onPress={handleCancelDate} />
          <Button title="Confirm Date" onPress={handleConfirmDate} />
        </View>
      )}
    </View >
    <View style={styles.drop}>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select a Category"
    />
    </View>
    <View style={styles.amount}>
    <TextInput
      placeholder="Amount"
      onChangeText={setAmount}
      keyboardType="numeric"
    />
    </View>
    <Navbar />
  </View>
 );
};

export default Transaction

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    drop:{
      width:'30%'
    },
    amount:{
      width:'30%',
      borderColor:'black',
      borderWidth:1,
      backgroundColor:'white',
      borderRadius:10,
      padding:15,
      margin:2,
    }

})