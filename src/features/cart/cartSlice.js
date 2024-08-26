import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, regular_price, image } = action.payload;
      const isExist = state.items.find((item) => item.id === id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        const product = { id, quantity: 1, name, regular_price, image };
        state.items.push(product);
      }
    },
    addQuantityByButton(state, action) {
      const product = state.items.find((item) => item.id === action.payload);

      if (!product) return;

      product.quantity += 1;
    },
    removeQuantityByButton(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (!product) return;
      if (product.quantity === 1) return;

      product.quantity -= 1;
    },
    updateQuantityByInput(state, action) {
      const { id, value } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.quantity = value;
      }
    },
  },
});

export const {
  addToCart,
  addQuantityByButton,
  removeQuantityByButton,
  updateQuantityByInput,
} = cartSlice.actions;

export default cartSlice.reducer;
