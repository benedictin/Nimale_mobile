import React,{useLayoutEffect,useState} from 'react'
import { View ,StyleSheet} from 'react-native'
import{DrawerContentScrollView} from '@react-navigation/drawer';
import {Text,Avatar,Title,Drawer,} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const [name,setName] = useState('')
    const load = async () =>{
        try {
          let name = await AsyncStorage.getItem('Name');
          if(name !== null){
            setName(name)
          }
        } catch (error) {
          alert(error)
        }
      }
      useLayoutEffect(()=>{
        load()
      },[])
    const navigation = useNavigation();
    const remove = async() =>{
        try {
            await AsyncStorage.removeItem('Name')
            navigation.navigate('Login')
        } catch (error) {
            alert(error)
        }
    }
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContentContainer}>
                    <View className="px-5">
                        <View className="mt-7">
                            <Avatar.Image
                                source={require('../assets/punga.jpg')}
                                size={90}
                            />
                            <View className="mt-6 justify-center ">
                                <Title className="font-bold">{name}</Title>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section/>
                </View>
                <Drawer.Section showDivider={false}>
                    <Drawer.Item
                        label='Tableau de Bord'
                        icon={()=><AntDesign name="dashboard" size={20} color="black" />}
                        onPress={() => {
                            props.navigation.navigate("HomeStack");
                        }}
                    />
                </Drawer.Section >
                <Drawer.Section showDivider={false}>
                    <Drawer.Item
                        label='Paramètre de confidentialité'
                        icon={()=><Feather name="settings" size={24} color="black" />}
                        onPress={() => {
                            props.navigation.navigate("Settings");
                        }}
                    />
                </Drawer.Section>
            
            </DrawerContentScrollView>
            <Drawer.Section showDivider={false} style={styles.logOutSection}>
            <Drawer.Item
                label='Déconnexion'
                icon={()=><MaterialIcons name="logout" size={24} color="black" />}
                onPress={remove}
            />
            </Drawer.Section>
        </View>
    )
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container:{flex:1},
    drawerContentContainer:{flex:1},
    logOutSection:{
        marginBottom:15,
        borderTopWidth:0.5,
        borderTopColor:'#ccc'
    }
})