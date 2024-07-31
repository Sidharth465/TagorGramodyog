import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import SWView from "@/src/library/components/SView";
import SVHeader from "@/src/library/components/SVHeader";
import Text from "@/src/library/components/SVText";
import FloatingAddButton from "@/src/library/components/FloatingAddButton";
import Backdrop from "@/src/library/container/Backdrop";
import AddComplaintsForm from "@/src/library/container/AddComplaintsForm";
import { useAppSelector } from "@/src/library/redux/hooks";
import { visible } from "@shopify/restyle";
import { Dropdown } from "react-native-element-dropdown";
import palette from "@/src/library/theme/palette";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import theme from "@/src/library/theme/theme";
import { router } from "expo-router";

const RenderList = ({ item, index, onOpen, roleBaseLogin }: any) => {
  return (
    <Pressable
      onPress={() => {
        roleBaseLogin?.role == "admin" ? onOpen({ index: index }) : "";
      }}
    >
      <SWView
        width={331}
        backgroundColor="chip_box"
        marginVertical="s"
        borderRadius="s"
        elevation={5}
        shadowColor={"surface_dark_shade_1"}
        shadowOffset={{ height: 2, width: 0 }}
        shadowRadius={5}
        shadowOpacity={2}
      >
        <SWView flexDirection="column" padding="ms" gap="ss">
          <Text color="blueText" fontSize={18} fontFamily="gilroy-bold">
            {item?.title}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Name: {item?.name}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Mobile no: {item?.mobile_number}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Location: {item?.location}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Date: {item?.date}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Status: {item?.status}{" "}
            {item?.status?.toLowerCase() == "scheduled" && (
              <Text fontSize={18} color="blueText">
                {" "}
                on {item?.scheduled_date}
              </Text>
            )}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Description:{" "}
            <Text fontSize={14} fontFamily="gilroy-medium">
              {item?.description}
            </Text>
          </Text>
        </SWView>
      </SWView>
    </Pressable>
  );
};

type showFillForm = {
  visible: boolean;
  index: number | null;
};
const MyComplaints = () => {
  const [value, setValue] = useState("");
  const { roleBaseLogin } = useAppSelector((state) => state.appSlice);
  const [showFillForm, setShowFillForm] = useState<showFillForm>({
    visible: false,
    index: null,
  });
  const { complaints } = useAppSelector((state) => state.complaintsSlice);
  function onClose() {
    setShowFillForm({ visible: false, index: null });
  }
  function onOpen({ index }: showFillForm) {
    setShowFillForm({ visible: true, index: index });
  }

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item?.label}</Text>
      </View>
    );
  };

  // console.log("Value", value);
  const locations = complaints?.map((item) => ({
    label: item?.location,
    value: item?.location,
  }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
      <SVHeader
        title={
          roleBaseLogin.role == "admin" ? "All Complaints" : "My Complaints"
        }
        visibleButton
      />
      {roleBaseLogin?.role == "user" && (
        <SWView >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={locations || []}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="select location"
            value={value}
            searchPlaceholder="Search..."
            onChange={(item) => {
              setValue(item?.value);
            }}
            renderItem={renderItem}
          />
          {value?.length > 0 && (
            <SWView
              zIndex={99}
              backgroundColor="chip_box"
              borderRadius="xxl"
              position="absolute"
              left={135}
              top={23}
            >
              <Pressable onPress={() => setValue("")}>
                <MaterialIcons
                  name="cancel"
                  size={18}
                  color={theme?.colors?.errorRed}
                />
              </Pressable>
            </SWView>
          )}
        </SWView>
      )}
      <SWView
        // height={"100%"}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center"
        marginTop="s"
        paddingBottom="floatingCTA"
        marginBottom="s"
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={complaints?.filter(({ location }) =>
            value
              ? location?.toLowerCase()?.includes(value?.toLowerCase())
              : true
          )}
          renderItem={({ item, index }) => (
            <RenderList
              item={item}
              index={index}
              onOpen={onOpen}
              roleBaseLogin={roleBaseLogin}
            />
          )}
        />
      </SWView>
      {roleBaseLogin?.role == "user" && (
        <FloatingAddButton
          onPress={() => router.push("/addComplaint")}
          bottom={4}
          right={10}
        />
      )}
      <AddComplaintsForm
        visible={showFillForm?.visible}
        onClose={onClose}
        index={showFillForm?.index}
      />
      {showFillForm.visible && <Backdrop />}
    </SafeAreaView>
  );
};

export default MyComplaints;
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
    color: palette?.text_with_opacity,
  },
  selectedTextStyle: {
    fontSize: 14,
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
