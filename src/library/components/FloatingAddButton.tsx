import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AddFloatingSvg } from '@/src/utils/Svgs'

const FloatingAddButton = ({right=0,bottom=0,onPress}:any) => {
  return (
   <Pressable onPress={onPress} style={{position:"absolute", right:right,bottom:bottom}}>
    <AddFloatingSvg />
   </Pressable>
  )
}

export default FloatingAddButton