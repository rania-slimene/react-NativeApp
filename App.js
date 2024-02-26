import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigation from "./Navigation/TabsNavigation";

import { Provider } from "react-redux";
import {store} from './Store'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs Navigation"
            component={TabsNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
  },

  

});
