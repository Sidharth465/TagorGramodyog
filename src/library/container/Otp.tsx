import { LinearGradient } from "expo-linear-gradient";
import { router, usePathname } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import Animated, { Easing, SlideInRight, } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SVButton from "../components/SVButton";
import SWView from "../components/SView";
import Text from "../components/SVText";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setOtpVisible } from "../redux/slices/appSlice";
import palette from "../theme/palette";
import theme from "../theme/theme";
import Toast from "react-native-toast-message";
import { FontAwesome } from "@expo/vector-icons";

export default function Otp() {
  const dispatch = useAppDispatch()
  const [otp, setOtp] = useState("");
  const pathname = usePathname()
  const {roleBaseLogin} =  useAppSelector((state)=>state.appSlice)
  // console.log("at OTP screen Credentials",roleBaseLogin);
  function resendOtp(){
    Toast.show({type:"success",text1:`OTP ${roleBaseLogin?.otp}`,text2:"please fill the otp to login !",visibilityTime:6000})
  }
  function handleOtpSubmit (){
    if(otp == roleBaseLogin?.otp){
      router?.push("/SelectCity")
    }else{
      Toast.show({type:"error",text1:"Wrong OTP",text2:"Please fill correct otp !"})
      setOtp("")
    }
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Animated.View
        entering={SlideInRight.easing(Easing.ease).duration(300)}
        
        style={{ flex: 1, paddingHorizontal: 20 }}
      >
        <SWView justifyContent="center" alignItems="center" marginTop="m">
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
              height: 190,
              width: "100%",
              borderRadius: theme?.spacing?.s,
            }}
            colors={[palette?.light_green, palette?.light_green_shade1]}
          >
            <SWView flex={1} flexDirection="column" padding="ms">
              <SWView flexDirection="row" justifyContent="space-between">
                <SWView flexDirection="column">
                 <SWView gap="s" flexDirection="row" alignItems="center">
                 <Text opacity={0.8} fontFamily="gilroy-bold" fontSize={20}>
                    Enter OTP
                  </Text>
                 <Pressable onPress={resendOtp}>
                 <FontAwesome name="refresh" size={18} color={theme?.colors?.text_with_opacity} />
                 </Pressable>
                 </SWView>
                  <Text opacity={0.6} fontFamily="gilroy-medium" fontSize={12}>
                    OTP has been sent
                  </Text>
                 
                </SWView>
                <Pressable onPress={() => dispatch(setOtpVisible(false))}>

                  <Text
                  opacity={0.6}
                    fontWeight={"500"}
                    fontSize={15}
                    textDecorationLine="underline"
                  >
                    Edit Mobile
                  </Text>
                </Pressable>
              </SWView>
              <SWView marginTop="m">
                <SWView
                  flexDirection={"row"}
                  justifyContent={"flex-start"}
                  paddingHorizontal="m"
                  // marginTop={"l"}
                >
                  <OtpInput
                    numberOfDigits={4}
                    onTextChange={(text) => setOtp(text)}
                    theme={{
                      pinCodeContainerStyle: {
                        backgroundColor: "white",
                        borderRadius: 5,
                        height: 50,
                      },
                    }}
                  />
                </SWView>
              </SWView>
              <SWView marginTop="m"  justifyContent="center" alignItems="center">
              <SVButton
              disabled = {otp?.length !== 4}
                height={31}
                paddingHorizontal="l"
                surface="background"
                title="Submit"
                        onPress={()=>handleOtpSubmit()}
              />
            </SWView>
            </SWView>
           

          
          </LinearGradient>
        </SWView>
      </Animated.View>
    </SafeAreaView>
  );
}
