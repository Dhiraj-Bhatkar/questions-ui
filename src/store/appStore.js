import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@/reducers/appReducer";
export const appStore = configureStore({
  reducer: {
    appReducer,
  },
  middleware: [],
});
