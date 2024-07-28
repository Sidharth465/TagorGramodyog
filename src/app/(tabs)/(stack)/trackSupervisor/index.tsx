import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SVHeader from "@/src/library/components/SVHeader";
import SWView from "@/src/library/components/SView";
import { FlatList, Image, TextInput } from "react-native";
import palette from "@/src/library/theme/palette";
import Text from "@/src/library/components/SVText";

const TrackSupervisor = () => {
  const [name, setName] = useState("");

  const supervisorData = [
    {
      name: "Manoj",
      status: "AVAILABLE",
      contact: "+9173x862x959",
    },
    {
      name: "Aarti",
      status: "UNAVAILABLE",
      contact: "+9174y963y860",
    },
    {
      name: "Ravi",
      status: "AVAILABLE",
      contact: "+9175z964z861",
    },
    {
      name: "Sneha",
      status: "ON LEAVE",
      contact: "+9176w965w862",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette?.chip_box }}>
      <SVHeader visibleButton title="Track Supervisor" />

      <SWView flex={1} justifyContent="center" alignItems="center">
        <Image
          resizeMode="cover"
          height={500}
          width={500}
          source={require("@assets/images/opacive_logo.png")}
        />
        <SWView position="absolute" top={0}>
          {/* search bar */}
          <SWView marginTop="m">
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Search Name"
              style={{
                backgroundColor: "#ffff",
                height: 45,
                width: 350,
                paddingLeft: 15,
                borderRadius: 5,
                elevation: 5,
              }}
            />
          </SWView>

          <SWView marginTop="l" justifyContent="center" alignItems="center">
            <FlatList
              data={
                supervisorData?.filter((item) => item?.name?.includes(name)) ||
                supervisorData
              }
              renderItem={({ item, index }) => (
                <SWView
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  marginVertical="s"
                  backgroundColor="background"
                  height={59}
                  width={350}
                  borderRadius="s"
                  paddingHorizontal="m"
                >
                  <SWView>
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      {item?.name}
                    </Text>
                    <Text fontFamily="gilroy-medium" fontSize={15}>
                      {item?.contact}
                    </Text>
                  </SWView>
                  <Text  fontSize={17} fontFamily="gilroy-bold" color={item?.status?.toLowerCase() == "available"?"primary":item?.status?.toLowerCase() == "unavailable" ?"errorRed":"secondary_light" }>{item?.status}</Text>
                </SWView>
              )}
            />
          </SWView>
        </SWView>
      </SWView>
    </SafeAreaView>
  );
};

export default TrackSupervisor;
