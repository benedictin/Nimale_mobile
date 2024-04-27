import React from 'react'
import HomeStackScreen  from './HomeStacknav'
import SettingsScreen from '../screens/SettingsScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNav =({navigation})=>{
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name ==='HomeTab'){
                    iconName = 'home';
                    size = focused ? 30 : 20;
                   // color = focused ? "rebeccapurple" : "grey";
                } else if(route.name === 'Settings'){
                    iconName ="settings";
                    size = focused ? 30 : 20;
                    //color = focused ? "rebeccapurple" : "grey";
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}
        tabBarOptions={{
            activeTintColor:"#ab39d7",
            inactiveTintColor:"grey"
        } }
        >
            <Tab.Screen name='HomeTab' component={HomeStackScreen} options={{headerLeft:()=> (<Entypo name="menu" size={24} color="black"  onPress={()=>navigation.openDrawer()}/>), title:'Tableau de Bord',headerTitleStyle:{color:'#ab39d7'}}} />
            <Tab.Screen name='Settings' component={SettingsScreen} options={{headerLeft:()=> (<Entypo name="menu" size={24} color="black"  onPress={()=>navigation.openDrawer()}/>)}} />
        </Tab.Navigator>
    )
}

export default BottomTabNav;