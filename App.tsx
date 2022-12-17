import {
  Text,
  View,
  SafeAreaView,
  Pressable,
} from "react-native";
import { TestFetch } from "./screens/fetch";

export default function App() {
  return (
    <SafeAreaView className="bg-slate-900 pt-20 px-10 h-full">
      <TestFetch />
      <Text className="text-white">open your mouth</Text>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
