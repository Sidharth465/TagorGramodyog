import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import SWView from '../library/components/SView'
import Login from '../library/container/Login'
import Otp from '../library/container/Otp'

const App = () => {
  const [otpVisible,setOtpVisible] = useState(false)
  return (
    <SWView flex={1} backgroundColor="background">
    {otpVisible ?(<Otp setOtpVisible= {setOtpVisible}/>):(<Login setOtpVisible= {setOtpVisible}/>)}

    </SWView>
  )
}

export default App;