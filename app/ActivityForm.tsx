import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Pressable, View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorValue } from 'react-native/types';
import { Checkbox } from 'expo-checkbox';
import { Stack, Link, router } from 'expo-router';
import InputColor, { InputColorProps } from 'react-input-color';
{/* import { InputColor } from 'react-input-color'; */}

/* Data and types in form */
type FormFields = {
  activity: string;
  color: string;
  hours: boolean;
  media: boolean;
  notes: boolean;
};

export default function App() {
  /*uses pre-defined form fields when the form is submitted*/
  const {control, handleSubmit} = useForm<FormFields>({
    /* initialize to empty string and false*/
    defaultValues: {
      activity: '',
      color: '',
      hours: false,
      media: false,
      notes: false,  
    },
  });

  /*Logs all form fields to console when form is submitted*/
  const onCreatePressed: SubmitHandler<FormFields> = data => {
    console.log("onCreatePressed");
    console.log(data);
    /* back arrow navigation */
    router.back();
  };

  /* const hex = require('string-hex'); */
 

  /*Page Layout*/
  return (
    <View >
      <Stack.Screen
      options={{
        title: "Create New Habit"
      }}
      />
        <View>
          {/* Activity Name Input */}
          {/*string values use onTextChange*/}
          <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Activity Name</Text>
              <Controller
                control={control}
                name="activity"
                rules={{ required: "Activity Name is required" }}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <TextInputError error={error} onBlur={onBlur} value={value} onChange={onChange}/>

                )}
              />

          </View>
          
          {/* Color input */}
          <View>
              {/*<Text>Activity Color</Text>*/}
              {/*<Controller
                control={control}
                name="color"
                render={({ field: { value, onChange } }) => (
                  <View>
                    <InputColor
                      initialValue={hex(value)}
                      onChange={onChange}
                    />
                    <Text>Selected Color: {value}</Text>
                  </View>
                )}
                />*/}
          </View>
          
          {/* Checkbox inputs */} 
          {/*boolean values use onValueChange*/}
          <View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Log Hours</Text>
              <Controller
                control={control}
                name="hours"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange}  style={styles.inputActual}/>
                )}
              />
            </View>
              
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Upload Media</Text>
              <Controller
                control={control}
                name="media"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange} style={styles.inputActual}/>
                )}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Write notes</Text>
              <Controller
                control={control}
                name="notes"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange} style={styles.inputActual}/>
                )}
              />
            </View>
              
            <View style={{margin: 15, }}>
              <Pressable style={{}} onPress={handleSubmit(onCreatePressed)}>
                <Text style={[styles.button, { backgroundColor:'skyblue', textAlign: 'center', fontSize: 20, fontWeight: 'bold', }]}>Submit</Text>
              </Pressable>
            </View>
            
            </View>
        </View>
      
    </View> 
  );
}

const TextInputError = props => {
  let varMargin = 15;
  if (props.error) {
    varMargin = 0;
  }

  return (
  <View style={{flex: 2}}>
    <TextInput
        style={[, styles.inputActual, {marginBottom: varMargin}]}
        value={props.value}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
        placeholder="knitting"
    />
    {props.error && <Text style={[styles.errorText, {textAlign: 'center', margin: 5}]}>{props.error.message}</Text>}
  </View>
  )
}

/* Styles */
const styles = StyleSheet.create({
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  errorText: {
    color: 'red',
  },
  inputLabel: {
    fontSize: 15, fontWeight: 'bold', margin: 15, flex: 1
  },
  inputActual: {
    margin: 15, borderColor: 'black', borderWidth: 3, borderRadius: 5, padding: 10
  },
  inputBox: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 15, borderWidth: 3, borderRadius: 5
  },
  button: {
    flexDirection: 'row',
    fontSize: 20,
    alignItems: "center",
    textAlign: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    height:60,
    fontWeight: "bold",
    borderWidth:  3,
  },
});
