import { configureStore } from '@reduxjs/toolkit';
import captainReducer from "../features/captain/captainSlice";
import userReducer from "../features/user/userSlice";
;
export default configureStore({
    reducer:{
        user:userReducer,
        captain: captainReducer
    },
})