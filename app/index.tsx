import { StyleSheet, Text, TouchableHighlight, View, FlatList, ScrollView, Button, } from "react-native";
import { Link } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import {  Menu,  MenuOptions,  MenuOption,  MenuTrigger, renderers} from 'react-native-popup-menu';
import { useAnimatedScrollHandler, withDecay } from "react-native-reanimated";
import {useEffect} from "react";
import { SvgUri } from 'react-native-svg';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import DropdownSvg from '../assets/icons/dropdown.js';

import { useLocalSearchParams } from "expo-router";

export default function Index() {

  interface habit {name: String; color: String;};

  interface daysHabits {dots: habit[]};

  interface allDaysHabits {[id: string]: daysHabits};

  const read = {key: "Read", color: "red"};
  const exercise = {key:  "Exercise", color: "blue"};
  const knitting = {key:  "Knitting", color: "green"};

  const d1 = {date: "2024-11-30", dots: [read, exercise]};
  const d2 = {date: "2024-11-28", dots: [read]};
  const d3 = {date: "2024-11-29", dots: [exercise]};

  //https://stackoverflow.com/questions/64044386/how-to-dynamically-populate-calendar-marked-dates-from-api-react-native-redux
  let mark = {};

  mark[d3.date] = {dots: d3.dots};
  mark[d2.date] = {dots: d2.dots};
  mark[d1.date] = {dots: d1.dots};

  const ActivityArr = [
    read, exercise, knitting
  ];

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

          markingType={'multi-dot'}
          markedDates={ mark }
        />

      <NavigationButton style={[styles.button, {borderColor: "#00d1cf"}]} name="Create New Activity" link="ActivityForm"/>

      <NavigationButton style={[styles.button, {borderColor: "#c560ff"}]} name="Log Activity" link="ActivityForm"/> 

      <ActivityList ActivityArr={ActivityArr} buttonStyle={[styles.button]} headerStyle={{textAlign: "center", alignItems: "center", fontSize: 20, fontWeight: "bold"}}/>
    </View>
)}

/*const Calendar = props => {
  return (
    
    <View style={props.calendarStyle}>
      {CalendarArr.map(day => (
      <CalendarEntry style={props.entryStyle} key={day} day={day}/>))}
    </View>
)}*/

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
      renderItem={({item}) => <ActivityButton style={[props.buttonStyle, {borderColor: item.color}]} key={item} link="activityPage" name={item.key} />}  />
    </View>
)}

const ActivityButton = props => {
  const buttonName = props.name
  const { ContextMenu } = renderers;
return (
  <MenuProvider>
  <View style={[props.style]}>
    <Link href={{pathname: props.link, params: {habitName: buttonName}}} style={{fontSize: 20, fontWeight: "bold"}}>
    {props.name}
    </Link>
    <View style={styles.popUpMenu}>
            <Menu onSelect={value => alert(`Selected number: ${value}`)} renderer={ContextMenu}>
          <MenuTrigger><DropdownSvg style={{width: 25, height: 25}}/></MenuTrigger>
          <MenuOptions customStyles={{optionText: styles.optionStyles}}>
            <MenuOption value={1} text='Archive' />
            <MenuOption value={2} text='Delete' />
          </MenuOptions>
        </Menu>
    </View>
  </View>
  </MenuProvider>
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
    
      headerBar: {
        flexDirection: 'row',
        margin: 5,
      },
    
      headerButton: {
        textAlign: "center",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 30,
      },

      homeButton: {
        textAlign: "center",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: 30,
      },
    
      listHeader: {
        width: 'auto',
        textAlign: 'center',
      },

      popUpMenu: {
        flex: 3, 
        justifyContent: 'flex-end',
        flexDirection: 'row', 
        alignItems: "center"
      },

      calendarStyle: {
        backgroundColor: 'black',
      }
    });