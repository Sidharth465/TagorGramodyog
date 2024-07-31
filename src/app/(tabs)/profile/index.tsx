import React from "react";
import SWView from "@/src/library/components/SView";
import { Image, Pressable } from "react-native";
import Text from "@/src/library/components/SVText";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import theme from "@/src/library/theme/theme";
import { GlobeSvg, LockSvg, Logout, NotificationSvg } from "@/src/utils/Svgs";
import { router } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/src/library/redux/hooks";
import { setOtpVisible, updateLoginCredentials } from "@/src/library/redux/slices/appSlice";


export function Linktile({ title, type }: any) {
  const dispatch = useAppDispatch()
  
  function handlePress (){
   
    
    if(type ==4 ){
      dispatch(updateLoginCredentials({mobile_number:"8744098062",role:"admin",otp:""}))
       console.log("pressed");
dispatch(setOtpVisible(false))
       router.replace("/")
       router.dismissAll()
     
    }
  }
  return (
    <Pressable onPress={()=>handlePress()}>
      <SWView
       backgroundColor="link_tile_bg" 
       marginVertical="sss"
       paddingVertical="ms"
      >
        <SWView
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent="space-between"
          paddingHorizontal="m"
        >
        <SWView flexDirection="row" alignItems="center" gap="m">
        {type == 1 ? <NotificationSvg /> :type == 2 ?<GlobeSvg fill="#000" />:type == 3 ?<LockSvg/> :<Logout />}
          <Text
            opacity={0.9}
            fontSize={theme?.textVariants?.h3?.fontSize?.phone}
            fontFamily={theme?.textVariants?.h3_medium?.fontFamily}
            color={"text_on_surface"}
          >
            {title}
          </Text>
        </SWView>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </SWView>
      </SWView>
    </Pressable>
  );
}

const Profile = () => {
  const {roleBaseLogin} = useAppSelector((state)=>state.appSlice)
  return (
    <SWView
      flex={1}
      backgroundColor="background"
      flexDirection="column"
      paddingVertical="l"
    >
      <SWView flexDirection="row" alignItems="center" marginTop="xl" paddingHorizontal="l">
        <Image resizeMode="contain" height={111} width={111} source={require("@assets/pics/user.png")} />
        <SWView
          flex={1}
          flexDirection="column"
          
        >
         <SWView  justifyContent="center"
          alignItems="center">
         <Text fontFamily="gilroy-bold" fontSize={25}>
            Manoj Kumar
          </Text>
          <Text fontFamily="gilroy-medium" fontSize={16}>
        {roleBaseLogin?.mobile_number}
          </Text>
         </SWView>
         <SWView flex={1} alignItems="flex-end" justifyContent="flex-end"  paddingRight="ll" paddingBottom="ll">
         <MaterialCommunityIcons name="pencil" size={24} color="black" />
         </SWView>
        </SWView>
      </SWView>
      <SWView paddingHorizontal="l" flexDirection="column" marginTop="xl">
        <Text fontSize={18} fontFamily="gilroy-bold">
          Location:{"\n"}
          <Text fontSize={16} fontFamily="gilroy-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum rerum labore enim aperiam tenetur! Repellat
          </Text>
        </Text>
      </SWView>

      <SWView marginBottom="xl" flex={1} justifyContent="flex-end">
        <Linktile
          title="Check Notifications"
          type= "1"
        />
        <Linktile
          title="Change Language"
          type= "2"
        />
        <Linktile
          title="Read our privacy policy"
          type= "3"
        />
        <Linktile
          title="Logout"
          type= "4"
        />
      </SWView>
    </SWView>
  );
};

export default Profile;
