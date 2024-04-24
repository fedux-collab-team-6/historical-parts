import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action) => {
    //   const item = state.products.find((item) => item.id === action.payload.id);

    //   if (item) {
    //     item.quantity += action.payload.quantity;
    //   } else {
    //     state.push(action.payload);
    //   }
    // },

    addToCart: (state, action) => {
      const item = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (item === -1) {
        // If the item is not found in the cart, add it
        // state.products.push(action.payload);
        state.products = [...state.products, action.payload];
      }
      toast.success("Product added to cart");
      return state;

      // If the item is found, do nothing
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      toast.success("Products removed from cart");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
