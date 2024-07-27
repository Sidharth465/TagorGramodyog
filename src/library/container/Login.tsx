import React, { useState } from "react";
import SWView from "../components/SView";
import { Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../theme/theme";
import palette from "../theme/palette";
import Text from "../components/SVText";
import SVButton from "../components/SVButton";
import { FacebookSvg, InstagramSvg, LinkedInSvg, TwitterSvg } from "@/src/utils/Svgs";
import { Link } from "expo-router";
import Animated, { SlideInLeft } from "react-native-reanimated";

export default function Login({setOtpVisible}:any) {
    const [mobileNumber,setMobileNumber] = useState("")

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        < Animated.View style={{ flex: 1 }} entering={SlideInLeft}>
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
                placeholder="Mobile no"
              />
            </SWView>
            <SWView marginTop="m"  justifyContent="center" alignItems="center">
              <SVButton
              disabled = {mobileNumber?.length !== 10}
                height={31}
                paddingHorizontal="l"
                surface="background"
                title="Next"
                onPress={()=>setOtpVisible(true)}
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