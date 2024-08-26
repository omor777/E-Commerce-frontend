import { createSelector } from "@reduxjs/toolkit";

const productsCart = (state) => {
  return state.cart;
};

export const getCartProducts = createSelector([productsCart], (cart) => {
  return cart.items;
});
