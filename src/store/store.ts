import {configureStore} from "@reduxjs/toolkit";
import  getValSlice  from "./Slices/getValSlice";
const store = configureStore({
    reducer:getValSlice
})
export default store