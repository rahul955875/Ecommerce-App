import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import authReducer from './authSlice'
const store = configureStore({
    reducer:{
        cart : cartReducer,
        login : authReducer,
    }
})
export default store