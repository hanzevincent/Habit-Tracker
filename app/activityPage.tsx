import { Text, View, FlatList } from "react-native";
import { useNavigation, useRouter, useLocalSearchParams } from "expo-router";

export default function activityPage() {
  const { name } = useLocalSearchParams();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name} Page.</Text>
    </View>
  );
}