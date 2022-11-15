import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, action: PayloadAction<object>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
