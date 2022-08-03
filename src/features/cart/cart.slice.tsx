import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ICartState {
    items: any[],
    totalQuantity: number,
    totalAmount: number
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
            const existingItem = state.items.find((item) => item.idInCart === newItem.idInCart);
            if (!existingItem) {
                state.items.push(newItem);
                state.totalQuantity++;
                state.totalAmount = newItem.total
            } else {
                existingItem.quantity += newItem.quantity;
                existingItem.total += newItem.total;
                state.totalAmount += newItem.total
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.items = state.items.filter((item) => item.idInCart != id);
            if (state.totalQuantity < 0) {
                return state.totalQuantity = 0
            }
            state.totalQuantity--
        },
        decrementQuantity(state, action) {
            const id = action.payload.idInCart;
            const currentProduct = state.items.find(item => item.idInCart === id);
            state.items.flat().forEach((item) => {
                if (item.idInCart === currentProduct.idInCart) {
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
            const id = action.payload.idInCart;
            const currentProduct = state.items.find(item => item.idInCart === id);
            state.items.flat().forEach((item) => {
                if (item.idInCart === currentProduct.idInCart) {
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
        applyVoucher(state, action) {
            if (state.totalAmount > 0){
                state.totalAmount -= action.payload
            }else{
                state.totalAmount = 0
            }
        }
    },

    
});
export const { addItemToCart, removeItemFromCart, decrementQuantity, incrementQuantity, resetCart, applyVoucher } = cartSlice.actions;
export default cartSlice.reducer;
