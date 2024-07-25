import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";

export const store= configureStore({
    reducer:{authSliceReducer}
})

export default store;