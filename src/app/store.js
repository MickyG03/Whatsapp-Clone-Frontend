import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice"

const rootReducer = combineReducers({
    user:userSlice,
});

export const store = configureStore({
    reducer:rootReducer,
    devTools:true,
});

