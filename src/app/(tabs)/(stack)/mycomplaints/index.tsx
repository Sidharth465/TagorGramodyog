import {  SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import SWView from '@/src/library/components/SView'
import SVHeader from '@/src/library/components/SVHeader'
import Text from '@/src/library/components/SVText'
import FloatingAddButton from '@/src/library/components/FloatingAddButton'



const RenderList=({item}:any)=>{
  return(
    <SWView width={331} height={170} backgroundColor='chip_box' marginVertical='s' borderRadius='s'   elevation={5}
    shadowColor={"surface_dark_shade_1"}
    shadowOffset={{ height: 2, width: 0 }}
    shadowRadius={5}
    shadowOpacity={2}>
      <SWView flexDirection='column' padding='ms' gap='s'>
      <Text fontSize={18} fontFamily='gilroy-bold'>{item?.title}</Text>
      <Text  fontSize={15}  fontFamily='gilroy-bold'>Date: {item?.date}</Text>
      <Text   fontSize={15} fontFamily='gilroy-bold'>Status: {item?.status}</Text>
      <Text  fontSize={15}   fontFamily='gilroy-bold'>Description: {"\n"}<Text fontSize={13} fontFamily='gilroy-medium'>{item?.description}</Text></Text>
      </SWView>

    </SWView>
  )
}

const MyComplaints = () => {
  const garbageCollectionData = [
    {
      title: "Garbage Collection",
      date: '7-04-22',
      status: 'Closed',
      description: 'Routine garbage collection for residential areas. All bins were emptied successfully.'
    },
    {
      title: "Recycling Collection",
      date: '7-04-22',
      status: 'Open',
      description: 'Recycling collection for plastic and paper materials. Residents are requested to separate their recyclables.'
    },
    {
      title: "Green Waste Collection",
      date: '8-04-22',
      status: 'Scheduled',
      description: 'Collection of green waste such as garden clippings and leaves. Please place waste in designated bins.'
    },
    {
      title: "Bulky Waste Collection",
      date: '9-04-22',
      status: 'Closed',
      description: 'Collection of large items such as furniture and appliances. Ensure items are left at curbside for pickup.'
    },
    {
      title: "Hazardous Waste Collection",
      date: '10-04-22',
      status: 'Open',
      description: 'Special collection for hazardous materials such as batteries and chemicals. Drop-off points are available.'
    },
    {
      title: "E-Waste Collection",
      date: '11-04-22',
      status: 'Completed',
      description: 'Collection of electronic waste including old computers and phones. Please bring items to designated collection centers.'
    },
    {
      title: "Food Waste Collection",
      date: '12-04-22',
      status: 'Closed',
      description: 'Collection of food waste for composting. Please use compostable bags and ensure food waste is free of non-organic materials.'
    },
    {
      title: "Bulk Yard Sale Waste",
      date: '13-04-22',
      status: 'Open',
      description: 'Collection of waste from yard sales. Ensure items are properly sorted for disposal.'
    },
    {
      title: "Construction Debris Collection",
      date: '14-04-22',
      status: 'Scheduled',
      description: 'Collection of construction debris including wood and metal scraps. Please separate materials as per guidelines.'
    },
    {
      title: "Seasonal Cleanup",
      date: '15-04-22',
      status: 'Completed',
      description: 'Seasonal cleanup event focusing on public parks and streets. Volunteers are welcome to assist.'
    }
  ];
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#FFFF"}}>
    <SVHeader title='My Complaints' visibleButton />
      <SWView flex={1} backgroundColor='background' justifyContent='center' alignItems='center' marginTop='m'>
        <FlatList showsVerticalScrollIndicator = {false} data={garbageCollectionData} renderItem={RenderList} />

    </SWView>
    <FloatingAddButton  bottom = {4} right={10}/>
    </SafeAreaView>
  )
}

export default MyComplaints