import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';
import {candidatesApiSlice} from "./slices/candidatesApiSlice";
import candidateReducer from './slices/candidateSlice'

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [candidatesApiSlice.reducerPath]: candidatesApiSlice.reducer,
        auth: authReducer,
        candidate: candidateReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware).concat(candidatesApiSlice.middleware),
    devTools: true,
});

export default store;