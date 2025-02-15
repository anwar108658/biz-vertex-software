import { createSlice } from "@reduxjs/toolkit";

export const getValSlice = createSlice({
    name:"addId",
    initialState:{
        data:"" as string,
    },
    reducers:{
        addVal:(state,action) => {
            state.data += action.payload
        },
        removeVal:(state) => {
            state.data =  state.data.slice(0,-1)
        }
    }
})

export const {addVal,removeVal} = getValSlice.actions

export default getValSlice.reducer