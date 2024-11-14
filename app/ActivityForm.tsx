import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Pressable, View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorValue } from 'react-native/types';
// import { CheckBox } from '@react-native-community/checkbox';
import { Checkbox } from 'expo-checkbox';
// import { InputColor } from 'react-input-color';

/* Data and types in form */
type FormFields = {
  activity: string;
  color: ColorValue;
  hours: boolean;
  media: boolean;
  notes: boolean;
};

export default function App() {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>();
/* async form waits for data to be processed */
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    /* waits 1 sec default */
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>New Activity</Text>
        <form action="" onSubmit= {handleSubmit(onSubmit)}>
          {/* Activity Name Input */}
          <View>
              <Text>Activity Name</Text>
              <TextInput {...register ("activity", {required: "Activity Name is required",
              validate: value => {
                /* if (value.includes("A")) {
                  return "Activity Name may not begin with a special character";
                } */
                return true;
              },
              }) } placeholder='knitting'/>
              {errors.activity && <div style={styles.errorText}>{errors.activity.message}</div>}
          </View>
          
          {/* Color input */}
          {/*<View>
              <Text>Activity Color</Text>
              <InputColor {...register ("color", {required: "Color is Required"}) }/>
          </View>*/}
          
          {/* Checkbox inputs */} 
          <View>
              <Text>Log Hours</Text>
              <Checkbox {...register ("hours")}/>
              
              <Text>Upload Media</Text>
              <Checkbox {...register ("media")}/>
              
              <Text>Write notes</Text>
              <Checkbox {...register ("notes")}/>
              
            <View>
              <Button title={"submit"} disabled={isSubmitting} type='submit'
                {...isSubmitting? "Submitting..." : "Create Activity"}/>
            </View>
            
            </View>
        </form>
      
    </View> 
  );
}

/* disabled={isSubmitting} type='submit'>
                {isSubmitting? "Submitting..." : "Create Activity"}
                onChange={} */

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
