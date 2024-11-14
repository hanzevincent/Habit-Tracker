import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function help() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
      options={{
        title: "Help"
      }}
      />

      <Text>Help.</Text>
    </View>
  );
}
