import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  payItems: [],
};

export const cartPayment = createSlice({
  initialState,
  reducers: {
    storePayItems: (state, action) => {
      if (!state.payItems.some((e) => e.cake_id === action.payload.cake_id)) {
        state.payItems.push(action.payload);
      }
    },
    removePayItems: (state, action) => {
      if (state.payItems.some((e) => e.cake_id === action.payload.cake_id)) {
        state.payItems = [
          ...state.payItems.filter((el) => el.cake_id !== action.payload.cake_id),
        ];
      }
    },
  },
  name: 'cartPayment',
});

export const { storePayItems, removePayItems } = cartPayment.actions;

export default cartPayment.reducer;
