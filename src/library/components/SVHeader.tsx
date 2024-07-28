
import { Theme } from "@theme";
import { router, useNavigation, usePathname } from "expo-router";
import { Image, Pressable, SafeAreaView } from "react-native";
import SWView from "./SView";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Text from "./SVText";
import palette from "../theme/palette";
type PageHeaderType = {
  surface?: keyof Theme["colors"];
  title?:string,
  subtitle?:string,

  visibleButton?:boolean
};

const SVHeader = ({ surface = "background",visibleButton=false,title="My Complaints",subtitle}: PageHeaderType) => {

  const navigation = useNavigation();
  const pathname = usePathname()

  return (
    <SafeAreaView >
      <SWView
        zIndex={2}
        backgroundColor={"primary"}
        marginTop={"none"}
        shadowOpacity={0}
        shadowOffset={{ height: 3, width: 0 }}
        borderBottomRightRadius="m"
        borderBottomLeftRadius="m"
        paddingHorizontal="ss"
        paddingTop={visibleButton?"s":"ll"}
        paddingVertical={"s"}
       
      >
        <SWView 
       
          flexDirection={"row"}
          alignItems="center"
          borderBottomColor={"header_shadow"}
          justifyContent="space-between"
         
        >
          {visibleButton && 
           router?.canGoBack() && pathname!=='/Home' && (
            <SWView >
              <Pressable
                onPress={() =>
                  router.canGoBack() ? router.back() : router.replace("/")
                }
              >
                <SWView borderRadius="l" backgroundColor="background" alignItems="center" height= {47} width={47} justifyContent="center">
                <FontAwesome5 name="arrow-left" size={24} color={palette?.bw_green} />
                  
                </SWView>
              </Pressable>
            </SWView>
          )}
         <SWView  marginRight={visibleButton ?"ll":"none"} justifyContent="center"  >
         <Text  fontSize={20}  paddingLeft={visibleButton ?"none":"ms"} fontFamily="gilroy-bold">{title}</Text>
         {!visibleButton && <Text paddingLeft="ms" opacity={0.6} fontSize={12} fontFamily="gilroy-medium" >{subtitle}</Text> }
            </SWView>
         
          
         
          <SWView flexDirection={"row"}>
          
          </SWView>
        </SWView>
      </SWView>
    </SafeAreaView>
  );
};

export default SVHeader;