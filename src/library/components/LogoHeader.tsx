
import { Theme } from "@theme";
import { useNavigation, usePathname } from "expo-router";
import { Image, SafeAreaView } from "react-native";
import SWView from "./SView";
import Text from "./SVText";
type PageHeaderType = {
  surface?: keyof Theme["colors"];
  title?:string,
  subtitle?:string,

  visibleButton?:boolean
};

const LogoHeader = ({ surface = "background",title}: PageHeaderType) => {

  

  return (
   
        <SWView flexDirection="row" backgroundColor="primary" height={75} borderBottomLeftRadius="ms" borderBottomRightRadius="ms" paddingHorizontal="s"> 
            <SWView  justifyContent="center" alignItems="center" borderRadius="s">
            <Image resizeMode="contain" height={56} width={56} source={require("@assets/images/headerLogo.png")}/>
            </SWView>
            <SWView flex={1} justifyContent="center" alignItems="center">
                <Text opacity={0.9} paddingRight="ll" fontFamily="gilroy-medium" color="background" fontSize={18} textAlign="center">Maintained by Tagore{"\n"} Gramdhyog Vikas Samiti</Text>
            </SWView>
            

        </SWView>
  

  );
};

export default LogoHeader;