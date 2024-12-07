import React , {useState} from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ScrollView, Pressable, View, Text, TextInput, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { Stack, Link, router } from 'expo-router';
import * as uriJson from '../assets/icons/image-placeholder.json';

/* API for image picker */
import * as ImagePicker from 'expo-image-picker';


/* Data fields and types in form */
type FormFields = {
    name: string;
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

  const [image, setImage] = useState(uriJson.uri)

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
        setImage(result.assets[0].uri)
        
      } else {
          /* error alert is no image is selected */
        alert('You did not select any image.');
      }
    };
    

  /* Page Layout */
  return (
      /* Page title header */
    <View>
      <Stack.Screen
      options={{
        title: "Log Habit"
      }}
      />
        
        <View>
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
          

          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Hours</Text>
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
                        style={[styles.inputActual, {flex: 2}]}
                      />
                      {error && <Text style={styles.errorText}>{error.message}</Text>}
                    </>
                      
                    )}
                  />
          </View>
        
          <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Minutes</Text>
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
                        style={[styles.inputActual, {flex: 2}]}
                      />
                      {error && <Text style={styles.errorText}>{error.message}</Text>}
                    </>
                  )}
                />
          </View>
        </View>

        <View style={[styles.inputBox, {flexDirection: 'column', alignContent: 'center'}]}>
            <Controller
                control={control}
                name="media"
                rules={{ required: "An image is required for this activity"}}
                render={({ field: { value }, fieldState: { error } }) => (
                    <ImageInputError error={error} pickImageAsync={pickImageAsync} value={value}/>
                )}
                />

            {/* <Button title="Pick an image from camera roll" onPress={pickImageAsync} /> */}
            <Image style={{height:150, width:150, margin: 15, borderColor: 'black', borderWidth: 3, borderRadius:  5}} source={{uri: image}} defaultSource={require("../assets/icons/image-outline.png")}/>
            
        </View>


        <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Notes</Text>
              <Controller
                control={control}
                name="notes"
                rules={{ required: "Notes are required for this activity"}}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                  <TextInputError error={error} onBlur={onBlur} value={value} onChange={onChange} height={100}/>
                )}
              />
        </View>

        <View>
            <Pressable onPress={handleSubmit(onCreatePressed)} >
               <Text style={[styles.button, {backgroundColor: 'skyblue'}]}>Submit</Text>
            </ Pressable>
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
        style={[styles.inputActual, {marginBottom: varMargin, height: props.height},]}
        value={props.value}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
        placeholder="knitting"
        multiline={true}
    />
    {props.error && <Text style={[styles.errorText, {textAlign: 'center', margin: 5}]}>{props.error.message}</Text>}
  </View>
  )
}

const ImageInputError = props => {
  let varMargin = 15;
  if (props.error) {
    varMargin = 0;
  }

  return (
  <View>
    <Pressable onPress={props.pickImageAsync}>
    <Text style={[styles.button, {backgroundColor:'skyblue'}]}>Select an Image</Text>
  </Pressable>
  
  {props.error && <Text style={styles.errorText}>{props.error.message}</Text>}
</View>
  )
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
    inputLabel: {
      fontSize: 15, fontWeight: 'bold', margin: 10, flex: 1
    },
    inputActual: {
      margin: 10, borderColor: 'black', borderWidth: 3, borderRadius: 5, padding: 10
    },
    inputBox: {
      flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 5, borderWidth: 3, borderRadius: 5
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