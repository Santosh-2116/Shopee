import { createSlice } from "@reduxjs/toolkit";
import popularProduct from '../../public/assets/popular_product'

const popularProductSlice=createSlice({
    name:"popularProduct",
    initialState:popularProduct,
})

export default popularProductSlice;