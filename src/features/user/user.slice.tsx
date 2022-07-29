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
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item._id === newItem._id);
            if (!existingItem) {
                state.items.push(newItem);
                state.totalQuantity++;
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.total += newItem.total;
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item._id !== id);
            if (state.totalQuantity < 0) {
                return state.totalQuantity = 0
            }
            state.totalQuantity--
        },
        decrementQuantity(state, action) {
            const id = action.payload.id;
            const currentProduct = state.items.find(item => item._id === id);
            state.items.flat().forEach((item) => {
                if (item._id === currentProduct._id) {
                    let priceCurrent = 0
                    if (item.salePrice) {
                        priceCurrent = item.salePrice
                    } else {
                        priceCurrent = item.regularPrice
                    }
                    item.quantity--;
                    if (item.quantity < 1) {
                        item.quantity = 1;
                        item.total = priceCurrent
                    } else {
                        item.total = priceCurrent * +(item.quantity)
                    }
                }
            });
        },
        incrementQuantity(state, action) {
            const id = action.payload.id;

            const currentProduct = state.items.find(item => item._id === id);
            state.items.flat().forEach((item) => {
                if (item._id === currentProduct._id) {
                    let priceCurrent = 0
                    if (item.salePrice) {
                        priceCurrent = item.salePrice
                    } else {
                        priceCurrent = item.regularPrice
                    }
                    item.quantity++;
                    item.total = priceCurrent * +(item.quantity)
                }
            });
        },

        resetCart(state, action) {
            state.items = []
            state.totalQuantity = 0
            state.totalAmount = 0
        },
    },

    
});

export default cartSlice.reducer;
