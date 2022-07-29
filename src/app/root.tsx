import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "@/features/products/products.slice";
import cartReducer from "@/features/cart/cart.slice";


const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

export default rootReducer;