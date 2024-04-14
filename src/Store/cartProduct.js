import { createSlice } from "@reduxjs/toolkit";

const cartProductSlice=createSlice({
    name:"cartProduct",
    initialState:{},
    reducers:{
        addTocart:(state,action)=>{
            if(action.payload in state){
                state[action.payload]=state[action.payload]+1
            }else{
                state[action.payload]=1
            }
        },
        removeFromcart:(state,action)=>{
            if(action.payload in state){
                state[action.payload]=state[action.payload]-1
            }
        },
    }
})

export const cartProductActions=cartProductSlice.actions;
export default cartProductSlice;