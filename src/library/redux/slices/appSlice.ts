import {PayloadAction,createSlice} from "@reduxjs/toolkit"
const initialState = {
    mobile_number:null,
    selectedCity:"",
    otpVisible:false
}

export const appSlice = createSlice({
    name:"appSLice",
    initialState,
      reducers:{
        updateMobileNumber:(state,action)=>{   
            state.mobile_number = action.payload
            },
            updateCity:(state,action)=>{
                state.selectedCity = action.payload
                },
                setOtpVisible:(state,action)=>{
                    state.otpVisible = action.payload

                }
      }

});

export const {updateMobileNumber,updateCity,setOtpVisible} = appSlice?.actions;
export default  appSlice.reducer