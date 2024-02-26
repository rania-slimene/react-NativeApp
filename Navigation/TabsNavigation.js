import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconButton} from'react-native-paper'
// import ProfileNavigation from './ProfileNavigation'
import Profile from '../page/Profile'
import Home from '../page/Home'
import CardsNavigation from './CardsNavigation'
 export default function App() {
const Tab = createBottomTabNavigator();
  return (

 <Tab.Navigator>
  <Tab.Screen name="Home " component={Home} options={{
   tabBarIcon: ({ focused, color, size }) => {
   const iconColor = focused ? 'red' : color ;
   const iconSize = focused ? 30 : size ;
      return  <Icon name='home' size={iconSize} color={iconColor} />;
    
  },

    title: " " ,
    headerShown: false,
    headerTitleStyle: { fontSize: 20, top:0 },
   
  //  headerLeft: () => (
  //    <IconButton
  //      Icon="menu" 
  //      onPress={() => navigation.openDrawer()} 
  //      size={30} 
  //      style={{ marginLeft: -20 }} 
  //    />
  //  )
   }} />
  <Tab.Screen name="Profile Navigation" component={Profile} options={{ 
    tabBarIcon : ({focused, color,size})=>{
        const iconColor = focused ?'red' : color;
        const iconSize = focused ? 30 : size;
        return <Icon name='user' color={iconColor} size={iconSize}/>
    },
    
    HeaderShown:false , title: ""}} />
  <Tab.Screen name="Cards Navigation" component={CardsNavigation} options={{  
     tabBarIcon :({focused, color, size})=>{
           const iconColor = focused ? 'red': color ;
           const iconSize = focused ? 30: size ; 

    return <Icon  name ='shopping-cart'  color= {iconColor} size={iconSize} />
  }
  
 , HeaderShown:false , title: "" }} />
</Tab.Navigator> 

    


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
