import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Pressable } from "react-native";
import SVHeader from "../library/components/SVHeader";
import SWView from "../library/components/SView";
import Text from "../library/components/SVText";

import { useAppDispatch } from "../library/redux/hooks";
import { updateCity } from "../library/redux/slices/appSlice";
import { router } from "expo-router";

const SelectCity = () => {
  const dispatch = useAppDispatch()
  const data = [
    { id: 0, city: "Delhi" },
    { id: 1, city: "Meerut" },
    { id: 2, city: "Moradabad" },
  ];
  const handlePress = (city:string) => {
    console.log("Tapped city:", city);
    dispatch(updateCity(city)); // Assuming you want to dispatch an action
router?.push("/(tabs)/(stack)")
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#FFFF" }} >
     <SVHeader
        surface="secondary"
        title="Projects"
        subtitle="Select a city/project"
      />
     
      <SWView  paddingTop="xl" justifyContent="center" >
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
           <Pressable  key={item?.id} onPress={()=>handlePress(item?.city)} style={{marginHorizontal:18,marginBottom:10,borderRadius:10}} >
             <SWView
              // marginHorizontal="m"
              justifyContent="center"
              alignItems="center"
              backgroundColor="list_background"
              borderRadius="s"
              height={55}
              // marginBottom="s"
            >
              <Text fontFamily="gilroy-bold"  fontSize={18}>{item?.city}</Text>
            </SWView>
           </Pressable>
          )}
        />

      </SWView>
     <SWView marginTop="l"  justifyContent="center" alignItems="center" >
     <Image   height={500} width={500} resizeMode="cover" source={require("@assets/images/opacive_logo.png")} />
     </SWView>
      
    </SafeAreaView>
  );
};

export default SelectCity;
