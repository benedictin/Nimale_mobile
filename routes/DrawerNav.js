import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNav from './BottomTabNav';
import CustomDrawerContent from '../components/CustomDrawerContent';
import SettingsStackScreen from '../routes/SettingStacknav';
import ServicesScreen from '../screens/ServicesScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () =>{
    return(
        <Drawer.Navigator
        drawerContent={props=> <CustomDrawerContent {...props}/>}
        screenOptions={{headerShown:false}}
      >
        <Drawer.Screen 
          name="HomeDrawerNav"
          component={BottomTabNav} 
          options={{
            title:"Tableau de bord",
          }}
          />
        <Drawer.Screen name= "Setting"component={SettingsStackScreen}/>
      </Drawer.Navigator>
    )
}
export default DrawerNav;