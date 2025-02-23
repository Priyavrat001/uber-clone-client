import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

// Async Thunks
const getUser = createAsyncThunk("user/fetchUser", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/user/me`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch user");
    }
});

const logoutUser = createAsyncThunk("user/logoutUser", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${server}/user/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
});

const newUser = createAsyncThunk("user/newUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/user/new`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
});

const loginUser = createAsyncThunk("user/loginUser", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${server}/user/login`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login failed");
    }
});

// Redux Slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch user
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Logout user
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // New user (Signup)
            .addCase(newUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(newUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(newUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Login user
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export Async Actions
export { getUser, loginUser, logoutUser, newUser };

// Export Reducer
export default userSlice.reducer;
