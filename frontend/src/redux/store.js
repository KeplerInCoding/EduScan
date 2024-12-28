import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,  // Replacing rootReducer here with the actual combined reducer
  preloadedState: initialState,  // Initial state if needed
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  // Adding thunk middleware
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});
