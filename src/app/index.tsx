import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Login from '../library/container/Login'
import Otp from '../library/container/Otp'

const App = () => {
  const [otpVisible,setOtpVisible] = useState(false)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
    {otpVisible ?(<Otp setOtpVisible= {setOtpVisible}/>):(<Login setOtpVisible= {setOtpVisible}/>)}

    </SafeAreaView>
  )
}

export default App;