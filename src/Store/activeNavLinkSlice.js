import { createSlice } from "@reduxjs/toolkit";

const activeNavLinkSlice=createSlice({
    name:"active navlink",
    initialState:"SHOP",
    reducers:{
        setMenu:(state,action)=>{
            return state=action.payload
        }
    }
})

export default activeNavLinkSlice;
export const activeNavLinkSliceActions=activeNavLinkSlice.actions;