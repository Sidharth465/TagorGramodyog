import SWView from "@/src/library/components/SView";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ isFocused }:any) => {
  const fill = isFocused ? "#008DFF" : "#87898a";
  return (
    <Svg viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z"
        fill={fill}
      />
    </Svg>
  );
};


const UserIcon = ({ isFocused }:any) => {
  const fill = isFocused ? "#008DFF" : "#87898a";
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8Z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.66209 14.4043C9.65424 14.9436 10.7913 15.2499 12 15.2499C13.2178 15.2499 14.363 14.9389 15.3605 14.392C17.9279 15.0698 19.3265 16.5297 20.0884 18C21 20 20 22 17.9999 22H5.99993C3.99985 22 2.99998 20 3.94438 18C4.71575 16.5386 6.11695 15.0873 8.66209 14.4043Z"
        fill={fill}
      />
    </Svg>
  );
};


export default function MainLayout() {
  return (
    <Tabs 
    initialRouteName="(stack)"
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle:{fontSize:16,fontFamily:"gilroy-bold",letterSpacing:0.5}
      
     
    }}>
      <Tabs.Screen name="(stack)" options={{title:"Home", tabBarIcon: ({ focused, color, size }) => (
          <SWView height={25} width={25} >
              <HomeIcon isFocused={focused} />
          </SWView>
          ),
          
}} />
      <Tabs.Screen name="profile/index"  options={{title:"Profile", tabBarIcon: ({ focused, color, size }) => (
            <UserIcon isFocused={focused} />
          ),}} />
    </Tabs>
  );
}
