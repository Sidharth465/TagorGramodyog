import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, Pressable } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SWView from "../components/SView";
import Text from "../components/SVText";
import palette from "../theme/palette";
import theme from "../theme/theme";
import { OtpInput } from "react-native-otp-entry";
import SVButton from "../components/SVButton";
import { router, usePathname } from "expo-router";

export default function Otp({ setOtpVisible }: any) {
  const [otp, setOtp] = useState("");
  const pathname = usePathname()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Animated.View
        entering={SlideInRight}
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
              height: 181,
              width: "100%",
              borderRadius: theme?.spacing?.s,
            }}
            colors={[palette?.light_green, palette?.light_green_shade1]}
          >
            <SWView flex={1} flexDirection="column" padding="ms">
              <SWView flexDirection="row" justifyContent="space-between">
                <SWView>
                  <Text opacity={0.8} fontFamily="gilroy-bold" fontSize={20}>
                    Enter OTP
                  </Text>
                  <Text opacity={0.6} fontFamily="gilroy-medium" fontSize={12}>
                    OTP has been sent
                  </Text>
                </SWView>
                <Pressable onPress={() => setOtpVisible(false)}>

                  <Text
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
                        onPress={()=>router?.push("/SelectCity")}
              />
            </SWView>
            </SWView>
           

          
          </LinearGradient>
        </SWView>
      </Animated.View>
    </SafeAreaView>
  );
}