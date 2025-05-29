import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

// Async Thunks
const getSuggestedLoctions = createAsyncThunk("map/getSuggestedLoctions", async (query, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/map/get-suggested-locations`, {
            params: { address: query },
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
            coordinates: null,
            distance: null,
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


    },
});

// Export Async Actions
export { getSuggestedLoctions };

// Export Reducer
export default mapSlice.reducer;
