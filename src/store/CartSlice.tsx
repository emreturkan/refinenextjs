import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface Users {
  user: string[];
  cartQuantity: number;
}

const initialState: Users = {
  user: [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<object>) => {
      const index: number = action.payload.id;
      const itemIndex: number = state.user.findIndex(item => item.id === index);
      if (itemIndex >= 0) {
        state.user[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct: object = { ...action.payload, cartQuantity: 1 };
        state.user.push(tempProduct);
      }
    },
    desc: (state, action) => {
      const itemIndex = state.user.findIndex(
        item => item.id === action.payload
      );
      if (state.user[itemIndex].cartQuantity > 1) {
        state.user[itemIndex].cartQuantity -= 1;
      } else if (state.user[itemIndex].cartQuantity === 1) {
        state.user = state.user.filter(item => item.id !== action.payload);
      }
    },
    inc: (state, action) => {
      const itemIndex = state.user.findIndex(
        item => item.id === action.payload
      );

      state.user[itemIndex].cartQuantity += 1;
    },
    removeItem: (state, action) => {
      state.user = state.user.filter(item => item.id !== action.payload);
    },
  },
});

export const { addCart, inc, desc, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
