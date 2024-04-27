import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
const SettingsStack = createNativeStackNavigator();

const SettingsStackScreen =()=>{
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='Ezechiel' component={SettingsScreen}/>
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen;