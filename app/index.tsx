import { StyleSheet, Text, TouchableHighlight, View, FlatList, ScrollView, } from "react-native";
import { Link } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  return (

<View  style={{flex: 1,} /*Scrolling on FlatList doesn't work without this flex style*/}>

  <Header barStyle={styles.headerBar} homeStyle={styles.homeButton} buttonStyle={styles.headerButton}/>

  <Calendar calendarStyle={styles.calendar} entryStyle={styles.calendarEntry}/>

  <NavigationButton style={styles.button} name="Create New Activity" link="newActivityForm"/>

  <NavigationButton style={styles.button} name="Log Activity" link="newActivityForm"/>

  <ActivityList ActivityArr={ActivityArr} buttonStyle={styles.button} headerStyle={{textAlign: "center"}}/>

</View>
)}

const Header = props => {
return (
  <View style={props.barStyle}>

    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={props.homeStyle}>Home</Text>
    </View>

    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
      <Link href="help" style={props.buttonStyle}>Help</Link>
      <Link href="settings" style={props.buttonStyle}>Settings</Link>
    </View>
  </View>
)}

const Calendar = props => {
  return (
    
    <View style={props.calendarStyle}>
      {CalendarArr.map(day => (
      <CalendarEntry style={props.entryStyle} key={day} day={day}/>))}
    </View>
)}

const CalendarEntry = props => {
  return (
    <View style={props.style}>
      <Text>{props.day}</Text>
    </View>
)}

const NavigationButton = props => {
return (
<TouchableHighlight>
  <Link href={props.link} style={props.style}>{props.name}</Link>
</TouchableHighlight>
)}

const ActivityList = props => {
  return (
    <View style={{
      flex: 1,} /*Scrolling on FlatList doesn't work without this flex style*/}>
      <Text style={props.headerStyle}>Activity List</Text>
      <FlatList
      data = {props.ActivityArr}
      renderItem={({item}) => <ActivityButton style={props.buttonStyle} key={item} link="newActivityForm" name={item} />}  />
    </View>
)}

const ActivityButton = props => {
return (
<View style={props.style}>
  <TouchableHighlight>
    <Link href={props.link}>{props.name}</Link>
  </TouchableHighlight>
</View>
)}

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
        borderColor: 'black',
        borderWidth: 1,
      },
    
      listHeader: {
        width: 'auto',
        textAlign: 'center',
      },
    });

const ActivityArr = [
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

const CalendarArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];