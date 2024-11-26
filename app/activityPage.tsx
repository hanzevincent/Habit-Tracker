import React, {useState} from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";
import { Stack } from 'expo-router';
import { LineGraph } from './lineGraph';

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
      
      <Text>Gallery:</Text>
      <Image source={{uri: imageSource}} style={styles.mainImage} />
      <FlatList 
        horizontal={true}
        data={images}
        renderItem={({item}) => <TouchableOpacity onPress={() => onPress(item.filePath)}>
                                  <Image source={{uri: item.filePath}} style={styles.listImage}/>
                                </TouchableOpacity>}
      />

      <Text>Analytics:</Text>
      <Text>{analytics.days} days this month.</Text>
      <Text>{analytics.hoursDelta} more hours than last month.</Text>

      <LineGraph data={[1, 2, 3, 3, 2, 1, 2]} color="black" label="hours" stat="120k"/>

      <Text>Notes:</Text>
      {notes.map(day => (<View key={day.date}>
                          <Text>{day.date}</Text>
                          <Text>{day.note}</Text>
                        </View>))}

    </View>
    </ScrollView>
  );
}

interface imageEntry {habit: string, filePath: string, date: string}

interface noteEntry {habit: string, note: string, date: string}

interface analyticsEntry {habit: string, hoursDelta: number, days: number}

const images: imageEntry[] = [
  {habit: "Read", filePath: "https://media.discordapp.net/attachments/1075302901007781958/1305222172574355516/read01.png?ex=67323e5f&is=6730ecdf&hm=c319978295f415d4347f41d453ec43468f0b497fa67a5ecdd543331cea301092&=&format=webp&quality=lossless&width=275&height=275", date: "11/5/24"},
  {habit: "Read", filePath: "https://media.discordapp.net/attachments/1075302901007781958/1305222172825882694/read02.png?ex=67323e5f&is=6730ecdf&hm=a3f74eb5126ce244e730d22e13bcbf6d29033652317a21da2384d7b40f5f1012&=&format=webp&quality=lossless&width=275&height=275", date: "11/6/24"},
  {habit: "Read", filePath: "https://media.discordapp.net/attachments/1075302901007781958/1305222173052506223/read03.png?ex=67323e5f&is=6730ecdf&hm=f645f6f0587134b3609ad7a6685ba9a461df680189ceedc35defc08d314a189a&=&format=webp&quality=lossless&width=275&height=275", date: "11/7/24"},
];

const notes: noteEntry[] = [
  {habit: "Read", note: "read01", date: "11/5/24"},
  {habit: "Read", note: "read02", date: "11/6/24"},
  {habit: "Read", note: "read03", date: "11/7/24"},
];

const analytics: analyticsEntry = {habit: "Read", hoursDelta: 4, days: 8}
;

const styles = StyleSheet.create({
  mainImage: {height: 250, 
              width: 250, 
              borderColor: 'black', 
              borderWidth: 2,
  },
  
  listImage: {height: 50,
              width: 50,
              borderColor: 'black',
              borderWidth: 2,
              margin: 25,
  },
})