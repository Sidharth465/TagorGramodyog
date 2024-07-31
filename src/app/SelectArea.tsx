import {  FlatList, Image, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import SVHeader from '../library/components/SVHeader'
import SWView from '../library/components/SView'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../library/components/SVText'
import { statesData } from '../utils/data'
import { useAppDispatch, useAppSelector } from '../library/redux/hooks'
import { updateCity } from '../library/redux/slices/appSlice'
import theme from '../library/theme/theme'
import palette from '../library/theme/palette'

const SelectArea = () => {
  const dispatch =  useAppDispatch()
  const { selectedCity} = useAppSelector((state)=>state?.appSlice)
  const [area,setArea] = useState("")


  const handlePress = (city:string) => {
    console.log("Tapped city:", city);
    dispatch(updateCity(city)); // Assuming you want to dispatch an action
    router?.push("/(tabs)/(stack)")
  };
  

  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme?.colors?.background }} >
    <SVHeader
       surface="secondary"
       title="Select Area"
       
     visibleButton
     />
     <SWView  alignItems="center"  marginTop="m">
            <TextInput
              value={area}
              onChangeText={(text) => setArea(text)}
              placeholder="Search Area"
              style={{
                backgroundColor: palette?.spring_wood,
                height: 45,
                width: 350,
                paddingLeft: 15,
                borderRadius: 5,
                elevation: 5,
                fontSize:18,
                fontFamily:"gilroy-medium"
              }}
            />
          </SWView>
     <SWView  paddingTop="l" justifyContent="center" >
       <FlatList
         data={statesData[selectedCity]?.filter((item:any)=>item?.toLowerCase().includes(area?.toLowerCase()))||[]}
         renderItem={({ item, index }) => (
          <Pressable  key={item?.id} onPress={()=>handlePress(item)} style={{marginHorizontal:18,marginBottom:10,borderRadius:10}} >
            <SWView
            elevation={5}
             justifyContent="center"
             alignItems="center"
             backgroundColor="list_background"
             borderRadius="s"
             height={55}
             marginHorizontal='m'
             // marginBottom="s"
           >
             <Text fontFamily="gilroy-bold"  fontSize={18}>{item}</Text>
           </SWView>
          </Pressable>
         )}
       />

     </SWView>
    <SWView marginTop="l"  justifyContent="center" alignItems="center" >
    <Image  height={500} width={500} resizeMode="cover" source={require("@assets/images/opacive_logo.png")} />
    </SWView>
     
   </SafeAreaView>
  )
}

export default SelectArea


