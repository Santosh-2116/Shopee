import { createSlice } from "@reduxjs/toolkit";
import allProduct from '../../public/assets/all_product'

const allProductSlice=createSlice({
    name:"allProduct",
    initialState:allProduct,
})

export default allProductSlice;