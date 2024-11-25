import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Pressable, View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorValue } from 'react-native/types';
import { Checkbox } from 'expo-checkbox';
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
  };

  /* const hex = require('string-hex'); */
 

  /*Page Layout*/
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>New Activity</Text>
        <View>
          {/* Activity Name Input */}
          {/*string values use onTextChange*/}
          <View>
              <Text>Activity Name</Text>
              <Controller
                control={control}
                name="activity"
                rules={{ required: "Activity Name is required" }}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder="knitting"
                    />
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                  </>
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
              <Text>Log Hours</Text>
              <Controller
                control={control}
                name="hours"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange} />
                )}
              />
              
              <Text>Upload Media</Text>
              <Controller
                control={control}
                name="media"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange} />
                )}
              />
              
              <Text>Write notes</Text>
              <Controller
                control={control}
                name="notes"
                render={({ field: { value, onChange } }) => (
                  <Checkbox value={value} onValueChange={onChange} />
                )}
              />
              
            <View>
              <Button title={"submit"}
                onPress={handleSubmit(onCreatePressed)}
              />
            </View>
            
            </View>
        </View>
      
    </View> 
  );
}

/* Styles */
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  errorText: {
    color: 'red',
  },
});
