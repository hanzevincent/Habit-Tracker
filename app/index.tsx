import { StyleSheet, Text, TouchableHighlight, View, FlatList, ScrollView, Button, } from "react-native";
import { Link, router } from "expo-router";
import { MenuProvider } from 'react-native-popup-menu';
import {  Menu,  MenuOptions,  MenuOption,  MenuTrigger } from 'react-native-popup-menu';
import {Calendar} from 'react-native-calendars';
import DropdownSvg from '../assets/icons/dropdown.js';

import { useLocalSearchParams } from "expo-router";

export default function Index() {
  
  // Setting up fake data for the sake of testing and demo.
  // This array is used to render all the activity buttons in the ActivityList object.
  const read = {key: "Read", color: "lightcoral"};
  const exercise = {key:  "Exercise", color: "cornflowerblue"};
  const knitting = {key:  "Knitting", color: "lightgreen"};

  const ActivityArr = [
    read, exercise, knitting
  ];

  const days = [
    {date: "2024-12-01", dots: [read, exercise, knitting]},
    {date: "2024-12-02", dots: [read, knitting]},
    {date: "2024-12-03", dots: [knitting, exercise]},
  ];


  // This is the only way I could figure out how to get the dates in a format that the calendar package recognizes, while reading info in from an array.
  // Taken from this stackoverflow page.
  //https://stackoverflow.com/questions/64044386/how-to-dynamically-populate-calendar-marked-dates-from-api-react-native-redux
  let mark = {};

  days.forEach((key) => {
    mark[key.date] = {dots: key.dots};
  })

  return (

    <View  style={{flex: 1, backgroundColor: "white"} /*Scrolling on FlatList doesn't work without this flex style*/}>

        <Calendar

          theme={{
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                arrowColor: 'black',
                monthTextColor: 'black',
                indicatorColor: 'blue',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: 15,
                textMonthFontSize: 25,
                textDayHeaderFontSize: 15,
          }}

      <NavigationButton style={styles.button} name="Log Activity" link="logActivityForm"/>
          markingType={'multi-dot'}
          markedDates={ mark }
        />

      <Link style={[styles.button, {backgroundColor: "skyblue"}]} href="ActivityForm" color="#00d1cf">Create New Activity</Link>

      <Link style={[styles.button, {backgroundColor: "orchid"}]} href="Log Activity" link="ActivityForm" color="#c560ff">Log Activity</Link> 

      <MenuProvider>
      <ActivityList ActivityArr={ActivityArr} buttonStyle={[styles.button]} headerStyle={styles.headerStyle}/>
      </MenuProvider>
    </View>
)}

// This is in a custom component because I got a bit overzealous. But it also makes the main view that gets returned look a bit more readable.
// Habits are in a FlatList so if too many habits are established to be displayed on the screen the user can scroll down.
// This isn't an issue with the demo data but it could become a problem in actual use.
const ActivityList = props => {
  return (
    <View style={{
      flex: 1,} /*Scrolling on FlatList doesn't work without this flex style*/}>
      <Text style={props.headerStyle}>Activity List</Text>
      <FlatList
      data = {props.ActivityArr}
      renderItem={({item}) => <ActivityButton style={[props.buttonStyle, {backgroundColor: item.color}]} key={item} link="activityPage" name={item.key} />}  />
    </View>
)}

// This is separated to make other components more readable. 
const ActivityButton = props => {
  const buttonName = props.name
return (
  <View style={[props.style]}>
    <Link href={{pathname: props.link, params: {habitName: buttonName}}} style={{fontSize: 20, fontWeight: "bold"}}>
    {props.name}
    </Link>
    <View style={styles.popUpMenu}>
            <Menu onSelect={value => alert(`Not yet implemented!`)}>
          <MenuTrigger><DropdownSvg style={{width: 25, height: 25}}/></MenuTrigger>
          <MenuOptions customStyles={{optionText: styles.optionStyles}}>
            <MenuOption value={1} text='Archive' />
            <MenuOption value={2} text='Delete' />
          </MenuOptions>
        </Menu>
    </View>
  </View>
)}

    const styles = StyleSheet.create({
      optionStyles: {
        fontSize: 15,
        fontWeight: 'bold',
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

      popUpMenu: {
        flex: 3, 
        justifyContent: 'flex-end',
        flexDirection: 'row', 
        alignItems: "center"
      },

      headerStyle: {
        textAlign: "center", 
        alignItems: "center", 
        fontSize: 20, 
        fontWeight: "bold"}
    });
