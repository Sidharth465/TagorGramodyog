import {   ToastAndroid, SafeAreaView, Modal, Pressable, Image, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";
import { useAppDispatch } from '../redux/hooks';
import { addImageAndComplaints } from '../redux/slices/complaintsSlice';
import SWView from '../components/SView';
import Text from '../components/SVText';
import SVButton from '../components/SVButton';



type ImageType = "before"|"after"

const UploadImageComplaints = ({visible,onClose}:any) => {
    const [afterImage, setAfterImage] = useState(null);
    const [beforeImage, setBeforeImage] = useState(null);
    const dispatch = useAppDispatch()
   
    const [location,setLocation] = useState("")
    const [details,setDetails] = useState("")
  const handleOverlayPress = (event: any) => {
    const isInsideModal = event.target === event.currentTarget;
    if (isInsideModal) {
      onClose();
    }
  };
 function clearInput(){
   setAfterImage(null);
   setBeforeImage(null);
    setLocation("");
    setDetails("");
 }

  function handleSubmit(){
    try {
        let data = {afterImageUri:afterImage,beforeImageUri:beforeImage,location:location,details:details}
        console.log("Data submitter",data);
        
        dispatch(addImageAndComplaints(data))
        ToastAndroid.show(`Submitted Successfully`,ToastAndroid.LONG)


    } catch (error) {
        ToastAndroid.show(`${error}`,ToastAndroid.SHORT)
        
    }finally{
        onClose()
        clearInput()
    }

  }
    const pickImage = async (document: ImageType) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          quality: 1,
        });
    
        if (!result.canceled) {
          switch (document) {
            case "before":
              setBeforeImage(result?.assets[0].uri);
              return;
            case "after":
              setAfterImage(result?.assets[0].uri);
              return;
            default:
              break;
          }
        }
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
                  <Text fontFamily="gilroy-bold" fontSize={20}>Before Image</Text>
                 <SVButton onPress={()=>pickImage("before")} textColor={"background"}  textVariant={'gilroy-bold'}  fontSize={20} height={50} title={!!beforeImage ?"Uploaded":"Upload"} surface={!!beforeImage ?"primary":"surface_dark"} />
              </SWView>
              
              <SWView flexDirection="column" gap="ss">
                  <Text fontFamily="gilroy-bold" fontSize={20}>After Image</Text>
                  <SVButton onPress={()=>pickImage("after")}  textColor={"background"} textVariant={'gilroy-bold'} fontSize={20} height={50}  title={!!afterImage ?"Uploaded":"Upload"} surface={!!afterImage ?"primary":"surface_dark"}/>

              </SWView>

              
              <SWView flexDirection="column" gap="ss">
                  <Text fontFamily="gilroy-bold" fontSize={15}>Location</Text>
                  <TextInput value={location} onChangeText={(text)=>setLocation(text)} cursorColor={"grey"} style={{height:50,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingLeft:10}} />

              </SWView>

              
              <SWView flexDirection="column" gap="ss">
                  <Text fontFamily="gilroy-bold" fontSize={15}>Details</Text>
                  <TextInput value={details} onChangeText={(text)=>setDetails(text)} cursorColor={"grey"} multiline textAlignVertical="top"  style={{height:150,width:300,borderWidth:2,borderColor:"#C6C6C6",borderRadius:5,paddingTop:5,paddingLeft:10}} />

              </SWView>

             <SWView justifyContent="center"  marginTop="l">
             <SVButton  textColor='background' disabled={!beforeImage ||!afterImage || !location || !details} onPress={()=>handleSubmit()} textVariant="gilroy-bold" fontSize={25} height={55}  surface="primary" title="Submit"/>
             </SWView>

            </SWView>
          </SWView>
        </SWView>
      </Pressable>
    </Modal>
  </SafeAreaView>
  )
}

export default UploadImageComplaints