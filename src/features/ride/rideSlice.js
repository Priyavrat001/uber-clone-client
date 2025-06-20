import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

// Async Thunks
const getFarePrice = createAsyncThunk("ride/getFarePrice", async ({ pickUp, destination }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/api/v1/ride/get-fare-price`, {
            params: { pickUp, destination },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch fare price");
    }
});
const createNewRide = createAsyncThunk("ride/createNewRide", async (rideData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/api/v1/ride/new-ride`, rideData,{
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to Create a ride");
    }
});

const userRideCOnfirm = createAsyncThunk("ride/confirmRide", async ({rideId}, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/api/v1/ride/confirm-ride`, {rideId},{
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to Create a ride");
    }
});

const rideStarted = createAsyncThunk("ride/rideStarted", async ({rideId, captain, otp}, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/api/v1/ride/start-ride`, {rideId, captain, otp},{
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
        rideConfirm:null,
        rideStarted:null,
        loading: {
            faresLoading:false,
            newRideLoading:false,
            rideConfirmLoading:false,
            rideStartedLoading:false
        },
        error: {
            faresError:null,
            newRideError:null,
            rideConfirmError:null,
            rideStartedError:null
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
                state.loading.newRideLoading = false;
                state.error.newRideError = action.payload;
            })
            
            //confirm ride
            .addCase(userRideCOnfirm.pending, (state) => {
                state.loading.rideConfirmLoading = true;
                state.error.rideConfirmError = null;
            })
            .addCase(userRideCOnfirm.fulfilled, (state, action) => {
                state.loading.rideConfirmLoading = false;
                state.rideConfirm = action.payload.ride;
            })
            .addCase(userRideCOnfirm.rejected, (state, action) => {
                state.loading.rideConfirmLoading = false;
                state.error.rideConfirmError = action.payload;
            })

            //ride started
            .addCase(rideStarted.pending, (state) => {
                state.loading.rideStartedLoading = true;
                state.error.rideStartedError = null;
            })
            .addCase(rideStarted.fulfilled, (state, action) => {
                state.loading.rideStartedLoading = false;
                state.rideStarted = action.payload.ride;
            })
            .addCase(rideStarted.rejected, (state, action) => {
                state.loading.rideStartedLoading = false;
                state.error.rideStartedError = action.payload;
            })
    },
});

export { 
    getFarePrice,
    createNewRide,
    userRideCOnfirm,
    rideStarted
 };
export default rideSlice.reducer;
