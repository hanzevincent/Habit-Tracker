import { StyleSheet, Text, TouchableHighlight, View, FlatList, ScrollView, } from "react-native";
import { Link } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <View  style={{
      flex: 1,} /*Scrolling on FlatList doesn't work without this flex*/}>

    <View style={styles.headerBar}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.homeButton}>Home</Text>
        </View>

        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
          <Link href="help" style={styles.headerButton}>Help</Link>
          <Link href="settings" style={styles.headerButton}>Settings</Link>
        </View>
      </View>

      <Calendar style={styles.calendar}/>

      <View>
        <NavigationButton name="Create New Activity" link="newActivityForm"/>

        <NavigationButton name="Log Activity" link="newActivityForm"/>
      </View> 

      <View style={{
      flex: 1,} /*Scrolling on FlatList doesn't work without this flex*/}>
        <Text style={{textAlign: "center"}}>Activity List</Text>
        <FlatList
          data = {ActivityList}
          renderItem={({item}) => <ActivityButton link="newActivityForm" name={item} />}
        />
      </View>
      
    </View>
  );
}

const NavigationButton = props => {
  return (
  <TouchableHighlight>
    <Link href={props.link} style={styles.button}>{props.name}</Link>
  </TouchableHighlight>
  );}

  const ActivityButton = props => {
    return (
    <View style={styles.button}>
      <TouchableHighlight>
        <Link href={props.link}>{props.name}</Link>
      </TouchableHighlight>
    </View>
    );}

    const CalendarEntry = props => {
      return (
        <View style={styles.calendarEntry}>{props.day}</View>
      )
    }

    const Calendar = props => {
      return (
        
        <View style={styles.calendar}>
          {CalendarEntries.map(day => (
          <CalendarEntry day={day}/>))}
        </View>
      )
    }

    const styles = StyleSheet.create({
      button: {
        textAlign: 'center',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#a5c6fa",
      },
    
      headerBar: {
        flexDirection: 'row',
        margin: 5,
      },
    
      headerButton: {
        backgroundColor: "#a5c6fa",
        textAlign: "center",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 30,
      },

      homeButton: {
        backgroundColor: "#a5c6fa",
        textAlign: "center",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 30,
      },
    
      calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 'auto',
        height: 250,


      },
    
      calendarEntry: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '25%',
        width: '10%',
        backgroundColor: "#d0d0d0",
        borderColor: 'black'
      },
    
      listHeader: {
        width: 'auto',
        textAlign: 'center',
      },
    });

    const ActivityList = [
  "Read Book",
  "Exercise",
  "Homework",
  "Clean Room",
  "Wash Dishes",
  "Read Book",
  "Exercise",
  "Homework",
  "Clean Room",
  "Wash Dishes",
  "Read Book",
  "Exercise",
  "Homework",
  "Clean Room",
  "Wash Dishes",
];

const CalendarEntries = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];