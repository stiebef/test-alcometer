
import { Button, Text, TextInput, SafeAreaView, ScrollView, View, Alert, Platform, Pressable } from 'react-native';
import Radiobutton from '../components/Radiobutton';
import {Picker} from '@react-native-picker/picker';
import React,{useState} from 'react';
import styles from '../style/style';
import { render } from 'react-dom';
//import Alert from "react-native-awesome-alerts";


export default function Alcometer() {

  const simpleAlert = () => {
    alert('Sorry, your weight is missing, Please enter your weight')
  }
  const OptionAlert = () => {
    alert('Sorry, your weight is missing, Please enter your weight' , [
      {text: 'understood', onPress: () => console.log('alert closed')}
    ])
  }
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(0); 
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alc, setAlc] = useState(0);
  
  const handleValueChange=(itemValue, itemIndex) =>setBottles(itemValue);
 
  const gender3=[
    {
      label: 'male',
      value:'male'
    },
    {
      label: 'female',
      value:'female'
    }]


  const bottlesdrunk = Array();
  bottlesdrunk.push({label: '0 bottle', value: 0});
  bottlesdrunk.push({label: '1 bottle', value: 1});
  bottlesdrunk.push({label: '2 bottles', value: 2});
  bottlesdrunk.push({label: '3 bottles', value: 3});
  bottlesdrunk.push({label: '4 bottles', value: 4});
  bottlesdrunk.push({label: '5 bottles', value: 5});
  bottlesdrunk.push({label: '6 bottle', value: 6});
  bottlesdrunk.push({label: '7 bottles', value: 7});
  bottlesdrunk.push({label: '8 bottles', value: 8});
  bottlesdrunk.push({label: '9 bottles', value: 9});
  bottlesdrunk.push({label: '10 bottles', value: 10});

  const timepast = Array();
  timepast.push({label: '0 hour', value: 0});
  timepast.push({label: '1 hour', value: 1});
  timepast.push({label: '2 hours', value: 2});
  timepast.push({label: '3 hours', value: 3});
  timepast.push({label: '4 hours', value: 4});
  timepast.push({label: '5 hours', value: 5});
  timepast.push({label: '6 hour', value: 6});
  timepast.push({label: '7 hours', value: 7});
  timepast.push({label: '8 hours', value: 8});
  timepast.push({label: '9 hours', value: 9});
  timepast.push({label: '10 hours', value: 10});

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]



  function calculate() {
    let result = 0;
   

    if (weight !== '') {
      
  
      if (gender === 'male') {
        result = ((((bottles * 0.33) * 8 * 4.5)- (time* (weight / 10))) / (weight * 0.7)).toFixed(2);
      }
      else {
        result = ((((bottles * 0.33) * 8 * 4.5)- (time* (weight / 10))) / (weight * 0.6)).toFixed(2);}
      
    } 
    else if (weight == '' || weight <= 0 ) {
     
    if (Platform.OS === 'web') {
        simpleAlert();
        
        
     } else {
      Alert.alert('Sorry, your weight is missing', 'Please enter your weight', [
        {text: 'understood', onPress: () => console.log('alert closed')}]) 
      }
     
       
      //simpleAlert();
      //OptionAlert();
      /*  Alert.alert('Sorry, your weight is missing', 'Please enter your weight', [
        {text: 'understood', onPress: () => console.log('alert closed')}
      ])    */
      
    }
    setAlc(result);
  }

  
 


    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Alcometer</Text>
          </View>
          
          <View style={styles.container}>
            <Text style={styles.alcinfo}>Weight</Text>
            <TextInput style={styles.input} value={weight.toString()} onChangeText={text => setWeight(text)} keyboardType='number-pad' placeholder='Enter your weight' />
            <Text style={styles.alcinfo}>Bottles</Text>
              <Picker
                style={styles.pickerStyles}
                selectedValue={bottles}
                onValueChange={handleValueChange}>
                
                {bottlesdrunk.map((bottles) => (
                  <Picker.Item key={bottles.value} label={bottles.label} value={bottles.value} />
                ))}
              </Picker>

            <Text style={styles.alcinfo}>Time</Text>
              <Picker
                style={styles.pickerStyles}
                selectedValue={time}
                onValueChange={(itemValue) => setTime(itemValue)}>
                {timepast.map((time) => (
                  <Picker.Item key={time.value} label={time.label} value={time.value} />
                ))}
              </Picker>

            <Text style={styles.alcinfo}>Gender</Text>
          
          
          <View style={styles.radioContainer}>
            <Radiobutton options={gender3}
            onPress={(value)=> {setGender(value)}}
              style={{backgroundColor:'#000000'}}
              borderColor={{borderColor:'#000000'}}
              />
          </View>
        </View>

          {alc === 0 ?
            <Text style={styles.green}>{alc} ‰</Text> :
            <Text style={alc < 1.0 ? styles.yellow : styles.red}>{alc} ‰</Text>}
          

          <View style={styles.buttonContainer}>
          
            <Pressable style={styles.buttonCalc} onPress={calculate}>
            <Text style={styles.buttonTextCalc}>Calculate</Text>
            </Pressable>
          </View>
          
                
        <View style={styles.footer}>
              <Text style={styles.author}>Author: Felix Stieberitz</Text>  
        </View>  
      </ScrollView>
    </SafeAreaView>
    );
}