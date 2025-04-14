import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productInfo = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (productInfo) {
        productInfo.count += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;
