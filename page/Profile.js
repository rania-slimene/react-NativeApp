import { StatusBar } from 'expo-status-bar';
import { useDispatch , useSelector} from 'react-redux';
import { StyleSheet, Text, View , Switch}  from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {toggleDark} from '../DarkModeSlice'
export default function App() {

  const isDarkModeEnabled = useSelector((state) => state.DarkMode.isDarkModeEnabled);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(toggleDark());
  };
  const Stack = createNativeStackNavigator();
  return (
    <>
    
    <View style={isDarkModeEnabled ? styles.containerDark : styles.container}>
    <Switch  style={styles.Switch} value={isDarkModeEnabled} onValueChange={toggleMode} />
      <Text style={isDarkModeEnabled ? styles.textDark:styles.textLight}>
        {isDarkModeEnabled ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
      </Text>
      
      <Text style={isDarkModeEnabled ? styles.textDark:styles.textLight}>Hello Profile  page  </Text>
    </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Switch: {
   position : "absolute",
   top: 5,
   right: 5
  
  },

  containerDark: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
   
  },
   textDark:{
    color: "white"
  },
  textLight:{
color: "black"
  }
});
