import { configureStore } from '@reduxjs/toolkit';
import captainReducer from "../features/captain/captainSlice";
import userReducer from "../features/user/userSlice";
import mapReducer from "../features/map/mapSlice";
import rideReducer from "../features/ride/rideSlice"

export default configureStore({
    reducer:{
        user:userReducer,
        captain: captainReducer,
        map:mapReducer,
        ride:rideReducer
    },
})