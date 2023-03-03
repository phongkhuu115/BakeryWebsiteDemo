import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  cartID: ''
};

export const cartIDSlice = createSlice({
  initialState,
  reducers: {
    storeCartID: (state, action) => {
      state.cartID = action.payload.cart.cart_id;
      state.message = action.payload.message;
    },
    failFetch: (state, action) => {
      state.message = action.payload.message;
    },
  },
  name: 'cartID',
});

export const { storeCartID, failFetch } = cartIDSlice.actions;

export default cartIDSlice.reducer;
