import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface ComplaintsState {
    complaints: any[];
    imageComplaints:any[]
  }
const initialState:ComplaintsState = {
   complaints :[],
   imageComplaints:[],
};


export const complaintsSlice = createSlice({
    name: "complaintsSlice",
    initialState,
    reducers: {
        addComplaints: (state, action) => {
            state.complaints = [...state.complaints , action.payload];
          },
          addImageAndComplaints: (state, action) => {
            state.imageComplaints = [...state.imageComplaints , action.payload];
          },
        
       
    },
});

export const { addComplaints ,addImageAndComplaints} = complaintsSlice.actions;
export default complaintsSlice.reducer;