import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { StyleSheet, Text, View , Switch} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigation from "./Navigation/TabsNavigation";
import {store} from './Store'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
       <Switch   style={styles.switch}/>
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
  switch:{
    top: 15
  }
  

  

});
