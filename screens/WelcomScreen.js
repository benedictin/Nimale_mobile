import { styled } from 'nativewind'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View,Image,StyleSheet,ActivityIndicator } from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import LoginScreen from './LoginScreen';
import Spinner from 'react-native-loading-spinner-overlay';

export default function WelcomScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },3000); // 2 secondes
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
          <View >
            <StatusBar style="ligth" />
            <Image className="w-40 h-40 rounded-full mx-auto" source={require('../assets/Logo-Nimale.png')} />
            <Spinner visible ={true} size='large'/>
          </View>
          ) : (
            <LoginScreen />
        )}
    </View>
    
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  couleur1:{
    color:'#f38a3b'
  },
  couleur2:{
    color:'#217fc1'
  }
})
