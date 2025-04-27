import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartData")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productInfo = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (productInfo) {
        productInfo.count += 1;
        localStorage.setItem("cartData", JSON.stringify(state.items));
      } else {
        state.items.push(action.payload);
        localStorage.setItem("cartData", JSON.stringify(state.items));
      }
    },
    removeCartItem: (state, action) => {
      const productInfo = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (productInfo.count === 1) {
        const newFitleredItmes = state.items.filter(
          (products) => products.id !== productInfo.id
        );
        state.items = newFitleredItmes;
      } else {
        productInfo.count -= 1;
      }
    },
    removeFromCart : (state,action)=>{
      const newCart = state.items.filter(product=>product.id!==action.payload.id)
      state.items = newCart
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
export default cartSlice.reducer;
export const {removeFromCart, addToCart, clearCart, removeCartItem } = cartSlice.actions;
