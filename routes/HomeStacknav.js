import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen'
import { Image, View } from 'react-native';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen =({navigation})=>{
    return(
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name='HomeStack' component={HomeScreen} options={{
                title:"Acceuil"
            }} />
            <HomeStack.Screen name='Settings' component={SettingsScreen} options={{
                title:"Parametre"
            }} />
            
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;