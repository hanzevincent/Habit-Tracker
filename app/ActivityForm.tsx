import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Pressable, View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorValue } from 'react-native/types';

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
          <div>
            <label>
              Activity Name
              <input {...register ("activity", {required: "Activity Name is required",
              validate: value => {
                /* if (value.includes("A")) {
                  return "Activity Name may not begin with a special character";
                } */
                return true;
              },
              }) } type='text' placeholder='knitting'/>
              {errors.activity && <div style={styles.errorText}>{errors.activity.message}</div>}
            </label>
          </div>
          
          {/* Color input */}
          <div>
            <label>
              Activity Color
              <input {...register ("color", {required: "Color is Required"}) } type='color'/>
            </label>
          </div>
          
          {/* Checkbox inputs */}
          <div>
            <label>
              Log Hours
              <input {...register ("hours")} type='checkbox'/>
              
            </label>
            <label>
              Upload Media
              <input {...register ("media")} type='checkbox'/>
              
            </label>
            <label>
              Write notes
              <input {...register ("notes")} type='checkbox'/>
              
            </label>
            
            <div>
              <button disabled={isSubmitting} type='submit'>
                {isSubmitting? "Submitting..." : "Create Activity"}
              </button>
            </div>
            
            </div>
        </form>
      
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
