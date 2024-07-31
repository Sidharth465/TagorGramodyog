import { FacebookSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "@/src/utils/Svgs";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, TextInput } from "react-native";
import Animated, { Easing, SlideInLeft } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SVButton from "../components/SVButton";
import SWView from "../components/SView";
import Text from "../components/SVText";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setOtpVisible, updateLoginCredentials } from "../redux/slices/appSlice";
import palette from "../theme/palette";
import theme from "../theme/theme";
import Toast from "react-native-toast-message";

export default function Login() {
    const [mobileNumber,setMobileNumber] = useState("")
    const dispatch = useAppDispatch()
    const {roleBaseLogin,otpVisible} =  useAppSelector((state)=>state.appSlice)

    // console.log("credential",roleBaseLogin,"otpVisible",otpVisible);
    

    function handleLogin(){
    Toast.show({type:"info",text1:"Running"})
      try {
        // console.log("running");
        
        
         if(roleBaseLogin?.otp?.length ==0 ){
          console.log("sending exist otp");
          let sentOtp = Math.floor(1000 + Math.random() * 9000);
          dispatch(setOtpVisible(true))
           dispatch(updateLoginCredentials({mobile_number:mobileNumber,role:mobileNumber == "8744098062"?"admin":"user",otp:sentOtp}))
           Toast.show({type:"success",text1:`OTP ${sentOtp}`,text2:"please fill the otp to login !",visibilityTime:6000})
         }else{
          console.log("already exist otp");
          
          Toast.show({type:"success",text1:`OTP ${roleBaseLogin?.otp}`,text2:"please fill the otp to login !",visibilityTime:6000})
          dispatch(setOtpVisible(true))
         }
         
          
        
      } catch (error) {
        
      }
    }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        < Animated.View entering={SlideInLeft.easing(Easing.ease).duration(300)} style={{ flex: 1 }} >
      <SWView  justifyContent="center" alignItems="center" marginTop="m">
        <Image
        resizeMode="cover"
          height={155}
          width={155}
          source={require("@assets/images/icon.png")}
        />
      </SWView>

      <SWView margin="m">
        <LinearGradient
          style={{
            height: 181,
            width: "100%",
            borderRadius: theme?.spacing?.s,
          }}
          colors={[palette?.light_green, palette?.light_green_shade1]}
        >
          <SWView flex={1} flexDirection="column" padding="ms" >
            <Text opacity={0.8} fontFamily="gilroy-bold" fontSize={20}>
              Enter Mobile Number
            </Text>
            <Text opacity={0.6} fontFamily="gilroy-medium" fontSize={12}>
              These details are not shared with anyone
            </Text>
            <SWView marginTop="m">
              <TextInput
              value={mobileNumber}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(t)=>setMobileNumber(t)}
                style={{
                  height: 45,
                  width: 298,
                  backgroundColor: palette?.ailment_background,
                  borderRadius: theme?.spacing?.ss,
                  paddingLeft: 20,
                }}
                placeholder=" Enter Mobile "
              />
            </SWView>
            <SWView marginTop="m"  justifyContent="center" alignItems="center">
              <SVButton
              
              disabled = {mobileNumber?.length !== 10}
                height={31}
                paddingHorizontal="l"
                surface="background"
                title="Next"
                onPress={handleLogin}
              />
            </SWView>
          </SWView>
        </LinearGradient>
      </SWView>
      <SWView flexDirection="row" justifyContent="center"><SWView borderBottomWidth={1}  width={150} opacity={0.6}/><Text fontFamily="gilroy-bold" fontSize={20}>or</Text><SWView borderBottomWidth={1} width={150} opacity={0.6}/></SWView>

      <SWView marginTop="ll" justifyContent="center" alignItems="center" flexDirection="column">
        <Text opacity={0.6} fontSize={18} fontFamily="gilroy-medium">Register as a supervisor <Text opacity={1} fontSize={20} fontFamily="gilroy-bold">Register Now</Text></Text>

        <SWView marginTop="xxl" flexDirection="row" justifyContent="space-between" alignItems="center" gap="m">
            <FacebookSvg />
            <InstagramSvg />
            <TwitterSvg />
            <LinkedInSvg />

        </SWView>

      </SWView>

      </Animated.View>
    </SafeAreaView>
  );
}
