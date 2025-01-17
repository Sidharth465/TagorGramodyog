import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
  ToastAndroid
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import QrcodeScanner from "../components/QrcodeScanner";
import SVButton from "../components/SVButton";
import SWView from "../components/SView";
import Text from "../components/SVText";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addComplaints, editComplaints } from "../redux/slices/complaintsSlice";
import palette from "../theme/palette";

const AddComplaintsForm = ({ visible, onClose, index }: any) => {
  const { complaints } = useAppSelector((state) => state.complaintsSlice);
  const { roleBaseLogin } = useAppSelector((state) => state.appSlice);
  const dispatch = useAppDispatch();
  const [problem, setProblem] = useState(complaints[index]?.title || "");
  const [date, setDate] = useState(complaints[index]?.date || "");
  const [status, setStatus] = useState(complaints[index]?.status || "Open"); // New state for status
  const [description, setDescription] = useState(
    complaints[index]?.description || ""
  ); // New state for description
  const [name, setName] = useState(complaints[index]?.name || "");
  const [mobile, setMobile] = useState(complaints[index]?.mobile_number || "");
  const [email, setEmail] = useState(complaints[index]?.email || ""); // New state for email
  const [location, setLocation] = useState(complaints[index]?.location || "");
  const [image, setImage] = useState(complaints[index]?.image_uri||"");
  const [showQrCode,setShowQrCode] = useState(false)
  const [scheduledDate,setScheduledDate]= useState( complaints[index]?.scheduled_date||"")

  useEffect(() => {
    if (index >= 0 && complaints[index]) {
      const complaint = complaints[index];
      setProblem(complaints[index].title || "");
      setDate(complaints[index].date || "");
      setStatus(complaints[index].status || "Open");
      setDescription(complaint.description || "");
      setName(complaints[index].name || "");
      setMobile(complaints[index].mobile_number || "");
      setEmail(complaints[index].email || "");
      setLocation(complaints[index].location || "");
      setImage(complaints[index]?.image_uri||"")
      setScheduledDate(complaints[index]?.scheduled_date||null)
    }
  }, [index, complaints]);

  const handleOverlayPress = (event: any) => {
    const isInsideModal = event.target === event.currentTarget;
    if (isInsideModal) {
      onClose();
    }
  };

  function clearInput() {
    setProblem("");
    setDate("");
    setStatus("");
    setDescription("");
    setName("");
    setMobile("");
    setEmail("");
    setLocation("");
  }

  function handleSubmit() {
    try {
      let updatedData = {
        title:problem,
        date,
        status,
        description,
        name,
        mobile_number:mobile,
        email,
        location,
        image_uri: image,
        scheduled_date:scheduledDate
      };
      console.log("Data submitted:", updatedData);
      if (roleBaseLogin?.role == "admin") {
        dispatch(editComplaints({ index, updatedData }));
      } else {
        dispatch(addComplaints(updatedData));
      }
    } catch (error) {
      ToastAndroid.show(`${error}`, ToastAndroid.LONG);
    } finally {
      onClose();
      clearInput();
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result?.assets[0].uri);
    }
  };
  
  const statusOptions = [
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Scheduled', value: 'scheduled' },
    { label: 'Completed', value: 'completed' }
  ];
  
  const renderItem = (item) => {
    return (
      <SWView padding="ms" flexDirection="row" justifyContent="space-between" alignItems="center"  >
        <Text fontSize={16}>{item?.label}</Text>
      </SWView>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        onDismiss={onClose}
        visible={visible}
        animationType="slide"
        transparent={true}
      >
        <Pressable
          onPress={(event) => handleOverlayPress(event)}
          style={{
            flex: 1,
            borderColor: "blue",
          }}
        >
          <SWView
            height={"80%"}
            marginTop={"xl"}
            padding={"m"}
            borderWidth={2}
            borderColor={"ailment_background"}
            marginHorizontal={"ms"}
            borderRadius={"s"}
            backgroundColor={"chip_box"}
          >
            <SWView flex={1} justifyContent="center" alignItems="center">
              <Image
                resizeMode="cover"
                height={500}
                width={500}
                source={require("@assets/images/opacive_logo.png")}
              />
              <SWView
                height={"100%"}
                width={"100%"}
                position="absolute"
                top={0}
                gap="l"
              >
                {/* Main content */}
                <ScrollView
                  contentContainerStyle={{ gap: 10 }}
                  showsVerticalScrollIndicator={false}
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
            {problem}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Name: {name}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Mobile no: {mobile}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Location: {location}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Date: {date}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Status: {status}{" "}
            {status?.toLowerCase() == "scheduled" && (
              <Text fontSize={18} color="blueText">
                {" "}
                on {scheduledDate}
              </Text>
            )}
          </Text>
          <Text fontSize={15} fontFamily="gilroy-bold">
            Description:{" "}
            <Text fontSize={14} fontFamily="gilroy-medium">
              {description}
            </Text>
          </Text>
        </SWView>
      </SWView>
                  {/* <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Name
                    </Text>
                    <TextInput
                      value={name}
                      onChangeText={(text) => setName(text)}
                      cursorColor={"grey"}
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView>

                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Mobile no
                    </Text>
                    <TextInput
                      value={mobile}
                      onChangeText={(text) => setMobile(text)}
                      cursorColor={"grey"}
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView>

                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Email
                    </Text>
                    <TextInput
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      cursorColor={"grey"}
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView>

                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Location
                    </Text>
                    <Pressable onPress={() => setShowQrCode(true)}>
                      <SWView
                        paddingHorizontal="ms"
                        alignItems="center"
                        justifyContent="space-between"
                        flexDirection="row"
                        height={50}
                        width={300}
                        borderWidth={2}
                        borderColor="textinput_border"
                        borderRadius="sx"
                      >
                        {location?.length > 0 ? (
                          <SWView
                            flexDirection="row"
                            alignItems="center"
                            gap="sss"
                          >
                           
                            <Text opacity={0.6} fontFamily="gilroy-bold" fontSize={16}>{location}</Text>
                          </SWView>
                        ) : (
                          <Text
                            color="text_with_opacity"
                            fontFamily="gilroy-medium"
                            fontSize={20}
                          >
                            click to scan Qr-code
                          </Text>
                        )}
                        <MaterialIcons name="qr-code-scanner" size={30}
                          color={palette?.black}/>
                        
                      </SWView>
                    </Pressable>
                  </SWView>
                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Problem
                    </Text>
                    <TextInput
                      value={problem}
                      onChangeText={(text) => setProblem(text)}
                      cursorColor={"grey"}
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView>
                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Image
                    </Text>
                    <Pressable onPress={() => pickImage()}>
                      <SWView
                        paddingHorizontal="ms"
                        alignItems="center"
                        justifyContent="space-between"
                        flexDirection="row"
                        height={50}
                        width={300}
                        borderWidth={2}
                        borderColor="textinput_border"
                        borderRadius="sx"
                      >
                        {image?.length > 0 ? (
                          <SWView
                            flexDirection="row"
                            alignItems="center"
                            gap="sss"
                          >
                            <Ionicons
                              name="checkmark-done-circle"
                              size={30}
                              color={palette?.bw_green}
                            />
                            <Text opacity={0.6} fontFamily="gilroy-bold" fontSize={16}>Uploaded Successfully !</Text>
                          </SWView>
                        ) : (
                          <Text
                            color="text_with_opacity"
                            fontFamily="gilroy-medium"
                            fontSize={20}
                          >
                            tap to open camera
                          </Text>
                        )}
                        <Entypo
                          name="camera"
                          size={30}
                          color={palette?.black}
                        />
                      </SWView>
                    </Pressable>
                  </SWView> */}

                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Schedule Date (if any)
                    </Text>
                    <TextInput
                      value={scheduledDate}
                      onChangeText={(text) => setScheduledDate(text)}
                      cursorColor={"grey"}
                      placeholder="DD-MM-YYYY"
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView>
{/* status */}
                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Status
                    </Text>
                    <Dropdown
          style={{
            height: 50,
            width: 300,
            borderWidth: 2,
            borderColor: "#C6C6C6",
            borderRadius: 5,
            paddingLeft: 10,
          }}
            placeholderStyle={{fontSize: 16,
              color: palette?.text_with_opacity,}}
            selectedTextStyle={{ fontSize: 14,
              fontFamily: "gilroy-bold"}}
            inputSearchStyle={ {height:40,
              fontSize: 16}}
            iconStyle={{width:20,height:20}}
            data={statusOptions||[]}

            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Status"
            value={status}
            searchPlaceholder="Search..."
            onChange={(item) => {
              setStatus(item?.value);
            }}
            renderItem={renderItem}
          />

                    {/* <TextInput
                      value={status}
                      onChangeText={(text) => setStatus(text)}
                      cursorColor={"grey"}
                      style={{
                        height: 50,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    /> */}
                  </SWView>

                  {/* <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Description
                    </Text>
                    <TextInput
                      value={description}
                      onChangeText={(text) => setDescription(text)}
                      cursorColor={"grey"}
                      multiline
                      textAlignVertical="top"
                      style={{
                        height: 150,
                        width: 300,
                        borderWidth: 2,
                        borderColor: "#C6C6C6",
                        borderRadius: 5,
                        paddingTop: 5,
                        paddingLeft: 10,
                        fontSize: 18,
                        fontFamily: "gilroy-medium",
                      }}
                    />
                  </SWView> */}
                </ScrollView>
                <SWView paddingHorizontal="l" justifyContent="center">
                  <SVButton
                  textColor="background"
                    disabled={
                      !problem ||
                      !date ||
                      !status ||
                      !description ||
                      !name ||
                      !mobile ||
                      !email ||
                      !location
                    }
                    onPress={() => handleSubmit()}
                    textVariant="gilroy-bold"
                    fontSize={25}
                    height={45}
                    surface="primary"
                    title="Submit"
                  />
                </SWView>
              </SWView>
            </SWView>
          </SWView>
        </Pressable>
        {showQrCode && <QrcodeScanner  onClose = {setShowQrCode(false)} visible={showQrCode} setLocation={setLocation} />}
      </Modal>
    </SafeAreaView>
  );
};

export default AddComplaintsForm;
