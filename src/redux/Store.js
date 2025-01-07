import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./Slice.js";
const store = configureStore({
    reducer: {
      book: listReducer,
    },
  });

export default store;