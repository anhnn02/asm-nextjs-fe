import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "@/features/products/products.slice";
import cartReducer from "@/features/cart/cart.slice";
import userReducer from "@/features/user/user.slice";


const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
});

export default rootReducer;