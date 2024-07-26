import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ isFocused }) => {
  const fill = isFocused ? "#29333B" : "#87898a";
  return (
    <Ionicons name="home" size={24} color={fill} />
  );
};


const UserIcon = ({ isFocused }) => {
  const fill = isFocused ? "#29333B" : "#87898a";
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
    screenOptions={{
      headerShown: false,
     
    }}>
      <Tabs.Screen name="(stack)/index" options={{title:"Home", tabBarIcon: ({ focused, color, size }) => (
            <HomeIcon isFocused={focused} />
          ),
          
}} />
      <Tabs.Screen name="profile/index"  options={{title:"Profile", tabBarIcon: ({ focused, color, size }) => (
            <UserIcon isFocused={focused} />
          ),}} />
    </Tabs>
  );
}