import React, { useState,useContext,useLayoutEffect} from 'react'
import { Text, View,Image,TextInput,Button,StyleSheet,TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  //const dispatch = useDispatch();
  const [email, setEmail] = useState('paulngandasmith@gmail.com');
  const [password, setPassword] = useState('azerty');
 
  const navigation = useNavigation();

  
  return (
    <View className ="">
      <Text>Inscription</Text>
      <View className ="mt-5">
        <View>
          <Text className="ml-5">Identifiant ou adresse e-mail</Text>
          <TextInput
            placeholder='Identifiant ou adresse e-mail'
            placeholderTextColor={'gray'} 
            className="border border-gray-400 rounded-md p-3 m-5 w-80"
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View>
          <Text className="ml-5">Mot de passe</Text>
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor={'gray'}
            className="border border-gray-400 rounded-md p-3 m-5 w-80"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            />       
          </View>
          
        </View>
        <View className="ml-5">
          <Text>Vous n'avez pas de compte ?</Text>
          <TouchableOpacity>
            <Text className="mt-1" style={styles.customerText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>

       
       <View style={styles.customerColor}  className ="rounded p-1 m-5 w-80">
        <Button
          title="Se connecter"
          //onPress={()=> navigation.navigate('Home')}
          //onPress={handleSave}
          color= "white"
          
        />
      </View>
       
    </View>
  )
  
}
const styles = StyleSheet.create({
    customerColor: {
      backgroundColor: '#ab39d7',
    },
    customerText:{
      color:'#ab39d7',
    }
    
  })
