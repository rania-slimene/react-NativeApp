import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cards from '../page/Cards'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

<Stack.Navigator>
  <Stack.Screen name="Cards" component={Cards} options={{ headerShown:false}} />
</Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
