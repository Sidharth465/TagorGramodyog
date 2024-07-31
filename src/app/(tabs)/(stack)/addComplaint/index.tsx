import { useAppDispatch, useAppSelector } from "@/src/library/redux/hooks";
import { addComplaints } from "@/src/library/redux/slices/complaintsSlice";
import Entypo from "@expo/vector-icons/build/Entypo";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    TextInput,
    ToastAndroid
} from "react-native";



import QrcodeScanner from "@/src/library/components/QrcodeScanner";
import SVButton from "@/src/library/components/SVButton";
import SWView from "@/src/library/components/SView";
import Text from "@/src/library/components/SVText";
import palette from "@/src/library/theme/palette";
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from "react-native-toast-message";
import SVHeader from "@/src/library/components/SVHeader";
import theme from "@/src/library/theme/theme";

const AddComplaint = () => {

    const dispatch = useAppDispatch()
    const [problem, setProblem] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState( "Open"); // New state for status
    const [description, setDescription] = useState(
       ""
    ); // New state for description
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState(""); // New state for email
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [showQrCode,setShowQrCode] = useState(false)
    
  
   
  
  
    function clearInput() {
      setProblem("");
      setDate("");
      setStatus("");
      setDescription("");
      setName("");
      setMobile("");
      setEmail("");
      setLocation("");
      setImage("");
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
        };
        console.log("Data submitted:", updatedData);

        
        dispatch(addComplaints(updatedData));
        Toast.show({type:"success",text1:"Uploaded Successfully ",text2:`Successfully Uploaded ${problem} problem ! `})
      } catch (error) {
        ToastAndroid.show(`${error}`, ToastAndroid.LONG);
      } finally {
        clearInput();
      }
    }

    function closeScanner(){
        setShowQrCode(false)
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
  
  return (
   <SafeAreaView style={{flex:1,backgroundColor:theme?.colors?.chip_box}}>
    <SVHeader  visibleButton title="Add Complaint"/>
    <SWView
            flex={1}
            // marginTop={"ll"}
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
                  <SWView flexDirection="column" gap="ss">
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
                  </SWView>

                  <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={18}>
                      Date
                    </Text>
                    <TextInput
                      value={date}
                      onChangeText={(text) => setDate(text)}
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
                      Status
                    </Text>
                    <TextInput
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
                    />
                  </SWView>

                  <SWView flexDirection="column" gap="ss">
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
                  </SWView>
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
    
    {showQrCode && <QrcodeScanner  onClose = {closeScanner} visible={showQrCode} setLocation={setLocation} />}

   </SafeAreaView>
  )
}

export default AddComplaint


