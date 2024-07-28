import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import complaintsSlice from "./slices/complaintsSlice";

export const store = configureStore({
    reducer: {
      appSlice,
      complaintsSlice
    },
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;