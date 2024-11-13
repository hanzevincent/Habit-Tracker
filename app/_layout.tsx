import { Stack } from "expo-router";
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import { Link } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => <Header/>
    }}>
      <Stack.Screen 
      name="index" 
      options={{ title: 'Home' }}
      />
    </Stack>
  );
}

const Header = props => {
  return (  
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Link style={styles.button} href="help">Help</Link>
        <Link style={styles.button} href="settings">Settings</Link>
      </View>
  )}

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      textAlign: 'center',
      padding: 15,
      margin: 10,
      borderRadius: 5,
      backgroundColor: "#a5c6fa",
    },
  });
