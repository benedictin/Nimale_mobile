import React from 'react'
import { View,Image,TextInput,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <StatusBar/>
        <View className="">
          <Image className="object-cover h-48 w-full" source={require('../assets/medical-banner-with-doctor-wearing-goggles.jpg')}/>
        </View>
        <View className="">
          <View className="mt-5 p-2 flex items-center ">
            <View className="flex flex-row space-x-8">
              <TouchableOpacity onPress={()=> navigation.navigate('service')}>
                <Card className="w-40 h-36">
                  <Card.Content className='my-5 flex items-center justify-center'>
                    <MaterialIcons name="medical-services" size={40} color="#ab39d7" />  
                    <Text variant="titleLarge">Nos Services</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card className="w-40 h-36">
                  <Card.Content className='my-5 flex items-center justify-center'>
                    <AntDesign name="calendar" size={40} color="#ab39d7" />
                    <Text variant="titleLarge"><Text className="text-center">Prendre</Text> rendez-vous</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row space-x-8 mt-3">
              <TouchableOpacity>
                <Card className="w-40 h-36">
                  <Card.Content className='my-5 flex items-center justify-center'>
                    <Entypo name="folder" size={40} color="#ab39d7" />
                      <Text variant="titleLarge">Departement</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card className="w-40 h-36">
                  <Card.Content className='my-5 flex items-center justify-center'>
                    <Feather name="map-pin" size={40} color="#ab39d7" />
                    <Text variant="titleLarge">Emplacement</Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>     
  )
}


