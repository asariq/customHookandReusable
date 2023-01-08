import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from './slice';
import { shipsApi } from './apiSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [shipsApi.reducerPath]: shipsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware),
})

setupListeners(store.dispatch)