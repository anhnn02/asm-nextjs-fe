import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "@/features/products/products.slice";


const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;