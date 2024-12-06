import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Pressable, View, Text, TextInput, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { Stack, Link, router } from 'expo-router';

/* API for image picker */
import * as ImagePicker from 'expo-image-picker';


/* Data fields and types in form */
type FormFields = {
    hours: number;
    minutes: number;
    media: string;
    notes: string;
  };

export default function App() {
  /*uses pre-defined form fields when the form is submitted*/
  const {control, handleSubmit, setValue} = useForm<FormFields>({
    /* initialize to empty string and false*/
    defaultValues: {
      hours: 0,
      minutes: 0,
      media: '',
      notes: '',  
    },
  });

  /*Logs all form fields to console when form is submitted*/
  const onCreatePressed: SubmitHandler<FormFields> = data => {
    console.log("onLogPressed");
    console.log(data);
    /* back arrow navigation */
    router.back();
  };

  /* only allows for number values */
  const allowOnlyNumber=(value)=>{
    return value.replace(/[^0-9]/g, '');
 };

    /* Pick image function */
    const pickImageAsync = async () => {
    /* launches API library */
      let result = await ImagePicker.launchImageLibraryAsync({
        /* mediaTypes: ['images'], */
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      /* If an image is selected it's attributes are logged on the console */
      if (!result.canceled) {
        console.log(result);
        console.log('Selected Image URI:', result.assets[0].uri);
        setValue('media', result.assets[0].uri);
        
      } else {
          /* error alert is no image is selected */
        alert('You did not select any image.');
      }
    };
    

  /* Page Layout */
  return (
      /* Page title header */
    <View style={styles.appContainer}>
      <Stack.Screen
      options={{
        title: "Log Habit"
      }}
      />
      <Text style={styles.appTitle}>Log Activity</Text>
        <View>
        <Text>Hours</Text>
              {/* Hours Input */}
              {/* uses text input but calls allowOnlyNumber to filter out non integer input */}
              <Controller
                control={control}
                name="hours"
                rules={{ required: "Hours are required for this activity"}}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <TextInput
                      value={value}
                      onChangeText={(text)=>onChange(allowOnlyNumber(text))}
                      onBlur={onBlur}
                      placeholder='0'
                      keyboardType="numeric"
                    />
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                  </>
                )}
              />

        <Text>Minutes</Text>
                {/* Minutes input */}
              <Controller
                control={control}
                name="minutes"
                rules={{ required: "Minutes are required for this activity"}}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <TextInput
                      value={value}
                      onChangeText={(text)=>onChange(allowOnlyNumber(text))}
                      onBlur={onBlur}
                      placeholder='0'
                      keyboardType="numeric"
                    />
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                  </>
                )}
              />
        </View>

        <View>
            <Controller
                control={control}
                name="media"
                rules={{ required: "An image is required for this activity"}}
                render={({ field: { value }, fieldState: { error } }) => (
                    <>
                        <Button title="Pick an image from camera roll" onPress={pickImageAsync} />
                        {value && value !== '' ? (
                            
                            <Image source={value} />
                            ) : (
                            <Text>No image selected</Text>
                            )}
                        
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                  </>
                )}
                />

            {/* <Button title="Pick an image from camera roll" onPress={pickImageAsync} /> */}
            <Image source={{ uri : 'file:///var/mobile/Containers/Data/Application/4A09967A-DD1E-4CB8-A3AF-4D925972F4CA/Library/Caches/ExponentExperienceData/@anonymous/Habit-Tracker-f774d194-3358-4805-8782-9b49cd9b025b/ImagePicker/0CAB2306-9E36-4B81-B86A-B29875C80031.jpg'}}/>
            
        </View>


        <View>
        <Text>Notes</Text>
              <Controller
                control={control}
                name="notes"
                rules={{ required: "Notes are required for this activity"}}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <>
                    <TextInput
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder='type notes here'
                    />
                    {error && <Text style={styles.errorText}>{error.message}</Text>}
                  </>
                )}
              />
        </View>

        <View>
            <Button title={"submit"}
                onPress={handleSubmit(onCreatePressed)}
            />
        </View>

    </View>
  );
}
/* Hours */


/* Media */
/* Notes */

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