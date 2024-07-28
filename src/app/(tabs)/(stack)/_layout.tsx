import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
<Stack
initialRouteName='index'
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#FFF",
              },
              headerShadowVisible: true,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              headerShown: false,
              // headerLeft: () => <HeaderLeftButton {...{navigation}} />
            })}
          >
            <Stack.Screen name="index"  options={{headerShown:false,}} />
            <Stack.Screen name = "feedback/index"options={{headerShown:false,}}   />
            <Stack.Screen name = "mycomplaints/index"options={{headerShown:false,}}   />
            <Stack.Screen name = "sites/index"options={{headerShown:false,}}   />
            <Stack.Screen name = "trackSupervisor/index"options={{headerShown:false,}}   />

          </Stack>
  )
}

export default _layout