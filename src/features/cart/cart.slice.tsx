import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ICartState {
    items: any[],
    totalQuantity: Number,
    totalAmount: Number
}

const initialState: ICartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        
    },

    
});

export default cartSlice.reducer;
