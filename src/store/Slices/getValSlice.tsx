import { createSlice } from "@reduxjs/toolkit";

export const getValSlice = createSlice({
    name:"addId",
    initialState:{
        data:"" as string,
        keyBoard:false,
        isSearch:false,
        searchCustomer:false,
        isMenu:"",
        openMenu:false,
        isPaymentOpen:false
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
        onChangeVal:(state,action) =>{
            state.data = action.payload
        },
        keyBoardVal:(state) => {
            state.keyBoard = !state.keyBoard
        },
        keyBoardValChange:(state,action) => {
            state.keyBoard = action.payload
        },
        searchOpen:(state) => {
            state.isSearch = !state.isSearch
        },
        searchCustomer:(state) =>{
            state.searchCustomer = !state.searchCustomer
        },
        isMenuHandle: (state,action) => {
            state.isMenu = action.payload
        },
        setIsOpenMenu:(state) => {
            state.openMenu =  true
        }
        ,
        setIsCloseMenu:(state) => {
            state.openMenu =  false
        },
        isPaymentOpen:(state) => {
            state.isPaymentOpen = !state.isPaymentOpen
        }
    }
})

export const {addVal,removeVal,keyBoardVal,keyBoardValChange,searchOpen,onChangeVal,isMenuHandle,setIsOpenMenu,setIsCloseMenu,searchCustomer,isPaymentOpen} = getValSlice.actions

export default getValSlice.reducer