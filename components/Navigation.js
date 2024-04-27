import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
//import SignupScreen from '../screens/SignupScreen';
import WelcomScreen from '../screens/WelcomScreen';
import HomeScreen from '../screens/HomeScreen';
import FaqScreen from '../screens/FaqScreen';
import Drawer from '../routes/DrawerNav';
import ServicesScreen from '../screens/ServicesScreen';
import DrawerNavigation from '../routes/DrawerNavigation';

//import { AntDesign } from '@expo/vector-icons';
import DrawerNav from '../routes/DrawerNav';
//import { selectIsLoggedIn } from '../redux/auth/authSlice';
//import { useSelector } from 'react-redux';
const Stack = createStackNavigator();
export default function Navigation() {
//const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcom"
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerNav} />
        <Stack.Screen name="Welcom" component={WelcomScreen} />
        <Stack.Screen name="service" component={DrawerNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
