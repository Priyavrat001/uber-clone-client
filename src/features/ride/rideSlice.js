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
const createNewRide = createAsyncThunk("ride/createNewRide", async (rideData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/ride/new-ride`, rideData,{
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to Create a ride");
    }
});

const rideSlice = createSlice({
    name: "ride",
    initialState: {
        fares: null,
        newRide:null,
        loading: {
            faresLoading:false,
            newRideLoading:false
        },
        error: {
            faresError:null,
            newRideError:null
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFarePrice.pending, (state) => {
                state.loading.faresLoading = true;
                state.error.faresError = null;
            })
            .addCase(getFarePrice.fulfilled, (state, action) => {
                state.loading.faresLoading = false;
                state.fares = action.payload.fare;
            })
            .addCase(getFarePrice.rejected, (state, action) => {
                state.loading.faresLoading = false;
                state.error.faresError = action.payload;
            })
            
            //create new ride
            .addCase(createNewRide.pending, (state) => {
                state.loading.newRideLoading = true;
                state.error.newRideError = null;
            })
            .addCase(createNewRide.fulfilled, (state, action) => {
                state.loading.newRideLoading = false;
                state.newRide = action.payload.ride;
            })
            .addCase(createNewRide.rejected, (state, action) => {
                state.loading = false;
                state.error.newRideError = action.payload;
            });
    },
});

export { 
    getFarePrice,
    createNewRide,
 };
export default rideSlice.reducer;
