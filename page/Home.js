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
        "http://192.168.219.118:8080/cours"
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
    < View style={styles.header}>
    <View style={isDarkModeEnabled ? styles.containerDark : styles.header}>
      <Switch  style={styles.Switch} value={isDarkModeEnabled} onValueChange={toggleMode} />
      {/* <Text style={styles.text}>
        {isDarkModeEnabled ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
      </Text> */}
      <Searchbar style={styles.search} placeholder="Search" />
      <Text style={isDarkModeEnabled ? styles.listDark : styles.list}     > List of users </Text>

      <FlatList style={styles.flat}
        data={users}
        renderItem={({ item }) => (
          <Card.Title
            style={ styles.card}
            title={item.nom}
            subtitle={item.orders}
            key={item.id}
            left={(props) => <Avatar.Icon {...props} icon="folder" size={50} />}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        ItemSeparatorComponent={() => <View style={isDarkModeEnabled ? styles.espaceDark : styles.espace} />}
        //showsVerticalScrollIndicator={false}
      />
      {/* <View style={styles.container}>
        {users.map((user) => (
          <Text style={styles.text} key={user.id}>
            {user.name}
          </Text>
        ))}
      </View> */}
     
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 5,
    color: "red",
    textAlign: "center",
  },

  header: {
    flex : 1,
    position: "relative",
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    height: 150,
  },
  containerDark: {
    flex : 1,
    position: "relative",
    justifyContent: "flex-start",
    backgroundColor: "black",
    width: "100%",
    height: 150,
  },
  flat:{
  top:120
  },
  search: {
    position: "absolute",
    top: 50,
    width: 350,
    marginLeft: 21,
    backgroundColor: "#f2f2f2",
  },
  list: {
    color:'black',
    backgroundColor: "white",
    fontSize: 20,
    top:100,
    marginTop:40
  },
  listDark: {
    backgroundColor: "black",
    fontSize: 20,
    color: "white",
    top:100,
    marginTop:40
  },
  card: {
    backgroundColor: "#f1fafb",
    padding: 30,
    borderRadius: 200,
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
  espaceDark:{

    height: 20,
    backgroundColor: "black", 
  },

  Switch: {
   position : 'absolute',
    right:5
  
  },
  Switchtext: {
    position: "absolute",
    color: "red",
    textAlign: "center",
    top: 10,
  },
});
