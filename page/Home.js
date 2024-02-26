import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,FlatList, Switch} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Searchbar, Card, Avatar} from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleDark} from '../DarkModeSlice'
export default function App() {

  const isDarkModeEnabled = useSelector((state) => state.DarkMode.isDarkModeEnabled);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(toggleDark());
  };
  const [users, setUsers] = useState([]);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const Stack = createNativeStackNavigator();
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [isLoading, setLoading] = useState(true);
  //   fetch  ("https://jsonplaceholder.typicode.com/users",{
  //     methode :"GET",
  //     headers: {
  //         Accept: "application/json",
  //         "Content-Type" : "application/json"
  //     }

  //   }

  //   ).then(res =>{
  //     return res.json()
  //   }).then(res =>{
  //   console.log(res)
  //   })

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setUsers(json);
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };
 
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
     
      <View style={styles.header} >
      <View style={isDarkModeEnabled ? styles.containerDark : styles.containerLight}>
      <Text style={styles.text}>
        {isDarkModeEnabled ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
      </Text>
      <Switch  style={styles.Switch} value={isDarkModeEnabled} onValueChange={toggleMode} />
    </View>
        {/* <Switch style={styles.Switch} value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
        {/* <TouchableOpacity
          style={styles.Switch}
          onPress={() => dispatch(toggleDark())}
        >
          {isDarkMode ? <Text>Switch to Light Mode</Text>  : <Text>Switch to Dark Mode</Text>}
          <Text style={styles.Switchtext}>Dark Mode</Text>
        </TouchableOpacity> */}

        <Searchbar style={styles.search} placeholder="Search" />
      </View>
      <Text style={styles.list}> List of users </Text>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Card.Title
            style={styles.card}
            title={item.name}
            subtitle={item.phone}
            key={item.id}
            left={(props) => <Avatar.Icon {...props} icon="folder" size={50} />}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        ItemSeparatorComponent={() => <View style={styles.espace} />}
        //showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.container}>
        {users.map((user) => (
          <Text style={styles.text} key={user.id}>
            {user.name}
          </Text>
        ))}
      </View> */}
     
    </>
  );
}

const styles = StyleSheet.create({

 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    marginVertical: 5,
    color: "red",
    textAlign: "center",
  },

  header: {
    position: "relative",
    justifyContent: "flex-start",
    backgroundColor: "#a6f2db",
    width: "100%",
    height: 150,
  },
  search: {
    position: "absolute",
    top: 50,
    width: 350,
    marginLeft: 21,
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "white",
    fontSize: 20,
  },

  card: {
    backgroundColor: "#f1fafb",
    padding: 30,
    borderRadius: 50,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 80,
    },
    shadowOpacity: 0,
    shadowRadius: 100,
    elevation: 1,
  },

  espace: {
    height: 20,
    backgroundColor: "white",
  },
  Switch: {
   
    marginTop: 40,
  
  },
  Switchtext: {
    position: "absolute",
    color: "red",
    textAlign: "center",
    top: 10,
  },
    containerDark: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },


});
