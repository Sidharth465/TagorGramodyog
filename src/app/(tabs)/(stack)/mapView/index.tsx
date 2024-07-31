import SWView from '@/src/library/components/SView';
import { DirectionSvg, DottedSvg } from '@/src/utils/Svgs';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, View ,Image} from 'react-native';



export default function Mapview() {
   
  return (
    <SafeAreaView style={styles.container}>

       <SWView flex={1} justifyContent='center' alignItems='center' zIndex={99} left={15} top={65} position='absolute' borderRadius='xxl' height={50} width={50} backgroundColor={"surface_dark_shade_1"}>
       <Pressable onPress={()=>router.back()
       }>
        <Ionicons name="arrow-back" size={30} color="#FFFF" />
       </Pressable>
        </SWView>
        <Image  style={{height:"100%",width:"100%"}}  resizeMode='cover' source={require("@assets/pics/map.png")}/>
          <SWView position='absolute' top={400} left={225} zIndex={99}>
            <DirectionSvg />
          </SWView>
          <SWView position='absolute' top={245} right={145} zIndex={99}>
            <DottedSvg />
          </SWView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
