import {PayloadAction,createSlice} from "@reduxjs/toolkit"
interface RoleBaseLogin{
    mobile_number:string,
    role:string,
    otp:string,
    

}
interface State{
    roleBaseLogin: RoleBaseLogin;
    selectedCity: string;
    selectedArea: string;
    otpVisible: boolean;

}

const initialState:State = {
    roleBaseLogin:{mobile_number:"8744098062",role:"admin",otp:"",},
    selectedCity:"",
    selectedArea:"",
    otpVisible:false
}

export const appSlice = createSlice({
    name:"appSLice",
    initialState,
      reducers:{
        updateLoginCredentials:(state,action)=>{   
            state.roleBaseLogin = action.payload
            },
            updateCity:(state,action)=>{
                state.selectedCity = action.payload
                },
            updateArea:(state,action)=>{
                state.selectedArea = action.payload
                },
                setOtpVisible:(state,action)=>{
                    state.otpVisible = action.payload

                }
      }

});

export const {updateLoginCredentials,updateCity,setOtpVisible} = appSlice?.actions;
export default  appSlice.reducer