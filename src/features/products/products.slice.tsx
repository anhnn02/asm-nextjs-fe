import { filterPage, filterProduct, getAll } from "@/api/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IProductState {
    value: any[];
}

const initialState: IProductState = {
    value: [],
};

// Action
export const listProduct = createAsyncThunk(
    "product/listProduct",
    async () => {
        const { data } = await getAll()
        return data
    }
)

export const getProductPage = createAsyncThunk("product/getProductPage", async (numberPage, thunkAPI) => {
    const { data } = await filterPage(numberPage);
    return data;
})

export const getProductFilter = createAsyncThunk(
    "product/getProductFilter",
    async (filter, thunkAPI) => {
        const { data } = await filterProduct(filter.page, filter.order);
        return data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: [],
        valueLimitPage: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listProduct.fulfilled, (state, action) => {
            state.value = action.payload;
        });
        builder.addCase(getProductPage.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        });
        builder.addCase(getProductFilter.fulfilled, (state, action) => {
            state.valueLimitPage = action.payload
        })
    },
});

export default productSlice.reducer;
