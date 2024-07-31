import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Login from '../library/container/Login'
import Otp from '../library/container/Otp'
import { useAppSelector } from '../library/redux/hooks'

const App = () => {
 const { otpVisible} = useAppSelector((state)=>state?.appSlice)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
    {otpVisible ?(<Otp />):(<Login />)}

    </SafeAreaView>
  )
}

export default App;