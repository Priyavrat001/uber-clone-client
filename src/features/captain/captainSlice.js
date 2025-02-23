import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../config/server";

const getCaptain = createAsyncThunk("captain/me", async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get(`${server}/captain/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const captainLogout = createAsyncThunk(
  "captain/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${server}/captain/logout`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Not able to logout"
      );
    }
  }
);

const captainLogin = createAsyncThunk(
  "captain/login",
  async (captainData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${server}/captain/login`, captainData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login fail");
    }
  }
);

const captainSignup = createAsyncThunk(
  "captain/signup",
  async (captainData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${server}/captain/new`, captainData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Signup fail");
    }
  }
);

const captainSlice = createSlice({
  name: "captain",
  initialState: {
    captain: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get captain
      .addCase(getCaptain.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCaptain.fulfilled, (state, action) => {
        state.loading = false;
        state.captain = action.payload;
      })
      .addCase(getCaptain.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // logout captain
      .addCase(captainLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(captainLogout.fulfilled, (state) => {
        state.loading = false;
        state.captain = null;
      })
      .addCase(captainLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // login captain
      .addCase(captainLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(captainLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.captain = action.payload;
      })
      .addCase(captainLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // signUp captain
      .addCase(captainSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(captainSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.captain = action.payload;
      })
      .addCase(captainSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});


export {
    getCaptain,
    captainLogout,
    captainLogin,
    captainSignup
};

export default captainSlice.reducer;