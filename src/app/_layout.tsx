
import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import theme from "../library/theme/theme";
import { Provider } from "react-redux";
import { store } from "../library/redux/store";





export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "gilroy-black": require("@assets/fonts/Gilroy-Black.ttf"),
    "gilroy-bold": require("@assets/fonts/Gilroy-Bold.ttf"),
    "gilroy-light": require("@assets/fonts/Gilroy-Light.ttf"),
    "gilroy-medium": require("@assets/fonts/Gilroy-Medium.ttf"),
    "gilroy-regular": require("@assets/fonts/Gilroy-Regular.ttf"),
    "gilroy-semibold": require("@assets/fonts/Gilroy-SemiBold.ttf"),
   
  
  });
  if (!fontsLoaded) return <></>;
  return (
    <Provider store={store}>
   <ThemeProvider theme={theme} >
          <Stack
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#FFF",
              },
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              headerShown: false,
              // headerLeft: () => <HeaderLeftButton {...{navigation}} />
            })}
          >
            <Stack.Screen options={{headerShown:false,title:"Login"}} name="index" />
            <Stack.Screen name = "Register"options={{headerShown:false,title:"Register"}}  />
            <Stack.Screen name = "SelectCity"options={{headerShown:false,title:"SelectCity"}}  />

          </Stack>
          </ThemeProvider>
          </Provider>
         
  );
}