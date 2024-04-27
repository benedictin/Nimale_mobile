


import React, {createContext, useState} from 'react'
import { apiSignIn } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [userInfo, setUserInfo]=useState({})
    const [isLoading, setIsLoading] = useState(false)
    const login = (username,password) => {
        setIsLoading(true)
        apiSignIn({username, password})
            .then(res => {
                let userInfo = res.data;
                let decode = jwtDecode(userInfo.token);
                console.log(decode)
                console.log(userInfo)                
                setUserInfo(userInfo)
                AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
                setIsLoading(false)
            })
            .catch(e => {
                console.log(`login error ${JSON.stringify(e)}` )
                setIsLoading(false)
            })
    }
   return  <AuthContext.Provider value ={{login, isLoading, userInfo}}>{children}</AuthContext.Provider>
}
