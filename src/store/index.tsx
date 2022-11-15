import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
