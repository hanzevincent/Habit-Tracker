import { Stack } from "expo-router";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { SvgUri } from 'react-native-svg';
import headerButtons from "./headerButtons";
 
export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      }, headerRight: headerButtons
    }}>
      <Stack.Screen 
      name="index" 
      options={{ title: 'Home' }}
      />
    </Stack>
  );
}

