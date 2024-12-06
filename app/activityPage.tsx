import React, {useState} from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBase } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from 'expo-router';
import LineGraph from './lineGraph';

export default function activityPage() {

  // For the large image so it changes when the smaller images are pressed.
  // imageSource is never accessed directly but is still needer. useState provides a setter with setImageSource()
  const { habitName } = useLocalSearchParams();
  const [imageSource, setImageSource] = useState(entries[0].filePath)
  const onPress = (source: string) => setImageSource(source)

  // LineGraph data is defined in the component because didn't have time to make it work with the rest of the data and
  // would need to define 7 days worth of data which would be tedious. This would need to be changed.
  // Hours for each day would have to be pulled from the object and generate an array from it. This would not be difficult on it's own.
  // However the code for generating the line on the graph would have to be changed to make it look nice.

  return (
    <ScrollView>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Stack.Screen
        options={{
          title: habitName
        }}
      />
      
      <Text style={{fontSize: 20, fontWeight: 'bold',}}>Gallery:</Text>

      <Image source={imageSource} style={styles.mainImage}/>
      
      <FlatList 
        horizontal={true}
        data={entries}
        renderItem={({item}) => <TouchableOpacity onPress={() => onPress(item.filePath)} style={{margin: 15}}>
                                  <Image source={item.filePath} style={styles.listImage}/>
                                </TouchableOpacity>}
      />

      <Text style={{fontSize: 20, fontWeight: 'bold',}}>Analytics:</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold',}}>{analytics.days} days this month.</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold',}}>{analytics.hoursDelta} more hours than last month.</Text>

      <LineGraph data={[1, 2, 3, 3, 2, 1, 2]} color="black" label="hours" stat="120k"/>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Notes:</Text>
      {entries.map(day => (<View key={day.date} style={{borderColor: "black", borderWidth: 2, margin: 5, flexWrap: 'wrap', width: 300,}}>
                          <Text style={{fontSize: 15, fontWeight: "bold"}}>{day.date}</Text>
                          <Text style={{ flexWrap: "wrap", width: 280, margin: 5}}>{day.note}</Text>
                        </View>))}

    </View>
    </ScrollView>
  );
}

interface entry {habit: string, filePath: string, date: string, note: string, hours: number}

interface analyticsEntry {habit: string, hoursDelta: number, days: number}

// Image filepaths are hardcoded in. Couldn't find a way to render them dynamically that I could implement in a reasonable amount of time.
// This would have to be changed for the app to be fully usable.
const entries: entry[] = [
  {habit: "Read", filePath: require("../assets/images/read01.jpg"), date: "11/5/24", note: "Cool sci-fi. Some of the \'science\' is a bit hard to believe but it's fun either way.", hours: 1},
  {habit: "Read", filePath: require("../assets/images/read02.jpg"), date: "11/6/24", note: "I don't get philosophy. Maybe I need to read some of the old dialogues.", hours: 2},
  {habit: "Read", filePath: require("../assets/images/read03.jpg"), date: "11/7/24", note: "Haven't read it yet but it sounds really interesting.", hours: 1},
  {habit: "Read", filePath: require("../assets/images/read04.jpg"), date: "11/8/24", note: "Haven't read it yet but it sounds really interesting.", hours: 3},
];

const analytics: analyticsEntry = {habit: "Read", hoursDelta: 4, days: 8};

const styles = StyleSheet.create({
  mainImage: {height: 250, 
              width: 250, 
              borderColor: 'black', 
              borderWidth: 3,
              borderRadius: 5,
  },
  
  listImage: {height: 100,
              width: 100,
              borderColor: 'black',
              borderWidth: 3,
              borderRadius: 5,
  },
})