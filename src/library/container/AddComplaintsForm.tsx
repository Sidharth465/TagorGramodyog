import React, { useState } from "react";
import { Dimensions, Image, Modal, Pressable, SafeAreaView,TextInput, ToastAndroid } from "react-native";

import SWView from "../components/SView";
import Text from "../components/SVText";
import SVButton from "../components/SVButton";
import { useAppDispatch } from "../redux/hooks";
import { addComplaints } from "../redux/slices/complaintsSlice";

const AddComplaintsForm = ({ visible, onClose }: any) => {
    const dispatch = useAppDispatch()
    const [name,setName] = useState("")
    const [mobile,setMobile] = useState("")
    const [location,setLocation] = useState("")
    const [details,setDetails] = useState("")
  const handleOverlayPress = (event: any) => {
    const isInsideModal = event.target === event.currentTarget;
    if (isInsideModal) {
      onClose();
    }
  };
 function clearInput(){
    setName("");
    setMobile("");
    setLocation("");
    setDetails("");
 }

  function handleSubmit(){
    try {
        let data = {name:name,mobile:mobile,location:location,details:details}
        console.log("Data submitter",data);
        
        dispatch(addComplaints(data))


    } catch (error) {
        ToastAndroid.show(`${error}`,ToastAndroid.LONG)
        
    }finally{
        onClose()
        clearInput()
    }

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        onDismiss={onClose}
        visible={visible}
        animationType="slide"
        transparent={true}
      >
        <Pressable
          onPress={(event) => {
            handleOverlayPress(event);
          }}
          style={{
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            borderColor: "blue",
          }}
        >
          <SWView
            height={"80%"}
            marginTop={"xl"}
            padding={"ll"}
            borderWidth={2}
            borderColor={"ailment_background"}
            marginHorizontal={"ms"}
            borderRadius={"s"}
            position={"relative"}
            backgroundColor={"chip_box"}
          >
            <SWView flex={1} justifyContent="center" alignItems="center">
              <Image
                resizeMode="cover"
                height={500}
                width={500}
                source={require("@assets/images/opacive_logo.png")}
              />
              <SWView position="absolute" top={0} gap="l">
                {/*main content */}

                <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={15}>Name</Text>
                    <TextInput value={name}  onChangeText={(text)=>setName(text)} cursorColor={"grey"} style={{height:50,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingLeft:10}} />
                </SWView>
                
                <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={15}>Mobile no</Text>
                    <TextInput  value={mobile}onChangeText={(text)=>setMobile(text)} cursorColor={"grey"} style={{height:50,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingLeft:10}} />

                </SWView>

                
                <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={15}>Location</Text>
                    <TextInput value={location} onChangeText={(text)=>setLocation(text)} cursorColor={"grey"} style={{height:50,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingLeft:10}} />

                </SWView>

                
                <SWView flexDirection="column" gap="ss">
                    <Text fontFamily="gilroy-bold" fontSize={15}>Details</Text>
                    <TextInput value={details} onChangeText={(text)=>setDetails(text)} cursorColor={"grey"} multiline textAlignVertical="top" style={{height:150,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingTop:5,paddingLeft:10}} />

                </SWView>

               <SWView justifyContent="center"  marginTop="l">
               <SVButton  disabled={!mobile ||!name || !location || !details} onPress={()=>handleSubmit()} textVariant="gilroy-bold" fontSize={25} height={55}  surface="primary" title="Submit"/>
               </SWView>

              </SWView>
            </SWView>
          </SWView>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default AddComplaintsForm;


