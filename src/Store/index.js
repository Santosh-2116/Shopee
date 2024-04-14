import {configureStore} from '@reduxjs/toolkit'
import activeNavLinkSlice from './activeNavLinkSlice'
import allProductSlice from './allProduct';
import popularProductSlice from './popularProduct';
import cartProductSlice from './cartProduct';


const Appstore=configureStore({
    reducer:{
        activeNavLink:activeNavLinkSlice.reducer,
        allProduct:allProductSlice.reducer,
        popularProduct:popularProductSlice.reducer,
        cartProduct:cartProductSlice.reducer,
    }
})

export default Appstore;