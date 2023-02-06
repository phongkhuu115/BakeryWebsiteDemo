import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  user: null,
  access_token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    success: (state, action) => {
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.access_token = action.payload.access_token;
    },
    fail: (state, action) => {
      state.message = action.payload.message;
    },
  },
});

export const { success, fail } = userSlice.actions;

export default userSlice.reducer;
