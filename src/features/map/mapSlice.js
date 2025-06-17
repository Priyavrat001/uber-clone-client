import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

// Async Thunks
const getSuggestedLoctions = createAsyncThunk("map/getSuggestedLoctions", async (query, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/api/v1/map/get-suggested-locations`, {
            params: { address: query },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch suggestions");
    }
});

const getDestence = createAsyncThunk("map/getDestence", async ({origin, destination}, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/api/v1/map/get-distance`, {
            params: { origin, destination },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch suggestions");
    }
});

// Redux Slice
const mapSlice = createSlice({
    name: "map",
    initialState: {
        map: {
            coordinates: {
                origin:null,
                destination:null
            },
            duration: null,
            suggestions: { locations: [] }
        },
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch user
            .addCase(getSuggestedLoctions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getSuggestedLoctions.fulfilled, (state, action) => {
                state.loading = false;
                state.map.suggestions = action.payload;
            })
            .addCase(getSuggestedLoctions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get destence
            .addCase(getDestence.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDestence.fulfilled, (state, action) => {
                state.loading = false;
                state.map.duration = action.payload.durationInMin;
                state.map.coordinates.origin = action.payload.origin;
                state.map.coordinates.destination = action.payload.destination
            })
            .addCase(getDestence.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    },
});

// Export Async Actions
export { getSuggestedLoctions, getDestence };

// Export Reducer
export default mapSlice.reducer;
