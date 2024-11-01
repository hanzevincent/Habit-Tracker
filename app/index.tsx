import { StyleSheet, Text, TouchableHighlight, View, FlatList, ScrollView, } from "react-native";
import { Link } from "expo-router";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Index() {
  return (
    <View  style={{
      flex: 1,}}>

    <View style={styles.headerBar}>
        <Text style={styles.headerButton}>Home</Text>

        <Link href="help" style={styles.headerButton}>Help</Link>
        <Link href="settings" style={styles.headerButton}>Settings</Link>
      </View>

      <View>
        <Text style={styles.calendar}>
          Calendar Placeholder
        </Text>
      </View>

      <View>
        <NavigationButton name="Create New Activity" link="newActivityForm"/>

        <NavigationButton name="Log Activity" link="newActivityForm"/>
      </View> 

      <View style={{
      flex: 1,}}>
        <Text style={{textAlign: "center"}}>Activity List</Text>
        <FlatList
          data = {ActivityList}
          renderItem={({item}) => <NavigationButton link="newActivityForm" name={item} />}
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

  calendar: {
    width: 'auto',
    height: 250,
    padding: 25,
    textAlign: "center",
    backgroundColor: "#a5c6fa",
    borderRadius: 5,
    margin: 10,
  },

  listHeader: {
    width: 'auto',
    textAlign: 'center',
  },
});