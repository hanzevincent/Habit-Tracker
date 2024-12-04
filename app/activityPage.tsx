import React, {useState} from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Stack } from 'expo-router';
import LineGraph from './lineGraph';
import Assets from '../assets';
import * as FileSystem from 'expo-file-system';

export default function activityPage() {

  const { habitName } = useLocalSearchParams();
  const [imageSource, setImageSource] = useState(images[0].filePath)
  const onPress = (source: string) => setImageSource(source)
  const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}]

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

      <Image source={imageSource} style={styles.mainImage} />
      <FlatList 
        horizontal={true}
        data={images}
        renderItem={({item}) => <TouchableOpacity onPress={() => onPress(item.filePath)} style={{margin: 15}}>
                                  <Image source={item.filePath} style={styles.listImage}/>
                                </TouchableOpacity>}
      />

      <Text style={{fontSize: 20, fontWeight: 'bold',}}>Analytics:</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold',}}>{analytics.days} days this month.</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold',}}>{analytics.hoursDelta} more hours than last month.</Text>

      <LineGraph data={[1, 2, 3, 3, 2, 1, 2]} color="black" label="hours" stat="120k"/>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Notes:</Text>
      {notes.map(day => (<View key={day.date} style={{borderColor: "black", borderWidth: 2, margin: 5, flexWrap: 'wrap', width: 300,}}>
                          <Text style={{fontSize: 15, fontWeight: "bold"}}>{day.date}</Text>
                          <Text style={{ flexWrap: "wrap", width: 280, margin: 5}}>{day.note}</Text>
                        </View>))}

    </View>
    </ScrollView>
  );
}

interface imageEntry {habit: string, filePath: string, date: string}

interface noteEntry {habit: string, note: string, date: string}

interface analyticsEntry {habit: string, hoursDelta: number, days: number}

const images: imageEntry[] = [
  {habit: "Read", filePath: require("../assets/images/read01.jpg"), date: "11/5/24"},
  {habit: "Read", filePath: require("../assets/images/read02.jpg"), date: "11/6/24"},
  {habit: "Read", filePath: require("../assets/images/read03.jpg"), date: "11/7/24"},
  {habit: "Read", filePath: require("../assets/images/read04.jpg"), date: "11/8/24"},
];

const notes: noteEntry[] = [
  {habit: "Read", note: "Cool sci-fi. Some of the \'science\' is a bit hard to believe but it's fun either way.", date: " 11/5/24"},
  {habit: "Read", note: "I don't get philosophy. Maybe I need to read some of the old dialogues.", date: " 11/6/24"},
  {habit: "Read", note: "Haven't read it yet but it sounds really interesting.", date: " 11/7/24"},
  {habit: "Read", note: "Haven't read it yet but it sounds really interesting.", date: " 11/8/24"},
];

const analytics: analyticsEntry = {habit: "Read", hoursDelta: 4, days: 8}
;

const styles = StyleSheet.create({
  mainImage: {height: 250, 
              width: 250, 
              borderColor: 'black', 
              borderWidth: 3,
              borderRadius: 5,
  },
  
  listImage: {height: 80,
              width: 80,
              borderColor: 'black',
              borderWidth: 3,
              borderRadius: 5,
  },
})