import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// GLOBAL STORE SETUP
// basket is a slice, we can have multiple slices for different purposes, like userSlice, basketSlice, etc. and all of these slices contain information that is relevant to that slice
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
