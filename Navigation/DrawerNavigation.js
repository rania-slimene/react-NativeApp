import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../page/Home'
import  Profile  from '../page/Profile';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} /> 
    </Drawer.Navigator>
  );
}

export default DrawerNavigator