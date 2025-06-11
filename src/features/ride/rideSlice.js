import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

// Async Thunks
const getFarePrice = createAsyncThunk("ride/getFarePrice", async ({ pickUp, destination }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/ride/get-fare-price`, {
            params: { pickUp, destination }, // FIX: use correct param names
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch fare price");
    }
});

const rideSlice = createSlice({
    name: "ride",
    initialState: {
        fares: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFarePrice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFarePrice.fulfilled, (state, action) => {
                state.loading = false;
                state.fares = action.payload.fare;
            })
            .addCase(getFarePrice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export { getFarePrice };
export default rideSlice.reducer;
