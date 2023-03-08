import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: '',
};

export const cartAddSlice = createSlice({
  initialState,
  reducers: {
    setAddItem: (state, action) => {
      state.cartItem = action.payload;
    },
  },
  name: 'cartAddItem',
});

export const { setAddItem } = cartAddSlice.actions;

export default cartAddSlice.reducer;
