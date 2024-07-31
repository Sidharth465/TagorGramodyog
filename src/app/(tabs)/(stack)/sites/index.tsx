import FloatingAddButton from "@/src/library/components/FloatingAddButton";
import SVHeader from "@/src/library/components/SVHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import SWView from "@/src/library/components/SView";
import Text from "@/src/library/components/SVText";
import Backdrop from "@/src/library/container/Backdrop";
import UploadImageComplaints from "@/src/library/container/UploadImageComplaints";
import { useAppSelector } from "@/src/library/redux/hooks";
import palette from "@/src/library/theme/palette";
import React, { useState } from "react";
import { Image,  StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const Sites = () => {
  const [value, setValue] = useState(null);
  const [showFillForm, setShowFillForm] = useState(false);

  const {imageComplaints} = useAppSelector((state)=>state?.complaintsSlice)
  const {roleBaseLogin} = useAppSelector((state)=>state.appSlice)
  const {complaints} = useAppSelector((state)=>state.complaintsSlice)


  

  function onClose() {
    setShowFillForm(false);
  }
  function onOpen() {
    setShowFillForm(true);
  }

  
   const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette?.white }}>
      <SVHeader visibleButton title="Sites" />
      <SWView>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={complaints?.map((item) => ({
            label: item?.location,
            value: item?.location,
          }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select "
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            setValue(item?.value);
          }}
          renderItem={renderItem}
        />
      </SWView>
      <SWView

        backgroundColor="background"
        marginHorizontal="m"
        elevation={2}
        borderRadius="ss"
        padding="s"
      >
        <SWView
          flexDirection="row"
          gap="s"
          alignItems="center"
          marginHorizontal="s"
          marginBottom="ms"
        >
          <SWView
            height={30}
            width={30}
            borderRadius="xxl"
            backgroundColor="list_background"
          />
          <Text>Surya Pratap Sing</Text>
        </SWView>

        <SWView  justifyContent="center" alignItems="center" gap="s">
          <SWView flexDirection="column">
            <SWView
              left={0}
              top={0}
              zIndex={99}
              position="absolute"
              backgroundColor="background"
              justifyContent="center"
              alignItems="center"
            >
              <Text padding="s" fontSize={18} fontFamily="gilroy-bold">
                Before
              </Text>
            </SWView>
            <Image source={require("@assets/pics/image1.png")} />
          </SWView>
          <SWView flexDirection="column">
            <SWView
              left={0}
              top={0}
              zIndex={99}
              position="absolute"
              backgroundColor="background"
              justifyContent="center"
              alignItems="center"
            >
              <Text padding="s" fontSize={18} fontFamily="gilroy-bold">
                After
              </Text>
            </SWView>
            <Image source={require("@assets/pics/image2.png")} />
          </SWView>
        </SWView>

        <SWView flexDirection="column" marginHorizontal="m">
          <Text fontFamily="gilroy-bold" fontSize={25} opacity={0.5}>Description</Text>
          <Text fontFamily="gilroy-medium" fontSize={16} opacity={0.7}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, facilis! Vero, voluptatibus unde exercitationem placeat amet adipisci, ipsam maiores odio labore excepturi perspiciatis sapiente iste.</Text>

        </SWView>
      </SWView>
      {roleBaseLogin?.role == "admin" && <FloatingAddButton onPress={onOpen} right={10} bottom={10} />}
      <UploadImageComplaints visible={showFillForm} onClose={onClose} />
      
      {showFillForm && <Backdrop />}
    </SafeAreaView>
  );
};

export default Sites;
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 33,
    width: 150,
    backgroundColor: palette.list_background,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "gilroy-bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
