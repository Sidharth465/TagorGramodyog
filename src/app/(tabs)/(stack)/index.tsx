import LogoHeader from "@/src/library/components/LogoHeader";
import SWView from "@/src/library/components/SView";
import Text from "@/src/library/components/SVText";
import palette from "@/src/library/theme/palette";
import {
  FeedbackSvg,
  LocationSvg,
  SiteSvg,
  TableReportSvg,
} from "@/src/utils/Svgs";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
} from "react-native";



const Home = () => {
  const data = [
    {
      icon: <TableReportSvg />,
      title: "My Complaints",
      desc: "We are commited to recieving your complaints",
    },
    { icon: <SiteSvg />, title: "Sites", desc: "Check our latest work" },
    {
      icon: <LocationSvg />,
      title: "Track Supervisor",
      desc: "Track supervisor’s locations",
    },
    { icon: <FeedbackSvg />, title: "Provide Feedback", desc: "Scan QR code" },
  ];


 


  function handlePress(title:string){
    if(title == "My Complaints"){
      console.log("My Complaints")
      router.push("/mycomplaints")
    }else if(title == "Sites"){
      console.log("Sites")
      router.push("/sites")

    } 
    else if(title == "Track Supervisor"){
      console.log("Track Supervisor")
      router.push("/trackSupervisor")

    }else if(title == "Provide Feedback"){
      console.log("Provide Feedback")
      router.push("/feedback")
    }else {
      return;
    }


  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:palette?.chip_box  }}>
   
      <LogoHeader title="Maintained by Tagore Gramodyog Vikas Samiti" />

      <SWView flex={1} justifyContent="center" alignItems="center">
        <Image
          resizeMode="cover"
          height={500}
          width={500}
          source={require("@assets/images/opacive_logo.png")}
        />

        <SWView
          position="absolute"
          top={"20%"}
          justifyContent="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          {data.map((item, index) => (
            <Pressable key={item?.title} style={{ margin: 10 }} onPress={()=>handlePress(item?.title)}>
              <LinearGradient
                style={{
                  height: 120,
                  width: 158,
                  borderRadius: 10,
                }}
                colors={[
                  index == 0 || index == 3 ? "#00C696" : "#FFD480",
                  index == 0 || index == 3 ? "#F0FF91" : "#FF8E8E",
                ]}
                start={[0, 0]}
                end={[1, 1]}
              >
                <SWView
                  flex={1}
                  borderRadius="s"
                  flexDirection="column"
                  padding="ss"
                  gap="m"
                >
                  {item?.icon}
                  <SWView>
                    <Text fontSize={18} fontFamily="gilroy-bold">
                      {item?.title}
                    </Text>
                    <Text fontSize={10} fontFamily="gilroy-medium">
                      {item?.desc}
                    </Text>
                  </SWView>
                </SWView>
              </LinearGradient>
            </Pressable>
          ))}
        </SWView>
      </SWView>
    </SafeAreaView>
  );
};

export default Home;
