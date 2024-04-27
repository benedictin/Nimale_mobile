import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServicesScreen from '../screens/ServicesScreen';

const HomeStack = createNativeStackNavigator();

const DrawerNavigation = () =>{
    return(
      <HomeStack.Navigator>
      <HomeStack.Screen name='services' component={ServicesScreen} options={{
        title:"Nos services"
      }} />
      
      </HomeStack.Navigator>
    )
}
export default DrawerNavigation;