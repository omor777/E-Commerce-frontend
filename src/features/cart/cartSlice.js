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
    removeProductFromCart(state, action) {
      const findProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (findProductIndex === -1) return;

      state.items.splice(findProductIndex, 1);
    },
  },
});

export const {
  addToCart,
  addQuantityByButton,
  removeQuantityByButton,
  updateQuantityByInput,
  removeProductFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
