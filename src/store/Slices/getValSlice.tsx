import { createSlice } from "@reduxjs/toolkit";

export const getValSlice = createSlice({
    name:"addId",
    initialState:{
        data:"" as string,
        keyBoard:false,
    },
    reducers:{
        addVal:(state,action) => {
            if (action.payload ==="."){
                if (state.data.includes(action.payload)) return;
            }
            
            state.data += action.payload
        },
        removeVal:(state) => {
            state.data =  state.data.slice(0,-1)
        },
        keyBoardVal:(state) => {
            state.keyBoard = !state.keyBoard
        },
        keyBoardValChange:(state,action) => {
            state.keyBoard = action.payload
        }
    }
})

export const {addVal,removeVal,keyBoardVal,keyBoardValChange} = getValSlice.actions

export default getValSlice.reducer