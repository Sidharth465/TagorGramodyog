import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Login = () => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text>Login</Text>
      <Button title='Go To Home'  onPress={()=>router.replace("/(stack)")}/>
    </View>
  )
}

export default Login